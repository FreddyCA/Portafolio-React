import { createGlobalStyle } from "styled-components";
import BGsvgs from "../assets/bgForm.svg";

const GlobalStyle = createGlobalStyle`
    :root {
        --color--fondoPrincipal: #121212;
        --color--textoPrincipal: #E4E4E4;
        --color--fondoHover: #4B0082;
        --color--resaltador: #FFD700;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        font-size: 16px;
        background-image: url(${BGsvgs});
    }
`;

export default GlobalStyle;
