import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-size: 300% 300%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.BLUE_050};

    animation: colorsBackground 15s ease infinite;
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
    
  }

  .hide{
    display: none;
  }

  @keyframes contact {
    0% {
      transform: translateY(25px) translateX(10px);  
    }

    100% {
      transition: translateX(0) translateY(0);
    }
  }
`