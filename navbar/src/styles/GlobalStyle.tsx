import { createGlobalStyle } from "styled-components";

const StyleProvider = createGlobalStyle`
  body{
    padding-top: ${(props) => props.theme.headerHeight}px;
  }
`;

export default StyleProvider;
