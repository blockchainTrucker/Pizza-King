function Menu(props) {
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
									<button>Add</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Wings</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button>Add</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Fried Calamari</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button>Add</button>
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
									<button>Add</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Pepperoni Pizza</td>
								<td className="price">$11.99</td>
								<td className="add-button">
									<button>Add</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Supreme Pizza</td>
								<td className="price">$14.99</td>
								<td className="add-button">
									<button>Add</button>
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
									<button>Add</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Lasagna</td>
								<td className="price">$11.99</td>
								<td className="add-button">
									<button>Add</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Stuffed Shells</td>
								<td className="price">$14.99</td>
								<td className="add-button">
									<button>Add</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Menu;
