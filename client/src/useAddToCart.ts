import { useDispatch } from 'react-redux';

import { Product } from './generated';
import { AddToCartAction } from './types';

export type UseAddToCartHook = () => (product: Product) => void;

/**
 * Action creator for the ADD_TO_CART action.
 */
export const useAddToCart: UseAddToCartHook = () => {
	const dispatch = useDispatch();

	return (product: Product) => {
		const action: AddToCartAction = {
			type: 'ADD_TO_CART',
			payload: product
		};

		dispatch(action);
	};
};
