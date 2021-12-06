import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function MyCart(props) {
	const [cookies, setCookies] = useCookies();
	let cart = cookies.cart;
	let total = 0;
	if (cart !== undefined) {
		for (let i = 0; i < cart.length; i++) {
			total = total + cart[i].price;
		}
	} else {
		cart = [];
	}
	return (
		<div className="container">
			<div className="shopping-cart-solo">
				<div className="shopping-cart">
					<h3>Cart</h3>
					<h4 className="order-name">{`Order for ${cookies.user.firstName} ${cookies.user.lastName}`}</h4>
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
							<tr className="item">
								<td className="item-total">
									<h4>Total with tax:</h4>
								</td>
								<td className="price-total">
									<h4>
										${(total * 1.053).toFixed(2) || 0.0}
									</h4>
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
			</div>
		</div>
	);
}