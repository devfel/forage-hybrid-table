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
    display: flex;
    align-items: center;
    margin: 0.2rem 0rem;
  }

  .custom-filter-item:last-child{
    margin-bottom: 2rem;
  }

  .custom-filter-item p{
    width: 150px;
  }

  .custom-filter-item .select-filter{
    background-color: #e0e0e0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 180px;
  }

  .show-filter-select-box {
    margin: 0.5rem 0rem;
    width: 170px;
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


{/*
  .footer {
    display: grid;
    grid-template-columns: 1fr;
    margin: 1rem;
  }
*/}

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
    text-align: center;
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }

  .chart-sub-title {
    margin-top: 1rem;
    text-align: center;
  }

  .chart-container {
    margin: auto;
  }

`;
