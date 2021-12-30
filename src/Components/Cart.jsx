import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const jwt = require("jsonwebtoken");

export default function Cart(props) {
	const [error, setError] = useState();
	const [cartEmpty, setCartEmpty] = useState();
	const [cookies, setCookies] = useCookies();
	const navigate = useNavigate();
	let cart = cookies.cart;
	let total = 0;
	let user = jwt.decode(cookies.user);

	if (cart !== undefined) {
		for (let i = 0; i < cart.length; i++) {
			total = total + cart[i].price;
		}
	} else {
		cart = [];
	}

	useEffect(() => {
		if (cart.length === 0) {
			setCartEmpty("Cart is empty...");
		}
	}, [cart.length]);

	function submitHandler(event) {
		event.preventDefault();
		if (cart.length > 0) {
			let totWtax = (total * 1.053).toFixed(2);
			const url = "http://localhost:9999/api/new-order";
			let data = JSON.stringify({
				items: cart,
				total: totWtax,
				userID: user.id,
			});
			let resources = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: data,
			};
			fetch(url, resources).then((res) => {
				if (res === "error") {
					setError("Something went wrong, please try again");
				} else {
					setCookies("cart", []);
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
			<h4 className="order-name">{`Order for ${user.firstName} ${user.lastName}`}</h4>
			<div className="container">
				<table>
					<tbody>
						<tr>
							<td>
								<p>{cartEmpty}</p>
							</td>
						</tr>
						{cart.map((item, index) => {
							return (
								<tr key={`${index}`}>
									<td key={`${index}name`} className="item">
										{item.name}
									</td>
									<td key={`${index}price`} className="price">
										{`$${item.price}`}
									</td>
									<td>
										<button
											key={`${index}button`}
											className="remove-button"
											onClick={() => {
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
							<td className="item-total">
								<h4>${(total * 1.053).toFixed(2)}</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="checkout">
				<form onSubmit={submitHandler}>
					<button type="submit">Checkout</button>
				</form>
			</div>
		</div>
	);
}
