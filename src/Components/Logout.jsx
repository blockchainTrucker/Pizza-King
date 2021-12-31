import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Logout(props) {
	const navigate = useNavigate();
	const [, , removeCookies] = useCookies();

	return (
		<div className="logout">
			<button
				onClick={() => {
					removeCookies("user");
					removeCookies("pastOrders");
					navigate("/");
					document.getElementById("alert").style.display = "block";
					document.getElementById(
						"alertMessage"
					).innerText = `You have successfully logged out.`;
				}}
			>
				Logout
			</button>
		</div>
	);
}
