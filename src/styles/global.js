import { createGlobalStyle }  from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue-main: #6278F7;
        --ciano-main: #95FFD4;
        --gray-main: #F2F2F2;
        --white-main: #FFFFFF;
        --black-main: #212121;
        --boxShadowFields: 10px 10px 30px rgba(0, 0, 0, 0.08);
        --boxShadowForm: 10px 10px 30px rgba(0, 0, 0, 0.1);
        --boxShadowCard: 5px 5px 15px rgba(0, 0, 0, 0.08);
    }

    html, body {
        width: 100vw;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        body {
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        h1, h2, h3, h4, h5, h6, p {
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            font-weight: 400;
        }

        a {
            text-decoration: none;
            color: #000;
        }
    
        ul, li {
            list-style: none;
        }
    }
`;
    