import { injectGlobal } from "@emotion/css";

injectGlobal`
  @font-face {
    font-family: 'Theano Didot';
    src: url('/fonts/TheanoDidot/TheanoDidot-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-theano-didot: 'Theano Didot', serif;
  }
`;
