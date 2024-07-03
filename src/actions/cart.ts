'use server';

import { revalidateTag } from 'next/cache';

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

export const addProductToCart = async (...args: Parameters<typeof internalApi.cart.upsert>) => {
	const [input] = args;

	const addedProduct = await internalApi.cart.upsert(input);

	revalidateTag(QUERY_TAG);

	return addedProduct;
};

export const removeProductFromCart = async (
	...args: Parameters<typeof internalApi.cart.deleteItem>
) => {
	const [productId] = args;

	await internalApi.cart.deleteItem(productId);

	revalidateTag(QUERY_TAG);
};
