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

  button.selected {
    margin: 0.5rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    color: #fff;
    background-color: var(--green);
  }

  button.tutorial-button{
    margin-left: 2rem;
    background-color: var(--orange);
  }
  
  .tutorial-button a{
    color: #fafafa;
    text-decoration: none;
  }

  .tutorial-button:hover{
    background-color: var(--orange-dark);
  }

  .chart-title {
    text-align: center;
    font-size: 1.25rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    padding: 0.6rem 0 0.6rem 0;
  }

  .chart-sub-title {
    text-align: center;
    background-color: var(--orange);
    padding: 0.6rem 0 0.6rem 0;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .chart-container {
    margin: auto;
  }

  .chart-box {
    border: 0;
	  border-radius: 2px;
	  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .top-characteristic {
    color: var(--green);
    font-weight: bold;
    font-size: 0.9rem;
  }

`;
