import styled from "styled-components";

export const Container = styled.div`
  //Fix Display Here
  /* max-width: 1120px;
  height: 230px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly; */
  .custom-filters {
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  .custom-filter-item {
    margin: 0.5rem 0rem;
    background-color: #666;
  }

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

  button {
    margin: 0.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #000;
  }

  button.selected {
    margin: 0.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: var(--green);
  }

  .chart-title {
    margin-top: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .chart-sub-title {
    margin-top: 1rem;
    text-align: center;
  }

  .chart-container {
    margin: auto;
  }

`;
