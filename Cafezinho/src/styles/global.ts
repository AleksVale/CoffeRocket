import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${(props) => props.theme.background};
    max-width: 1280px;
    margin: 0 auto;
  }
  body,input,textarea,button{
    font-family: 'Roboto', sans-serif;
  }
`
