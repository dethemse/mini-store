export type Criteria<
	TEntity extends Record<string, unknown>,
	TKey extends keyof TEntity = keyof TEntity,
> = {
	relations?: {
		[K in TKey]: K extends `${infer TField}Id` ? TField : never;
	}[TKey];
};
