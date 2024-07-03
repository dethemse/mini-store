'use server';

import * as internalApi from '@/services/api/internal';
import { cache } from '@/utils/cache';

const QUERY_KEY = 'products';

export const getProducts = cache(
	async (...args: Parameters<typeof internalApi.products.findAll>) => {
		const [criteria] = args;

		return internalApi.products.findAll(criteria);
	},
	[QUERY_KEY],
	{
		revalidate: 60 * 60, // 1 hour
	},
);
