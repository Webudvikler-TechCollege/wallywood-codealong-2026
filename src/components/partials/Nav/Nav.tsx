import { NavLink } from "react-router-dom";
import { NavStyled } from "./Nav.styled";

export const Nav = () => {
	return (
		<NavStyled>
			<ul>
				<li><NavLink to="/">HOME</NavLink></li>
				<li><NavLink to="/posters/action">PLAKATER</NavLink></li>
				<li><NavLink to="/om_os">OM OS</NavLink></li>
				<li><NavLink to="/contact">KONTAKT</NavLink></li>
				<li><NavLink to="/cart">KURV</NavLink></li>
				<li><NavLink to="/login">LOGIN</NavLink></li>
			</ul>
		</NavStyled>
	);
}