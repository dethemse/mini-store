'use client';

import { Cart } from '@/types/models/Cart';
import { Button } from '@/ui/components/atoms/Button';
import { ShoppingCartIcon } from '@/ui/icons';
import { addProductToCart } from '@/actions/cart';
import { useToast } from '@/components/molecules/Toast';
import { Product } from '@/types/models/Product';

type Props = {
	productId: Cart['productId'];
	productName: Product['name'];
};

export const ButtonCartAdd = ({ productId, productName }: Props) => {
	const { toast } = useToast();

	const handleAddProduct = async () => {
		addProductToCart({ productId }).then(() => {
			toast({
				title: `${productName} is added successfully!`,
				variant: 'success',
			});
		});
	};

	return (
		<Button onClick={handleAddProduct} className="flex w-full gap-x-2">
			<ShoppingCartIcon className="size-5" />
			<span>Add to Cart</span>
		</Button>
	);
};
