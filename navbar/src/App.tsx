import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <GlobalStyle />
    </ThemeProvider>
  );
}
