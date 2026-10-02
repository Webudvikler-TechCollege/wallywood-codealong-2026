import { Link, useParams } from "react-router-dom";
import type { Poster } from "../../../types/api.types";
import { truncateText } from "../../../utils/txtUtils";
import { PosterCardStyled } from "./PosterCard.styled";


export const PosterCard = ({ name, image, description, slug }: Poster) => {
  const { genreSlug } = useParams();

  return (
    <PosterCardStyled>
      <figure>
         <img src={image} alt={name} title={name}/>
      </figure>
      <div>
        <h4 dangerouslySetInnerHTML={{ __html: name }} />
        <p dangerouslySetInnerHTML={{ __html: truncateText(description,130) }}></p>
        <Link to={`/posters/${genreSlug ?? "alle"}/${slug}`}>Læs mere</Link>
      </div>
    </PosterCardStyled>
  );
};
