// ProjectFolder/components/FooterFelizardo/styles.ts
import styled from "styled-components";

export const Container = styled.footer`
  background: #f0f2f5;
  padding: 1rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 2rem;
`;

export const Separator = styled.div`
  height: 20px;
  width: 1px;
  background-color: #ccc;
  margin: 0 1rem;
`;

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 0.875rem;
  border: 1px solid #6c757d;
  padding: 0.25rem 0.5rem;
  border-radius: 0.4rem;
  margin-left: 0.5rem;
  background-color: #6c757d;

  svg {
    font-size: 16px;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #333;
  }
`;
