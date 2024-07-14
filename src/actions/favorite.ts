'use server';

import { revalidateTag } from 'next/cache';

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

export const addFavorite = async (...args: Parameters<typeof internalApi.favorite.create>) => {
	const [input] = args;

	const createdFavorite = await internalApi.favorite.create(input);

	revalidateTag(QUERY_TAG);

	return createdFavorite;
};

export const deleteFavorite = async (
	...args: Parameters<typeof internalApi.favorite.deleteItem>
) => {
	const [productId] = args;

	await internalApi.favorite.deleteItem(productId);

	revalidateTag(QUERY_TAG);
};

export const sortFavorite = async (...args: Parameters<typeof internalApi.favorite.updateAll>) => {
	const [input] = args;

	const sortedFavorite = await internalApi.favorite.updateAll(input);

	revalidateTag(QUERY_TAG);

	return sortedFavorite;
};
