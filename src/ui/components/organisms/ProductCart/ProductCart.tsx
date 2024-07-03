import { getCart } from '@/actions/cart';
import { ProductCard } from '@/components/organisms/ProductCard';

export const ProductCart = async () => {
	const cartItems = await getCart();

	return (
		<div className="flex flex-col gap-y-3">
			{cartItems.map(({ product, quantity }) =>
				product ? (
					<ProductCard key={product.id} product={product} orientation="horizontal" />
				) : null,
			)}
		</div>
	);
};
