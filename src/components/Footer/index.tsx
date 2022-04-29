import logoImg from "../../assets/logo-uf-ifas.png";
import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div className="footer">
          <span>All the information were gathered from the University of Florida Corn Silage and Forage Field Day WebSite.</span>
          <span>
            Visit the{" "}
            <b><a href="https://programs.ifas.ufl.edu/forage/" target="_blank" rel="noopener noreferrer">
              {" "}
              UF/IFAS Forage Team{""}
            </a></b>{" and the "}
            <b><a href="https://animal.ifas.ufl.edu/extension/courses/csfd/" target="_blank" rel="noopener noreferrer">
              {""}
              Corn Silage and Forage Field Day{""}
            </a></b>{" "}
            for more information.
          </span>
          <span>Contact your <b><a href="https://directory.ifas.ufl.edu/extprogram?pageID=3&p=BB" target="_blank" rel="noopener noreferrer">Local Extension Agent</a></b> or reach out to us through <b><a href="mailto: forages@ifas.ufl.edu">forages@ifas.ufl.edu</a></b>.</span>
        </div>
      </Content>
    </Container>
  );
}
