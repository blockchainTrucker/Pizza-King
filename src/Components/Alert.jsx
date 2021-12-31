export default function Alert(props) {
	return (
		<div className="alertContainer">
			<div className="alert" id="alert">
				<span
					className="closebtn"
					onClick={() => {
						document.getElementById("alert").style.display = "none";
					}}
				>
					&times;
				</span>
				<strong id="alertMessage"></strong>
			</div>
		</div>
	);
}
