import { internalClient } from '@/services/libs/internalClient';
import { Cart } from '@/types/models/Cart';

const url = '/cart';

export async function findAll(_criteria?: unknown) {
	const { data } = await internalClient.get<Cart[]>(url);

	return data;
}
