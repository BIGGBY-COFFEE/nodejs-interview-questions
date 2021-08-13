import { applyMiddleware } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import logger from 'redux-logger';

import { RootAction, RootState } from './types';

const initialState: RootState = { cart: [] };

const reducer = (state: RootState = initialState, action: RootAction) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: [...state.cart, action.payload]
			};
		case 'REMOVE_FROM_CART':
			return {
				...state,
				cart: state.cart.filter((_, index) => index !== action.payload)
			};
		default:
			return state;
	}
};

export const store = createStore(
	reducer,
	initialState,
	applyMiddleware(logger)
);

export type AppDispatch = typeof store.dispatch;
