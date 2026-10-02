import styled from "styled-components";
import { Reset } from "../../../styled/Mixins";

export const PosterDetailsStyled = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    * {
      border: solid 1px #000;
    }
  }

  figure {
    ${Reset}
    margin-top: 1rem;
  }

  img {
    border: 1px solid #f00;
    width: 100%;
    max-width: 15rem;
  }
`;
