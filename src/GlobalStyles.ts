import { createGlobalStyle } from "styled-components";
import device from './media-query-sizes';

const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --orange:  #ee5e1b;;
        --orangeHover: #f17841;
        --boxShadowPrimary: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        --boxShadowPrimaryHover: 3px 3px 4px 4px rgba(0, 0, 0, 0.3);
        --textPrimary: #ffffff;
        
    }

    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: rgb(240, 240, 240);
    }

    h1 {
        font-size: 1rem;
        font-weight: 400;
    }

    h3 {
        font-size: .8rem;
        font-weight: 400;
    }

    p {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: var(---textPrimary);
    }

    input {
        border: hidden; 
        border-bottom: groove #ffffff;
        height: 30px;  
    }


    input:focus {
        background: #FEF2EC;
        outline: none;
    }

    textarea {
        border: hidden;
        border-left: groove #ffffff;
        border-bottom: groove;
        resize: none;
    }

    textarea:focus {
        background: #FEF2EC;
        outline: none;
    }

    
    @media ${device.mobileL}{

    }

    @media ${device.tablet}{

    }

    @media ${device.desktopM}{
        h1 {
            font-size: 2rem;
            font-weight: 600;
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
        }
    }

`

export default GlobalStyle;