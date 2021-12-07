import { createGlobalStyle } from 'styled-components';
import { backgroundThemeColor, textThemeColor } from './color';


// Add global styles
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Product Sans',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${backgroundThemeColor};
    color: ${textThemeColor}
  }

  ul {
    margin-top: 0;
  }
`