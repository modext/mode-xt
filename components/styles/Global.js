import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
   }
  
   html{
       box-sizing: border-box;
       font-size: 62.5%;
       overflow-x: hidden;
       scroll-behavior: smooth;
      
   }

   body{
    visibility: hidden;
    opacity: 0.7;
    background-color: #4B4A67;
    overflow-x: hidden;
    font-family: "Migra", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: white;
   }
   

    @font-face {
        font-family: "Migra";
        font-style: light;
        font-weight: 200;
        src: url("/fonts/migraFont/Migra-Extralight.woff");
        font-display: fallback;
    }

    @font-face {
        font-family: "Migra";
        font-style: extrabold;
        font-weight: 800;
        src: url("/fonts/migraFont/Migra-Extrabold.woff");
        font-display: fallback;
    }
    @font-face {
        font-family: "Migra";
        font-style: bolditalic;
        font-weight: 700;
        src: url("/fonts/migraFont/MigraItalic-ExtraboldItalic.woff");
        font-display: fallback;
    }
    @font-face {
        font-family: "Migra";
        font-style: light;
        font-weight: 200;
        src: url("/fonts/migraFont/Migra-Extralight.woff");
        font-display: fallback;
    }
    @font-face {
        font-family: "Tusker";
        font-style: medium;
        font-weight: 400;
        src: url("/fonts/tuskerFont/TuskerGrotesk-5500Medium.otf");
        font-display: fallback;
    }
    
    @font-face {
        font-family: "Tusker";
        font-style: bold;
        font-weight: 500;
        src: url("/fonts/tuskerFont/TuskerGrotesk-5700Bold.otf");
        font-display: fallback;
    }
    @font-face {
        font-family: "Tusker";
        font-style: semibold;
        font-weight: 300;
        src: url("/fonts/tuskerFont/TuskerGrotesk-6600Semibold.otf");
        font-display: fallback;
    }

`;
