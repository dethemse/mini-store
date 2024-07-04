import { cva, type VariantProps } from 'class-variance-authority';

import { Product } from '@/types/models/Product';
import { ProductCard } from '@/components/organisms/ProductCard';
import { Heading } from '@/components/atoms/Heading';
import { ButtonCartAdd } from '@/components/organisms/ButtonCartAdd';
import { ButtonFavoriteAdd } from '@/components/organisms/ButtonFavoriteAdd';

const listWrapper = cva('gap-4', {
	variants: {
		orientation: {
			horizontal: 'flex flex-col',
			vertical: 'grid grid-cols-3',
		},
	},
	defaultVariants: {
		orientation: 'vertical',
	},
});

type Props = {
	title: string;
	products: Product[];
} & VariantProps<typeof listWrapper>;

export const ProductList = ({ products, title, orientation = 'vertical' }: Props) => {
	return (
		<div className="space-y-4">
			<Heading>{title}</Heading>

			<div className={listWrapper({ orientation })}>
				{products.map((product) => (
					<ProductCard
						product={product}
						key={product.id}
						orientation={orientation!}
						actions={[
							<ButtonCartAdd
								productId={product.id}
								key={`cart-${product.id}`}
								productName={product.name}
							/>,
							<ButtonFavoriteAdd productId={product.id} key={`favorite-${product.id}`} />,
						]}
					/>
				))}
			</div>
		</div>
	);
};
