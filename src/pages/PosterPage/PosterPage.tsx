import { Outlet } from "react-router-dom";
import { PosterPageStyled } from "./PosterPage.styled";
import { GenreList } from "../../components/modules/GenreList/GenreList";

export const PosterPage = () => {
  return (
    <PosterPageStyled>
        <div>
            <GenreList />
        </div>
        <div>
            <Outlet />
        </div>
    </PosterPageStyled>
  );
};