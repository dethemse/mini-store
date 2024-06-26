import 'server-only';

import { PageProps } from '@/types/app';
import { Button } from '@/ui/components/atoms/Button';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';

export default function Home({}: PageProps) {
	return (
		<TemplateScaffold header={<Header />} footer={<Footer />}>
			<div className="container my-5 flex flex-col gap-y-5">
				<h1>Hello World</h1>
				<Button>Lorem</Button>
			</div>
		</TemplateScaffold>
	);
}
