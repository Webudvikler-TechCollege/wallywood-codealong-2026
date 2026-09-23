import { createGlobalStyle } from 'styled-components'
import { Reset } from './Mixins'

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: ${({ theme }) => theme.fonts[1]};
		color: ${({ theme }) => theme.colors.tertiary};
	}

	body {
		background-color: ${({ theme }) => theme.colors.primary};
		${Reset};
	}

	h1 {
		color: ${({ theme }) => theme.colors.secondary};
		font-family: ${({ theme }) => theme.fonts[0]};
		font-size: 2.0rem;
		margin-block: 0.8rem;
	}

	h2 {
		color: ${({ theme }) => theme.colors.tertiary};
		font-family: ${({ theme }) => theme.fonts[0]};
		font-size: 1.5rem;
		margin-block: 0rem;
	}

	.active {
		color: #f00;
	}
`
export { GlobalStyle, Reset }