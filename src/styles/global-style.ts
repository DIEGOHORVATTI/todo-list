import { createGlobalStyle } from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const GlobalStyle = createGlobalStyle`

  * {
    font-family: Arial;
    font-weight: 800;
    font-style: normal;
  }

  html, body{
    color: ${colors.white};
    background: ${colors.dark};
    height: 100%;
    width: 100vw;
  }

  a {
    color: ${colors.white};
    :focus, :active{
      color: ${colors.white};
    }
  }

  ul li {
    font-size: 20pt;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: transparent;
    border-radius: 15px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 15px;
    margin: 1px 5px;
  }

`
