import { Outlet, useParams } from "react-router-dom";
import { PosterPageStyled } from "./PosterPage.styled";
import { GenreList } from "../../components/modules/GenreList/GenreList";
import { ContentWrapper } from "../../layout/ContentWrapper";
import { useGenres } from "../../hooks/useGenre";

export const PosterPage = () => {
  const {genres} = useGenres()
  const { genreSlug } = useParams()

  const current = genres.find(x => x.slug === genreSlug)
  return (
    <ContentWrapper pagetitle={`Plakater - ${current ? current?.title : ``}`}>
      <PosterPageStyled>
        <div>
          <GenreList />
        </div>
        <div>
          <Outlet />
        </div>
      </PosterPageStyled>
    </ContentWrapper>
  );
};
