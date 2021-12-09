import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Cart(props) {
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
		<div className="shopping-cart">
			<h3>My Cart</h3>
			<h4 className="order-name">{`Order for ${cookies.user.firstName} ${cookies.user.lastName}`}</h4>
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
											setCookies(
												"cartCount",
												cart.length
											);
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
				<Link to="/my-cart">
					<button>Checkout</button>
				</Link>
			</div>
		</div>
	);
}
