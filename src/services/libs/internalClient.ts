import axios from 'axios';
import queryString from 'querystring';

import { env } from '@/configs/env';
import { Criteria } from '@/types/helpers/Criteria';

const baseUrl = env.NEXT_PUBLIC_INTERNAL_API;

export const internalClient = axios.create({
	baseURL: baseUrl,
	headers: {
		Accept: 'application/json',
	},
});

export const buildQueryString = <TEntity extends Record<string, unknown>>(
	criteria?: Criteria<TEntity>,
) => {
	if (!criteria) {
		return '';
	}

	const query: { [key: string]: any } = {};

	if (criteria.relations) {
		query._embed = criteria.relations;
	}

	if (criteria.sortBy) {
		query._sort = criteria.sortBy;
	}

	return queryString.stringify(query);
};
