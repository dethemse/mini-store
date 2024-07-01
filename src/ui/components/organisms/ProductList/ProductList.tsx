import { Product } from '@/types/models/Product';
import { ProductCard } from '@/ui/components/organisms/ProductCard';

type Props = {
	products: Product[];
};

export const ProductList = ({ products }: Props) => {
	return (
		<div>
			<div className="grid grid-cols-3 gap-4">
				{products.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
