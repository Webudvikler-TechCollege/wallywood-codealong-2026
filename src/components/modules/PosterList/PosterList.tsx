import { PosterCard } from "../PosterCard/PosterCard";
import { GridList, LoaderWrapper } from "../../../styled/Elements";
import { usePostersByGenre, useRandomPosters } from "../../../hooks/usePosters";
import { useParams } from "react-router-dom";
import { RiseLoader } from "react-spinners";

export const PosterList = ({ mode = "byGenre" }: { mode?: string }) => {
  const { genreSlug } = useParams();

  const { posters, isLoading } =
    mode === "byGenre"
      ? usePostersByGenre({ genre: String(genreSlug) })
      : useRandomPosters();

  if(isLoading) {
    return <LoaderWrapper><RiseLoader /></LoaderWrapper>
  }

  return (
    <GridList>
      {posters.map((item) => {
        return <PosterCard key={item.id} {...item} />;
      })}
    </GridList>
  );
};
