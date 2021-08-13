import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import { RootState } from '../types';
import { Product } from '../generated';
import { formatPrice } from '../formatPrice';

export const Cart: React.FC = () => {
	const cart = useSelector<RootState, Product[]>(state => state.cart);

	return (
		<div className="card">
			<h5 className="card-header">Cart</h5>

			{cart.length === 0 ? (
				<div className="card-body">
					<p className="card-text">Your cart is empty.</p>
				</div>
			) : (
				<>
					<div className="list-group list-group-flush">
						{cart.map((item, index) => (
							<div
								className="list-group-item d-flex align-items-center justify-content-between"
								key={index}
							>
								<h6 className="mb-0 font-weight-normal">
									{item.name}
								</h6>

								<h6 className="mb-0">
									${formatPrice(item.price)}
								</h6>
							</div>
						))}
					</div>

					<Route exact path="/">
						<div className="card-body">
							<Link
								to="/checkout"
								className="btn btn-primary btn-block"
							>
								Checkout
							</Link>
						</div>
					</Route>
				</>
			)}
		</div>
	);
};
