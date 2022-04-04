import logoImg from "../../assets/logo-uf-ifas.png";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <a href="https://animal.ifas.ufl.edu/extension/courses/csfd/" target="_blank" rel="noopener noreferrer">
          <img src={logoImg} alt="CSFD Logo" />
        </a>
        <button type="button">
          <a href="https://animal.ifas.ufl.edu/extension/courses/csfd/" target="_blank" rel="noopener noreferrer">
            UF Silage Hybrid Decision Tool
          </a>
        </button>
      </Content>
    </Container>
  );
}
