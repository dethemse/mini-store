'use client';

import { Heading } from '@/components/atoms/Heading';
import { ProductCard } from '@/components/organisms/ProductCard';
import { ButtonCartAdd } from '@/components/organisms/ButtonCartAdd';
import { ButtonFavoriteAdd } from '@/components/organisms/ButtonFavoriteAdd';
import { useFavorite } from '@/providers/FavoriteProvider';
import { SortableItem } from '@/providers/dnd/SortableItem';
import { DndProvider } from '@/providers/dnd/DndProvider';
import { sortFavorite as sortFavoriteAction } from '@/actions/favorite';
import { Favorite } from '@/types/models/Favorite';
import { GripVerticalIcon } from '@/ui/icons';

export const FavoriteProductList = () => {
	const { favorite, sortFavorite } = useFavorite();

	const handleSortingProducts = async (updatedProducts: Favorite[]) => {
		const sortedProducts = updatedProducts.map((item, index) => ({ ...item, position: index }));

		// Update client
		sortFavorite(sortedProducts);

		// Update API
		await sortFavoriteAction(sortedProducts.map(({ product, ...item }) => item));
	};

	return (
		<div className="space-y-4">
			<Heading>Favorite Products</Heading>

			<div className="flex flex-col gap-y-3">
				{favorite.length > 0 ? (
					<DndProvider data={favorite} sortingStrategy="vertical" onDragEnd={handleSortingProducts}>
						{favorite.map((favoriteItem) =>
							favoriteItem.product ? (
								<SortableItem
									key={favoriteItem.id}
									id={favoriteItem.id}
									dndElement={
										<div className="rounded-md bg-white/90">
											<GripVerticalIcon className="size-6 text-slate-900" />
										</div>
									}
								>
									<ProductCard
										product={favoriteItem.product}
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
								</SortableItem>
							) : null,
						)}
					</DndProvider>
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
