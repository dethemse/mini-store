'use server';

import * as internalApi from '@/services/api/internal';
import { cache } from '@/utils/cache';

const QUERY_KEY = 'cart';
const QUERY_TAG = 'cartTag';

export const getCart = cache(
	async () => {
		return internalApi.cart.findAll({ relations: 'product' });
	},
	[QUERY_KEY],
	{
		revalidate: 60 * 60, // 1 hour
		tags: [QUERY_TAG],
	},
);
