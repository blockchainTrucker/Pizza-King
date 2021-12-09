import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export default function Menu(props) {
	useEffect(() => {
		document.title = "Pizza King - Menu";
	}, []);
	let cart = [];
	const [cookies, setCookies] = useCookies();

	return (
		<div className="container">
			<div className="menu">
				<h2>Appetizers</h2>
				<div className="menu-item">
					<table>
						<tbody>
							<tr>
								<td className="item">Mozzarella Sticks</td>
								<td className="price">$7.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let mozz = {
												name: "Mozzarella Sticks",
												price: 7.99,
											};
											cart.push(mozz);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Wings</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let wings = {
												name: "Wings",
												price: 9.99,
											};
											cart.push(wings);

											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Fried Calamari</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button
										onClick={function calamariAdd() {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let calamari = {
												name: "Calamari",
												price: 9.99,
											};
											cart.push(calamari);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2>Pizza</h2>
				<div className="menu-item">
					<table>
						<tbody>
							<tr>
								<td className="item">Cheese Pizza</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let cheese = {
												name: "Cheese Pizza",
												price: 9.99,
											};
											cart.push(cheese);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Pepperoni Pizza</td>
								<td className="price">$11.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let pepperoni = {
												name: "Pepperoni Pizza",
												price: 11.99,
											};
											cart.push(pepperoni);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Supreme Pizza</td>
								<td className="price">$14.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let supreme = {
												name: "Supreme Pizza",
												price: 14.99,
											};
											cart.push(supreme);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2>Not Pizza</h2>
				<div className="menu-item">
					<table>
						<tbody>
							<tr>
								<td className="item">Fettuccine Alfredo</td>
								<td className="price">$12.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let alfredo = {
												name: "Fettuccine Alfredo",
												price: 12.99,
											};
											cart.push(alfredo);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Lasagna</td>
								<td className="price">$11.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let lasagna = {
												name: "Lasagne",
												price: 11.99,
											};
											cart.push(lasagna);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Stuffed Shells</td>
								<td className="price">$14.99</td>
								<td className="add-button">
									<button
										onClick={function () {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let shells = {
												name: "Stuffed Shells",
												price: 14.99,
											};
											cart.push(shells);
											setCookies("cart", cart);
											setCookies(
												"cartCount",
												cart.length
											);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="review">
					<Link to="/my-cart">
						<button>Review Order</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
