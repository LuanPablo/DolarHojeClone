import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
:root{
  --primary: #A0D22C; 
  --secondary: #909090;
  --background: #F7F7F7;
  --gray: #D1D1D1;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

html{
  @media (max-width: 1080px){
      font-size: 93.75%;
  }

  @media (max-width: 720px){
      font-size: 87.5%;
  }
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

::selection{
  color: #fff;
  background: #1f1f1f;
}

body, input, textarea, button{
  font-family: Verdana, sans-serif;
  font-weight: 500;
  color: var(--secondary);
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}`

