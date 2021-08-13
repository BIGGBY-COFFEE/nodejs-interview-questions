import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useOrderQuery } from '../generated';

export const Order: React.FC = () => {
	const variables = useParams<{ id: string }>();
	const { data } = useOrderQuery({ variables });

	if (!data) return <>Loading...</>;

	if (!data.order) return <>Order not found</>;

	return (
		<>
			<h1>Order</h1>

			<Link className="btn btn-primary mb-3" to="/">
				Menu
			</Link>

			<div className="list-group">
				<div className="list-group-item">ID: {data.order.id}</div>
			</div>
		</>
	);
};
