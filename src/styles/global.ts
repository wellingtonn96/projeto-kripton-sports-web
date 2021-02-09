import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body {
    background: #eeeeee;
    color: #2a2a2a;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }
`;
