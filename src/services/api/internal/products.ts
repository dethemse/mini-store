import { internalClient } from '@/services/libs/internalClient';
import { Product } from '@/types/models/Product';

const url = '/products';

export async function findAll(_criteria?: unknown) {
	const { data } = await internalClient.get<Product[]>(url);

	return data;
}
