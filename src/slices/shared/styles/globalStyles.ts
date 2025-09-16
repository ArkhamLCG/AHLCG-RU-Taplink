import { injectGlobal } from "@emotion/css";

injectGlobal`
  @font-face {
    font-family: 'TheanoDidot';
    src: url('/fonts/TheanoDidot/TheanoDidot-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --font-theano-didot: 'TheanoDidot', serif;
  }

  body {
    font-family: var(--font-theano-didot);
  }
`;
