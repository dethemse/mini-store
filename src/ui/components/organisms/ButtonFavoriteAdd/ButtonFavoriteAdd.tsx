'use client';

import { Favorite } from '@/types/models/Favorite';
import { Button } from '@/ui/components/atoms/Button';
import { StarIcon } from '@/ui/icons';
import { cn } from '@/utils/cn';

type Props = {
	productId: Favorite['productId'];
};

export const ButtonFavoriteAdd = ({ productId }: Props) => {
	const isFavorite = true;

	const label = isFavorite ? 'Delete from Favorite' : 'Add to Favorite';

	const handleToggleFavorite = async () => {
		// TODO add product to favorite
		console.log('click favorite', { productId });
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
