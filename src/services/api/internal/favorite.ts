import { internalClient } from '@/services/libs/internalClient';
import { Favorite } from '@/types/models/Favorite';

const url = '/favorite';

export async function findAll(_criteria?: unknown) {
	const { data } = await internalClient.get<Favorite[]>(url);

	return data;
}
