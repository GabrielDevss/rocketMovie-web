import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;

    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%; 
  }

  body {
    background-color: ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.colors.white};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto slab', sans-serif;
    outline: none;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;

    transition: filter 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }
`;