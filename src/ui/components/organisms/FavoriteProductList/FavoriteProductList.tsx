'use client';

import { Heading } from '@/components/atoms/Heading';
import { ProductCard } from '@/components/organisms/ProductCard';
import { ButtonCartAdd } from '@/components/organisms/ButtonCartAdd';
import { ButtonFavoriteAdd } from '@/components/organisms/ButtonFavoriteAdd';
import { useFavorite } from '@/providers/FavoriteProvider';

export const FavoriteProductList = () => {
	const { favorite } = useFavorite();

	return (
		<div className="space-y-4">
			<Heading>Favorite Products</Heading>

			<div className="flex flex-col gap-y-3">
				{favorite.length > 0 ? (
					favorite.map((favoriteItem) =>
						favoriteItem.product ? (
							<ProductCard
								product={favoriteItem.product}
								key={favoriteItem.id}
								actions={[
									<ButtonCartAdd
										productId={favoriteItem.product.id}
										key={`cart-${favoriteItem.product.id}`}
										productName={favoriteItem.product.name}
									/>,
									<ButtonFavoriteAdd
										productId={favoriteItem.product.id}
										key={`favorite-${favoriteItem.product.id}`}
									/>,
								]}
								orientation="horizontal"
							/>
						) : null,
					)
				) : (
					<p className="text-lg font-medium">
						Your favorite list is currently empty. Start adding your favorite products to see them
						here!
					</p>
				)}
			</div>
		</div>
	);
};
