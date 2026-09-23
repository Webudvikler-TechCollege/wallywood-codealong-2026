import { Link } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <h1><Link to="/">Wallywood</Link></h1>
        <Nav />
      </div>
    </HeaderStyled>
  );
};
