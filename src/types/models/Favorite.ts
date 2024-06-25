import { Product } from './Product';

export interface Favorite {
	id: string;
	productId: Product['id'];
	position: number;
}
