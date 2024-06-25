import { Product } from './Product';

export interface Cart {
	id: string;
	productId: Product['id'];
	quantity: number;
}
