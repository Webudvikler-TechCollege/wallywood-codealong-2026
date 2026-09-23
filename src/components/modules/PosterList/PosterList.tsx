
import { PosterCard } from "../PosterCard/PosterCard";
import { GridList } from "../../../styled/Elements";
import { usePostersByGenre } from "../../../hooks/usePosters";
import { useParams } from "react-router-dom";

export const PosterList = () => {
    const { genreSlug } = useParams()
    const { posters } = usePostersByGenre({ genre: String(genreSlug) })

    return (
        <GridList>
            {posters.map(item => {
                return (
                    <PosterCard key={item.id} {...item} />
                )
            })}
        </GridList>
    );
};
