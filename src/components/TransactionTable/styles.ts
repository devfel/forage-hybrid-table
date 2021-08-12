import styled from "styled-components";

export const Container = styled.div`
  table {
    width: 100%;

    th {
      color: var(--text-title);
      padding: 1rem 0rem;
      text-align: center;
      line-height: 1rem;
      font-weight: 600;
    }

    td {
      text-align: center;
    }
  }

  .filter {
    margin-left: auto;
    margin-right: 0;
    width: 170px;
  }

  .footer {
    display: grid;
    grid-template-columns: 1fr;
    margin: 1rem;
  }
`;
