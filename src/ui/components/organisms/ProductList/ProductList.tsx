import { Product } from '@/types/models/Product';
import { ProductCard } from '@/ui/components/organisms/ProductCard';
import { Heading } from '../../atoms/Heading';

type Props = {
	title: string;
	products: Product[];
};

export const ProductList = ({ products, title }: Props) => {
	return (
		<div className="space-y-4">
			<Heading>{title}</Heading>

			<div className="grid grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
