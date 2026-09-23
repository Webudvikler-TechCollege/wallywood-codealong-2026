import styled from "styled-components";
import { Reset } from "./Mixins";

interface ContainerProps {
	$maxwidth?: number
}

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

export const ContainerStyle = styled.section<ContainerProps>`
	background-color: ${props => props.theme.colors.light};
	width: 100%;
	max-width: ${props => props.$maxwidth}px;
	margin: 0 auto;
	padding: 0rem 2.3rem;

	@media screen and (width < 820px) {
		padding: 0rem 1rem;		
	}
`

