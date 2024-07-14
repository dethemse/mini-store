'use client';

import { useFavorite } from '@/providers/FavoriteProvider';
import { Favorite } from '@/types/models/Favorite';
import { Button } from '@/ui/components/atoms/Button';
import { StarIcon } from '@/ui/icons';
import { cn } from '@/utils/cn';
import * as favoriteActions from '@/actions/favorite';

type Props = {
	productId: Favorite['productId'];
};

export const ButtonFavoriteAdd = ({ productId }: Props) => {
	const { favorite, addFavorite, deleteFavorite } = useFavorite();

	const productIds = new Set(favorite.map((item) => item.productId));
	const isFavorite = productIds.has(productId);

	const label = isFavorite ? 'Delete from Favorite' : 'Add to Favorite';

	const handleToggleFavorite = async () => {
		if (isFavorite) {
			// API
			await favoriteActions.deleteFavorite(productId);

			// Client
			deleteFavorite(productId);
		} else {
			// API
			const added = await favoriteActions.addFavorite({ productId });

			// Client
			addFavorite(added);
		}
	};

	return (
		<Button onClick={handleToggleFavorite} variant="secondary" className="flex w-full gap-x-1">
			<StarIcon
				className={cn('size-5', isFavorite && 'text-yellow-500', !isFavorite && 'text-slate-500')}
			/>
			<span>{label}</span>
		</Button>
	);
};
