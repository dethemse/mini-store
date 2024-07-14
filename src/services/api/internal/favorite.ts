import { buildQueryString, internalClient } from '@/services/libs/internalClient';
import { Criteria } from '@/types/helpers/Criteria';
import { Favorite } from '@/types/models/Favorite';

const url = '/favorite';

export async function findAll(criteria?: Criteria<Favorite>) {
	const queryString = buildQueryString(criteria);

	const { data } = await internalClient.get<Favorite[]>([url, queryString].join('?'));

	return data;
}
