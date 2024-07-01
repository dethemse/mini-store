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
import { Product } from '@/types/models/Product';
import { Button } from '../../atoms/Button';

type Props = {
	product: Product;
};

export const ProductCard = ({ product }: Props) => {
	return (
		<Card>
			<CardPreview>
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
				<p>{product.price}</p>
			</CardContent>
			<CardFooter>
				<Button>Add to cart</Button>
				<Button>Add to favorite</Button>
			</CardFooter>
		</Card>
	);
};
