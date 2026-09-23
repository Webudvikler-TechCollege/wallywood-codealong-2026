import styled from 'styled-components';

export const PosterPageStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 1.5rem;

  > div:nth-child(2) {
    border-left: solid 1px #000;
    padding-left: 1rem
  }
`;