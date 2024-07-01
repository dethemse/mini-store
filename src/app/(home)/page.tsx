import 'server-only';

import { PageProps } from '@/types/app';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { ProductList } from '@/ui/components/organisms/ProductList';
import { Separator } from '@/ui/components/atoms/Separator';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';

export default function Home({}: PageProps) {
	const products = [
		{
			id: '1',
			name: 'Wireless Mouse',
			category: 'Electronics',
			price: 5000,
			image: 'https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c',
		},
		{
			id: '2',
			name: 'Bluetooth Headphones',
			category: 'Electronics',
			price: 80000,
			image: 'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85',
		},
		{
			id: '3',
			name: 'Coffee Maker',
			category: 'Home Appliances',
			price: 120000,
			image: 'https://images.unsplash.com/photo-1637029436347-e33bf98a5412',
		},
	];

	return (
		<TemplateScaffold header={<Header />} footer={<Footer />}>
			<div className="container my-5 flex flex-col gap-y-5">
				<ProductList products={products} title="My Favorite" orientation="horizontal" />

				<Separator />

				<ProductList products={products} title="All Products" />
			</div>
		</TemplateScaffold>
	);
}
