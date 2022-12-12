import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}
