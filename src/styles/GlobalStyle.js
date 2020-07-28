import { createGlobalStyle } from "styled-components";
import  { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  25% { opacity: 0; }
  100% { opacity: 1; }
`

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

#root {
  background-color: rgb(244, 247, 248);
}
`

export const DarkBackground = createGlobalStyle`
  .background {
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    filter: brightness(40%);
    z-index: 0;
    pointer-events: none;
  }
`