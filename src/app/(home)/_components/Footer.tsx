import Link from 'next/link';

import { Brand } from '@/ui/components/organisms/Brand';

export const Footer = () => {
	return (
		<div className="bg-slate-600">
			<div className="container flex min-h-16 items-center justify-between">
				<Link href="/">
					<Brand />
				</Link>

				<small className="text-white/90">Made in Ukraine 🇺🇦</small>
			</div>
		</div>
	);
};
