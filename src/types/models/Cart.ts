import { Product } from './Product';

export type Cart = {
	id: string;
	productId: Product['id'];
	quantity: number;

	// relations
	product?: Product;
};
