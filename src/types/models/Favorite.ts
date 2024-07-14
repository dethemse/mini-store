import { Product } from './Product';

export type Favorite = {
	id: string;
	productId: Product['id'];
	position: number;

	// relations
	product?: Product;
};
