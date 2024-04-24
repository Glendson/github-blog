import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        line-height: 160%;
    }

    body, input, textarea, button, span {
        font-family: 'Nunito Sans', sans-serif;
    }

`;
