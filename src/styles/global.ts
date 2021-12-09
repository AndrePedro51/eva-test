import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --text-white: #FDFDFD;
        --black: #0C0D0D;
        --black-light:#3C3E40;
        --grey: #3C3E40;

        --background: #E5E5E5;

        --pink: #E11383;
        --yellow-star: #EFD444;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%
        }

        @media (max-width:720px){
            font-size: 87.5%
        }
    }

    body{
        background: white;
        -webkit-font-smothing: antialiased;
    }

    body, button, input, textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


`