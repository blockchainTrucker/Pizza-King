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
			<h3>Past Orders</h3>
			<div className="container">
				{pastOrders.map((order, index) => {
					return (
						<div className="pastOrders">
							<p>{order.dateTime}</p>
							<table>
								<tbody>
									{order.items.map((item, index) => {
										return (
											<tr key={`${index}`}>
												<td className="item">
													{item.name}
												</td>
												<td className="price">
													{`$${item.price}`}
												</td>
											</tr>
										);
									})}
									<tr key={`${index}`}>
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
								key={`${order}${index}button`}
								onClick={function () {
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
