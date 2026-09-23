import styled from "styled-components";
import { Reset } from "../../../styled/Mixins";

export const PosterCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-bottom: 1rem;

  h4 {
    ${Reset}
  }

  figure {
    ${Reset}

    img {
      width: 11rem;
      height: 14rem;
      border: solid 1px ${(props) => props.theme.colors.senary};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontsizes.s};
    padding-right: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.tertiary};
    font-size: 1rem;
    font-weight: bold;
  }

  p span {
    font-size: ${(props) => props.theme.fontsizes.xs};
    color: ${(props) => props.theme.colors.primary};
  }
`;
