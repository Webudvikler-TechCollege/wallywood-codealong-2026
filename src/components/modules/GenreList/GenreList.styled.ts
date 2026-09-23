import styled from 'styled-components';
import { ResetList } from '../../../styled/Mixins';

export const GenreListStyled = styled.nav`
  a {
    text-decoration: none;
  }

  li {
    ${ResetList}
  }
`;