import logoImg from "../../assets/logo-uf-ifas.png";
import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div className="footer">
          <span style={{ color: "darkblue", fontWeight: "bold" }}>Blue and bold characteristics in the table mean it was a top performer within that season and year.</span>
          <br></br>
          <span>All the information were gathered from the University of Florida Corn Silage and Forage Field Day WebSite.</span>
          <span>
            Visit{" "}
            <a href="https://animal.ifas.ufl.edu/extension/courses/csfd/" target="_blank" rel="noopener noreferrer">
              {" "}
              https://animal.ifas.ufl.edu/extension/courses/csfd/{" "}
            </a>{" "}
            for more details.
          </span>
          <span>Contact us at <a href="mailto: forages@ifas.ufl.edu">forages@ifas.ufl.edu</a>.</span>
        </div>
      </Content>
    </Container>
  );
}
