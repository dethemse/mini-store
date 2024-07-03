import { getCart } from '@/actions/cart';
import { ProductCard } from '@/components/organisms/ProductCard';
import { ButtonCartDelete } from '@/components/organisms/ButtonCartDelete';

export const ProductCart = async () => {
	const cartItems = await getCart();

	return (
		<div className="flex flex-col gap-y-3">
			{cartItems.map(({ product, quantity }) =>
				product ? (
					<ProductCard
						key={product.id}
						product={product}
						orientation="horizontal"
						actions={[
							<ButtonCartDelete key={`cart-delete-${product.id}`} productId={product.id} />,
						]}
					>
						{quantity > 1 && <p className="rounded-full bg-slate-400 px-2 font-bold">{quantity}</p>}
					</ProductCard>
				) : null,
			)}
		</div>
	);
};
