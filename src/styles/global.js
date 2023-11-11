import { createGlobalStyle } from "styled-components";
import background from '../assets/background.png'

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing : antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    :root {
      font-size        : 62.5%;
    }
    
    body {
      height: 100vh;
      background-image: url(${background});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    a {
      text-decoration: none;
    }

    a, button, select, label {
      cursor: pointer;
      transition: filter .2s;
    }

    a:hover, button:hover, select:hover, label:hover {
      filter: brightness(0.9);
    }
`;