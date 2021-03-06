import { Product } from './generated';

/**
 * Adds the provided product to the user's cart
 */
export interface AddToCartAction {
	type: 'ADD_TO_CART';
	/**
	 * Product to add to the cart.
	 */
	payload: Product;
}

/**
 * Removes an item to the user's cart
 */
export interface RemoveFromCartAction {
	type: 'REMOVE_FROM_CART';
	/**
	 * Index of the cart item to remove.
	 */
	payload: number;
}

export type RootAction = AddToCartAction | RemoveFromCartAction;

export interface RootState {
	cart: Product[];
}
