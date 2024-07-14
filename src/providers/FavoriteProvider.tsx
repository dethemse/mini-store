'use client';

import { Favorite } from '@/types/models/Favorite';
import { createContext, PropsWithChildren, use, useState } from 'react';

type State = {
	favorite: Favorite[];

	sortFavorite: () => void;
	addFavorite: (favoriteItem: Favorite) => void;
	deleteFavorite: (productId: Favorite['productId']) => void;
};

const FavoriteContext = createContext<State | null>(null);

type Props = PropsWithChildren<{
	initialFavorite: Favorite[];
}>;

export const FavoriteProvider = ({ children, initialFavorite }: Props) => {
	const [favorite, setFavorite] = useState(initialFavorite);

	const sortFavorite = () => {};

	const addFavorite = (favoriteItem: Favorite) => {
		setFavorite((prev) => [...prev, favoriteItem]);
	};

	const deleteFavorite = (productId: Favorite['productId']) => {
		setFavorite((prev) => prev.filter((item) => item.productId !== productId));
	};

	return (
		<FavoriteContext.Provider
			value={{
				favorite,
				sortFavorite,
				addFavorite,
				deleteFavorite,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export const useFavorite = (): State | never => {
	const state = use(FavoriteContext);

	if (!state) {
		throw new Error('use `useFavorite` within <FavoriteProvider />');
	}

	return state;
};
