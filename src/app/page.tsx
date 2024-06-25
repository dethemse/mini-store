import 'server-only';

import { PageProps } from '@/types/app';
import { Button } from '@/ui/components/atoms/Button';

export default function Home({}: PageProps) {
	return (
		<main className="p-24">
			<h1>Hello World</h1>
			<Button>Lorem</Button>
		</main>
	);
}
