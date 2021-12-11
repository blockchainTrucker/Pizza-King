import { useCookies } from "react-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const jwt = require("jsonwebtoken");

export default function Cart(props) {
	const [error, setError] = useState();
	const [cookies, setCookies] = useCookies();
	const navigate = useNavigate();
	let cart = cookies.cart;
	let total = 0;
	function tokenCheck() {
		let token = cookies.user;
		props = jwt.decode(token);
	}
	tokenCheck();
	if (cart !== undefined) {
		for (let i = 0; i < cart.length; i++) {
			total = total + cart[i].price;
		}
	} else {
		cart = [];
	}

	function submitHandler(event) {
		event.preventDefault();
		if (cart.length > 0) {
			let totWtax = (total * 1.053).toFixed(2);
			const url = "http://localhost:9999/api/new-order";
			let data = JSON.stringify({
				items: cart,
				total: totWtax,
				userID: props.id,
			});
			let resources = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: data,
			};
			fetch(url, resources).then((res) => {
				if (res.body === "Error") {
					setError("Something went wrong, please try again");
				} else {
					setCookies("cart", []);
					setCookies("cartCount", 0);
					navigate("/order-placed");
				}
			});
		} else {
			setError("Cart is empty");
		}
	}

	return (
		<div className="shopping-cart">
			<h3>My Cart</h3>
			<span className="error-message">{error}</span>
			<h4 className="order-name">{`Order for ${props.firstName} ${props.lastName}`}</h4>
			<table>
				<tbody>
					{cart.map(function (item, index) {
						return (
							<tr key={`${index}`}>
								<td
									key={`${item.name}${index}`}
									className="item"
								>
									{item.name}
								</td>
								<td
									key={`${item.price}${index}`}
									className="price"
								>
									{`$${item.price}`}
								</td>
								<td>
									<button
										key={item.button}
										className="remove-button"
										onClick={function () {
											let index = cart.indexOf(item);
											cart.splice(index, 1);
											setCookies("cart", cart);
										}}
									>
										-
									</button>
								</td>
							</tr>
						);
					})}
					<tr className="item">
						<td className="item-total">
							<h4>Total with tax:</h4>
						</td>
						<td className="price-total">
							<h4>${(total * 1.053).toFixed(2) || 0.0}</h4>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="checkout">
				<form onSubmit={submitHandler}>
					<button type="submit">Checkout</button>
				</form>
			</div>
		</div>
	);
}
