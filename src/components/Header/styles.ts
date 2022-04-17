import styled from "styled-components";
import img from "../../assets/background.png";
import img2 from "../../assets/background.jpg";


export const Container = styled.header`
  background: var(--dark-green);
`;

export const Content = styled.div`
  max-width: 1280px;
  height: 230px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-image: url(${img2});

  img {
    opacity: 0.95;
    width: 160px;
    height: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    background-color: #fefefe;

    transition: filter 0.4s;
    &:hover {
      filter: brightness(1.1);
    }
  }

  button {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #fefefe;
    opacity: 0.9;

    border: 0;
    padding: 1rem 2rem;
    border-radius: 0.4rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
