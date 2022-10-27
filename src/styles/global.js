import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.BLUE_050};
  }

  body, button, a, textarea, input {
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  button:hover, a:hover {
    color: ${({theme}) => theme.COLORS.PINK_900};
    transition: 0.3s;
  }

`