import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #0021A5;
    --orange: #fa4616;
    --orange-dark: #fa1616;

    --dark-green: #0021A5;
    --light-green: #d2f8d2;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    // default font-size (6.25% per pixel)
    font-size: 87.5%; //14px

    @media (max-width: 1080px) {
        font-size: 75%; //13px
    }

    @media (max-width: 768px) {
        font-size: 62.5%; //12px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong, th {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;
