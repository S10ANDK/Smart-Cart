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
        margin: auto;
    }

    h1 {
        font-family: Cabin, sans-serif;
        font-size: 2.3rem;
        color: var(--color-black);
        text-align: center;
    }

    h2 {
        font-family: Montserrat, sans-serif;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    a,
    a:visited {
        color: var(--color-black);
    }

    p {
        font-family: Lato, sans-serif;
        max-width: 600px;
        margin: auto;
    }
`;

export default GlobalStyle;
