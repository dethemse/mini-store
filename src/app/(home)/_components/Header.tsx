import Link from 'next/link';

import { Brand } from '@/ui/components/organisms/Brand';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	PopoverArrow,
} from '@/ui/components/molecules/Popover';
import { ShoppingBasketIcon } from '@/ui/icons';
import { ProductCart } from '@/ui/components/organisms/ProductCart';

export const Header = () => {
	const cartCounter = 0;

	return (
		<div className="bg-slate-600">
			<div className="container flex min-h-16 items-center justify-between">
				<Link href="/">
					<Brand />
				</Link>

				<Popover>
					<PopoverTrigger className="flex gap-x-1 text-white">
						<ShoppingBasketIcon className="size-6" />
						<span>({cartCounter})</span>
					</PopoverTrigger>
					<PopoverContent align="end" sideOffset={10}>
						{cartCounter > 0 ? <ProductCart /> : <p className="text-center">Empty</p>}

						<PopoverArrow className="fill-white" />
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
};
