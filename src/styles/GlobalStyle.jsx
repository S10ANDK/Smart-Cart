import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: Gray;
        --color-secondary: Red; 
        --color-accent-one: Orange;
        --color-accent-two: Black; 
        --color-accent-three: Gray; 
        height: 100%;
    }

    body {
        height: 100%;
        background: var(--color-primary);
    }
`;

export default GlobalStyle;
