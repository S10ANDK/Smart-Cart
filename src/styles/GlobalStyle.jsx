import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #F2F2F2;
        --color-secondary: #1485E0; 
        --color-accent-one: #A2A685;
        --color-accent-two: #274001; 
        --color-accent-three: #0460D9; 
        height: 100%;
    }

    body {
        height: 100%;
        background: var(--color-primary);
    }
`;

export default GlobalStyle;
