import styled from 'styled-components';
import { Reset } from '../../../styled/Mixins';

export const PosterCardStyled = styled.div`
  display: flex;

  
  figure {
    ${Reset}

    img {
        width: 100%;
        max-width: 14rem;
        min-width: 10rem;
        border: solid 1px ${props => props.theme.colors.senary}
    }
  }  

  div {
    padding-bottom: 2rem;
  }
    
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.tertiary};
    font-size: 1rem;
    font-weight: bold;
  }
  
  p span {
    font-size: ${props => props.theme.fontsizes.xs};
    color: ${props => props.theme.colors.primary};
  }
`;