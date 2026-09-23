import type { Poster } from "../../../types/api.types";
import { PosterCardStyled } from "./PosterCard.styled";


export const PosterCard = ({ name, image, description }: Poster) => {
  
  return (
    <PosterCardStyled>
      <figure>
         <img src={image} alt={name} />
      </figure>
      <div>
        <h4>{name}</h4>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </PosterCardStyled>
  );
};
