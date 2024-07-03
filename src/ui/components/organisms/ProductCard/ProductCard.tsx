import Image from 'next/image';
import { PropsWithChildren, ReactNode } from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	CardPreview,
} from '@/ui/components/molecules/Card';
import { cn } from '@/utils/cn';
import { Product } from '@/types/models/Product';
import { formatCurrency } from '@/utils/formatCurrency';

type Props = PropsWithChildren<{
	product: Product;
	actions: ReactNode[];
	orientation?: 'vertical' | 'horizontal';
}>;

export const ProductCard = ({ product, actions, children, orientation = 'vertical' }: Props) => {
	const isHorizontal = orientation === 'horizontal';

	return (
		<Card className={cn(isHorizontal && 'flex-row')}>
			<CardPreview className={cn(isHorizontal && 'w-32')}>
				<Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw" />
			</CardPreview>
			<CardHeader className="justify-center">
				<CardTitle>{product.name}</CardTitle>
				<CardDescription>
					<span className="font-bold">Category: </span>
					{product.category}
				</CardDescription>
			</CardHeader>
			<CardContent className={cn(isHorizontal && 'flex-row items-center gap-x-2')}>
				<p className="text-xl">{formatCurrency(product.price / 100)}</p>
				{children}
			</CardContent>
			<CardFooter className={cn('flex-col gap-y-1', isHorizontal && 'ml-auto p-2')}>
				{actions}
			</CardFooter>
		</Card>
	);
};
