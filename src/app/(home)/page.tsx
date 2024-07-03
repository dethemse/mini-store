import 'server-only';

import { PageProps } from '@/types/app';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { ProductList } from '@/ui/components/organisms/ProductList';
import { Separator } from '@/ui/components/atoms/Separator';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { getProducts } from '@/actions/products';

export default async function Home({}: PageProps) {
	const products = await getProducts();

	return (
		<TemplateScaffold header={<Header />} footer={<Footer />}>
			<div className="container my-5 flex flex-col gap-y-5">
				<ProductList products={[]} title="My Favorite" orientation="horizontal" />

				<Separator />

				<ProductList products={products} title="All Products" />
			</div>
		</TemplateScaffold>
	);
}
