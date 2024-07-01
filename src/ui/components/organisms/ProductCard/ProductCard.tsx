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
import { formatCurrency } from '@/utils/formatCurrency';
import { ButtonCartAdd } from '@/ui/components/organisms/ButtonCartAdd';
import { ButtonFavoriteAdd } from '@/ui/components/organisms/ButtonFavoriteAdd';

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
			<CardHeader className="justify-center">
				<CardTitle>{product.name}</CardTitle>
				<CardDescription>
					<span className="font-bold">Category: </span>
					{product.category}
				</CardDescription>
			</CardHeader>
			<CardContent className="justify-center">
				<p className="text-xl">{formatCurrency(product.price / 100)}</p>
			</CardContent>
			<CardFooter className={cn('flex-col gap-y-1', isHorizontal && 'ml-auto p-2')}>
				<ButtonCartAdd productId={product.id} />
				<ButtonFavoriteAdd productId={product.id} />
			</CardFooter>
		</Card>
	);
};
