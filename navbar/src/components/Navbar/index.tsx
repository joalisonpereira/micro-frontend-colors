import { navigateToUrl } from "single-spa";
import { Container, ContainerProps } from "./styles";

export interface NavbarProps extends ContainerProps {}

function Navbar({}: NavbarProps) {
  return (
    <Container>
      <div className="inner">
        <a type="button" onClick={() => navigateToUrl("/")}>
          <h1>Colors</h1>
        </a>
        <div className="apps">
          <a type="button" onClick={() => navigateToUrl("/blue")}>
            Blue
          </a>
          <a type="button" onClick={() => navigateToUrl("/gold")}>
            Gold
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
