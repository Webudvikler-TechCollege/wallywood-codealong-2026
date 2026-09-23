import styled from 'styled-components';
import { Reset } from '../../../styled/Mixins';

export const HeaderStyled = styled.header`
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};

  > div {
    display: grid;
    grid-template-columns: 2fr 4fr;

    > h1 {
      ${Reset}
      color: ${(props) => props.theme.colors.tertiary}
    }

    > a, > h1 a {
      font-family: ${(props) => props.theme.fonts[0]};
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.secondary};
      font-size: 3rem;
      font-weight: 900;
      text-decoration: none;
      ${Reset}

      @media screen and (width < 820px) {
        font-size: 2rem;
      }
    }

    nav {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-bottom: 0.8rem;
    }
  }
`
