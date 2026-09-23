import { PosterCard } from "../PosterCard/PosterCard";
import { GridList } from "../../../styled/Elements";
import { usePostersByGenre, useRandomPosters } from "../../../hooks/usePosters";
import { useParams } from "react-router-dom";

export const PosterList = ({ mode = "byGenre" }: { mode?: string }) => {
  const { genreSlug } = useParams();

  const { posters } =
    mode === "byGenre"
      ? usePostersByGenre({ genre: String(genreSlug) })
      : useRandomPosters();

  return (
    <GridList>
      {posters.map((item) => {
        return <PosterCard key={item.id} {...item} />;
      })}
    </GridList>
  );
};
