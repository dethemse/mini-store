import { buildQueryString, internalClient } from '@/services/libs/internalClient';
import { Criteria } from '@/types/helpers/Criteria';
import { Cart } from '@/types/models/Cart';

const url = '/cart';

export async function findAll(criteria?: Criteria<Cart>) {
	const queryString = buildQueryString(criteria);

	const { data } = await internalClient.get<Cart[]>([url, queryString].join('?'));

	return data;
}
