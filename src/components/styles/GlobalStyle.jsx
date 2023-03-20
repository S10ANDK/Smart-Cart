import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #F2F2F2;
        --color-secondary: #0460D9; 
        --color-accent-one: #1485E0;
        --color-accent-two: #274001; 
        --color-accent-three: #A2A685; 
        --color-white: #FFFFFF;
        --color-black: #000000;
        height: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: Lato, sans-serif;
        background: var(--color-primary);
        
    }

    body {
        height: 100%;
        background: var(--color-primary);
        max-width: 1000px;
        margin: auto;
    }

    h1 {
        font-family: Montserrat, sans-serif;
        font-size: 3rem;
        color: var(--color-accent-one);
    }

    h2 {
        font-family: Cabin, sans-serif;
    }

    p {
        font-family: Lato, sans-serif;
    }
`;

export default GlobalStyle;
