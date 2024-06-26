import Link from 'next/link';

import { Brand } from '@/ui/components/organisms/Brand';

export const Header = () => {
	return (
		<div className="bg-slate-600">
			<div className="container flex min-h-16 items-center justify-between">
				<Link href="/">
					<Brand />
				</Link>

				<div>Cart</div>
			</div>
		</div>
	);
};
