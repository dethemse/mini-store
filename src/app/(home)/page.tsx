import 'server-only';

import { PageProps } from '@/types/app';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { ProductList } from '@/ui/components/organisms/ProductList';
import { Separator } from '@/ui/components/atoms/Separator';
import { FavoriteProductList } from '@/components/organisms/FavoriteProductList';
import { getProducts } from '@/actions/products';
import { getFavorite } from '@/actions/favorite';
import { FavoriteProvider } from '@/providers/FavoriteProvider';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';

export default async function Home({}: PageProps) {
	const [products, favorite] = await Promise.all([getProducts(), getFavorite()]);

	return (
		<FavoriteProvider initialFavorite={favorite}>
			<TemplateScaffold header={<Header />} footer={<Footer />}>
				<div className="container my-5 flex flex-col gap-y-5">
					<FavoriteProductList />

					<Separator />

					<ProductList products={products} title="All Products" />
				</div>
			</TemplateScaffold>
		</FavoriteProvider>
	);
}
