import styled from "styled-components";
import img from "../../assets/background.png";

export const Container = styled.header`
  background: var(--dark-green);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 230px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-image: url(${img});

  img {
    opacity: 0.9;
    width: 160px;
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.1);
    }
  }

  button {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #fff;
    opacity: 0.94;

    border: 0;
    padding: 1rem 2rem;
    border-radius: 0.4rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
