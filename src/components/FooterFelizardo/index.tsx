import React from "react";
import { FaGithub } from "react-icons/fa"; // Make sure to install react-icons if you haven't
import { Container, FooterContent, Separator, GithubLink } from "./styles";

export function FooterFelizardo() {
  return (
    <Container>
      <FooterContent>
        <span>Developed by Felizardo</span>
        <Separator />
        <GithubLink
          href="https://github.com/devfel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          DevFel
        </GithubLink>
      </FooterContent>
    </Container>
  );
}
