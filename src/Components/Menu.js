import { Link } from "react-router-dom";
import React from "react";

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.printer = () => {
			console.log(this.state.price);
			console.log(this.state.item);
		};

		this.mozzSticks = () => {
			this.state.price = 7.99;
			this.state.item = "Mozzarella Sticks";
			this.printer();
		};
		this.wings = () => {
			this.state.price = 9.99;
			this.state.item = "Wings";
			this.printer();
		};
		this.calamari = () => {
			this.state.price = 9.99;
			this.state.item = "Fried Calamari";
			this.printer();
		};
		this.cheese = () => {
			this.state.price = 9.99;
			this.state.item = "Cheese Pizza";
			this.printer();
		};
		this.pepperoni = () => {
			this.state.price = 11.99;
			this.state.item = "Pepperoni Pizza";
			this.printer();
		};
		this.supreme = () => {
			this.state.price = 14.99;
			this.state.item = "Supreme Pizza";
			this.printer();
		};
		this.alfredo = () => {
			this.state.price = 12.99;
			this.state.item = "Fettuccine Alfredo";
			this.printer();
		};
		this.lasagna = () => {
			this.state.price = 11.99;
			this.state.item = "Lasagna";
			this.printer();
		};
		this.shells = () => {
			this.state.price = 14.99;
			this.state.item = "Stuffed Shells";
			this.printer();
		};
	}

	render() {
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
										<button onClick={this.mozzSticks}>
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
										<button onClick={this.wings}>
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
										<button onClick={this.calamari}>
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
										<button onClick={this.cheese}>
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
										<button onClick={this.pepperoni}>
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
										<button onClick={this.supreme}>
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
										<button onClick={this.alfredo}>
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
										<button onClick={this.lasagna}>
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
										<button onClick={this.shells}>
											Add
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="checkout">
						<Link to="/my-cart">
							<button>Checkout</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
