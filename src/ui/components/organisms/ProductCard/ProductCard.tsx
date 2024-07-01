import Image from 'next/image';

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
import { Button } from '../../atoms/Button';
import { formatCurrency } from '@/utils/formatCurrency';

type Props = {
	product: Product;
	orientation?: 'vertical' | 'horizontal';
};

export const ProductCard = ({ product, orientation = 'vertical' }: Props) => {
	const isHorizontal = orientation === 'horizontal';

	return (
		<Card className={cn(isHorizontal && 'flex-row')}>
			<CardPreview className={cn(isHorizontal && 'w-32')}>
				<Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 100vw" />
			</CardPreview>
			<CardHeader>
				<CardTitle>{product.name}</CardTitle>
				<CardDescription>
					<span className="font-bold">Category: </span>
					{product.category}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-xl">{formatCurrency(product.price / 100)}</p>
			</CardContent>
			<CardFooter>
				<Button>Add to cart</Button>
				<Button>Add to favorite</Button>
			</CardFooter>
		</Card>
	);
};
