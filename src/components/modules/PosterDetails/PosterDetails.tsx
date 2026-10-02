import { useParams } from "react-router-dom";
import { usePoster } from "../../../hooks/usePosters";
import { PosterDetailsStyled } from "./PosterDetails.styled";
import { LoaderWrapper } from "../../../styled/Elements";
import { RiseLoader } from "react-spinners";

export const PosterDetails = () => {
  const { posterSlug } = useParams();
  const { poster } = usePoster(posterSlug ?? "");

  if (!poster)
    return (
      <LoaderWrapper>
        <RiseLoader />
      </LoaderWrapper>
    );

  return (
    <PosterDetailsStyled>
      <h2>{poster.name}</h2>
      <div>
        <figure>
          <img src={poster.image} alt={poster.name} title={poster.name} />
        </figure>
        <div>
          <span dangerouslySetInnerHTML={{ __html: poster.description }} />
        </div>
      </div>
    </PosterDetailsStyled>
  );
};
