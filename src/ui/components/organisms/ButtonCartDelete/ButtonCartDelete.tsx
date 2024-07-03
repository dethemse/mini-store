'use client';

import { Button } from '@/components/atoms/Button';
import { Cart } from '@/types/models/Cart';
import { CloseIcon } from '@/ui/icons';

type Props = {
	productId: Cart['productId'];
};

export const ButtonCartDelete = ({ productId }: Props) => {
	return (
		<Button
			variant="destructive"
			className="h-6 w-6 p-0"
			onClick={() => console.log('delete from cart', productId)}
		>
			<CloseIcon className="size-4" />
		</Button>
	);
};
