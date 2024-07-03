import { buildQueryString, internalClient } from '@/services/libs/internalClient';
import { Criteria } from '@/types/helpers/Criteria';
import { Cart } from '@/types/models/Cart';
import { generateUuid } from '@/utils/generateUuid';

const url = '/cart';

export async function findAll(criteria?: Criteria<Cart>) {
	const queryString = buildQueryString(criteria);

	const { data } = await internalClient.get<Cart[]>([url, queryString].join('?'));

	return data;
}

export async function findByProductId(productId: Cart['productId']): Promise<Cart | null> {
	const { data } = await internalClient.get<Cart[]>(`${url}?productId=${productId}`);

	const [cartItem] = data;

	return cartItem ?? null;
}

export async function create(input: Pick<Cart, 'productId'>) {
	const body: Cart = {
		...input,
		quantity: 1,
		id: generateUuid(),
	};

	const { data } = await internalClient.post<Cart>(url, body);

	return data;
}

export async function upsert(input: Pick<Cart, 'productId'>) {
	const { productId } = input;

	const cartItem = await findByProductId(productId);

	if (!cartItem) {
		return create({ productId });
	}

	const body: Cart = {
		...cartItem,
		quantity: cartItem.quantity + 1,
	};

	const { data } = await internalClient.put(`${url}/${cartItem.id}`, body);

	return data;
}

export async function deleteItem(productId: Cart['productId']) {
	const cartItem = await findByProductId(productId);

	if (!cartItem) {
		throw new Error('Product in cart not found');
	}

	await internalClient.delete(`${url}/${cartItem.id}`);
}
