import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 63.5%;
  font-family: "Asap", sans-serif;
  letter-spacing: 0.1rem;
}
body {

  box-sizing: border-box;
}


/* Media Queries  */
@media screen and (min-width: 694px) and (max-width: 915px) {
  .movie {
    max-width: 33%;
  }
}

@media screen and (min-width: 652px) and (max-width: 693px) {
  .movie {
    max-width: 50%;
  }
}

@media screen and (max-width: 651px) {
  .movie {
    max-width: 100%;
    margin: auto;
  }
}
`