import styled from "styled-components";
import { Reset } from "./Mixins";

export const Hero = styled.img`
    width: 100%;
`;

type GridProps = {
    $minWidth?: string;
    $gap?: string;
};

export const GridList = styled.ul<GridProps>`
    ${Reset}
    display: grid;
    grid-template-columns: 1fr 1fr;

	@media screen and (max-width: 1024px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	
	@media screen and (width < 768px) {
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}    
`;


