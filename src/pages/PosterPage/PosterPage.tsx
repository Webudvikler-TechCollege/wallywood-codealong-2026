import { Outlet } from "react-router-dom";
import { PosterPageStyled } from "./PosterPage.styled";

export const PosterPage = () => {
  return (
    <PosterPageStyled>
        <div>
            Genre list
        </div>
        <div>
            <Outlet />
        </div>
    </PosterPageStyled>
  );
};