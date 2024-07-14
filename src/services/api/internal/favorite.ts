import { buildQueryString, internalClient } from '@/services/libs/internalClient';
import { Criteria } from '@/types/helpers/Criteria';
import { Favorite } from '@/types/models/Favorite';
import { generateUuid } from '@/utils/generateUuid';
import * as productApi from './products';

const url = '/favorite';

export async function findAll(criteria?: Criteria<Favorite>) {
	const queryString = buildQueryString(criteria);

	const { data } = await internalClient.get<Favorite[]>([url, queryString].join('?'));

	return data;
}

export async function findByProductId(productId: Favorite['productId']) {
	const { data } = await internalClient.get<Favorite[]>(`${url}?productId=${productId}`);

	const [favoriteItem] = data;

	return favoriteItem ?? null;
}

export async function create(input: Pick<Favorite, 'productId'>): Promise<Favorite> {
	const { productId } = input;

	const favorite = await findAll();
	const productIds = new Set(favorite.map((item) => item.productId));

	if (productIds.has(productId)) {
		throw new Error('Product is already added');
	}

	const position = favorite.length > 0 ? Math.max(...favorite.map((item) => item.position)) + 1 : 0;

	const body: Favorite = {
		productId,
		position,
		id: generateUuid(),
	};

	const { data } = await internalClient.post<Favorite>(url, body);

	const product = await productApi.findById(productId);

	return { ...data, product };
}

export async function update() {}

export async function deleteItem(productId: Favorite['productId']) {
	const favorite = await findByProductId(productId);

	if (!favorite) {
		throw new Error('Product in favorite list not found');
	}

	await internalClient.delete(`${url}/${favorite.id}`);
}
