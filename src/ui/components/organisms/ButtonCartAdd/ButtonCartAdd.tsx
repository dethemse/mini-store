'use client';

import { Cart } from '@/types/models/Cart';
import { Button } from '@/ui/components/atoms/Button';
import { ShoppingCartIcon } from '@/ui/icons';

type Props = {
	productId: Cart['productId'];
};

export const ButtonCartAdd = ({ productId }: Props) => {
	const handleAddProduct = async () => {
		// TODO add product to cart
		console.log('add to cart', { productId });
	};

	return (
		<Button onClick={handleAddProduct} className="flex w-full gap-x-2">
			<ShoppingCartIcon className="size-5" />
			<span>Add to Cart</span>
		</Button>
	);
};
