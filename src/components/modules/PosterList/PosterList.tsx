
import { PosterCard } from "../PosterCard/PosterCard";
import { GridList } from "../../../styled/Elements";
import { useRandomPosters } from "../../../hooks/usePosters";

export const PosterList = () => {
    const { posters } = useRandomPosters()

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
