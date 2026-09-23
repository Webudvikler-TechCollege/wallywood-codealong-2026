import type { Poster } from "../../../types/api.types";
import { truncateText } from "../../../utils/txtUtils";
import { PosterCardStyled } from "./PosterCard.styled";


export const PosterCard = ({ name, image, description }: Poster) => {
  
  return (
    <PosterCardStyled>
      <figure>
         <img src={image} alt={name} />
      </figure>
      <div>
        <h4 dangerouslySetInnerHTML={{ __html: name }} />
        <p dangerouslySetInnerHTML={{ __html: truncateText(description,130) }}></p>
      </div>
    </PosterCardStyled>
  );
};
