'use server';

import * as internalApi from '@/services/api/internal';
import { cache } from '@/utils/cache';

const QUERY_KEY = 'favorite';
const QUERY_TAG = 'favoriteTag';

export const getFavorite = cache(
	async () => {
		return internalApi.favorite.findAll({ relations: 'product', sortBy: 'position' });
	},
	[QUERY_KEY],
	{
		revalidate: 60 * 60, // 1 hour
		tags: [QUERY_TAG],
	},
);
