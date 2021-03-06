import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before{
  margin:0;
  padding: 0;
  box-sizing: inherit;
}

html{
  font-size: 62.5%;
}
body{
  box-sizing: border-box;
  max-width:114rem;
  margin:0 auto;
}
`;
