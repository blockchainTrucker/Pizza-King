import { useCookies } from "react-cookie";
import { useEffect } from "react";
const jwt = require("jsonwebtoken");

export default function PastOrders(props) {
	const [cookies, setCookies] = useCookies();
	let token = cookies.user;
	let user = jwt.decode(token);
	let pastOrders = [];

	useEffect(() => {
		function pastOrdersGetter(id) {
			const url = "http://localhost:9999/api/past-orders";
			let data = JSON.stringify({
				userID: id,
			});
			let resources = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: data,
			};

			return fetch(url, resources).then((res) => res.json());
		}
		pastOrdersGetter(user.id).then((res) => {
			setCookies("pastOrders", res);
			return;
		});
	}, [user.id, setCookies]);

	if (cookies.pastOrders !== undefined) {
		for (let i = 0; i < cookies.pastOrders.length; i++) {
			pastOrders.push(jwt.decode(cookies.pastOrders[i]));
		}
	}

	return (
		<div>
			<h3>Recent Orders</h3>
			<div className="container">
				{pastOrders.map((order, index) => {
					return (
						<div key={index} className="pastOrders">
							<p key={`${index}date`}>{order.dateTime}</p>
							<table>
								<tbody>
									{order.items.map((item, index2) => {
										return (
											<tr key={`${index2}${item}`}>
												<td
													className="item"
													key={`${index2}${item.name}`}
												>
													{item.name}
												</td>
												<td
													className="price"
													key={`${index2}${item.price}`}
												>
													{`$${item.price}`}
												</td>
											</tr>
										);
									})}
									<tr key={`${index}total`}>
										<td className="item-total">
											<h4>Total w/ tax:</h4>
										</td>
										<td className="item-total">
											<h4>{`$${order.total}`}</h4>
										</td>
									</tr>
								</tbody>
							</table>
							<button
								key={`${index}button`}
								onClick={() => {
									setCookies("cart", order.items);
									setCookies(
										"cartCount",
										cookies.cart.length
									);
								}}
							>
								Order Again
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
