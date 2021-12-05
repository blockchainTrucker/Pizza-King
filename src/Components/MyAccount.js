import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function MyAccount(props) {
	const [cookies, setCookies] = useCookies();
	let cart = cookies.cart;
	if (cart === undefined) {
		cart = [
			{
				name: "Your cart is empty.",
				price: "",
			},
		];
	}
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		total = total + cart[i].price;
		console.log(total);
	}

	return (
		<div className="container">
			<div className="my-account">
				<div className="shopping-cart">
					<h3>Current Cart</h3>
					<table>
						<tbody>
							{cart.map(function (item) {
								return (
									<tr>
										<td className="item">{item.name}</td>
										<td className="price">{item.price}</td>
										<button
											value={item.name}
											className="remove-button"
											onClick={function () {
												let index = cart.indexOf(item);
												cart.splice(index, 1);
												setCookies("cart", cart);
												setCookies(
													"cartCount",
													cart.length
												);
											}}
										>
											-
										</button>
									</tr>
								);
							})}
							<br />
							<tr className="item">
								<td>Tax</td>
								<td className="price">
									${(total * 0.053).toFixed(2) || 0.0}
								</td>
							</tr>
							<tr className="item">
								<td>Total</td>
								<td className="price">
									${total.toFixed(2) || 0.0}
								</td>
							</tr>
						</tbody>
					</table>
					<div className="checkout">
						<Link to="/my-cart">
							<button>Checkout</button>
						</Link>
					</div>
				</div>
				<h3>Past Orders</h3>
			</div>
		</div>
	);
}
