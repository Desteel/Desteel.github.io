import { createGlobalStyle } from "styled-components";

export const theme = {
    main: "#dadce0",
    border: "1px solid",
    borderRadius: "8px"
};

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=cyrillic');
    html {
        overflow: ${props => props.modalState ? "hidden" : null};
    }
    body {
        font-family: 'Roboto', sans-serif;
        color: rgba(0,0,0, 0.54);        
    }
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .main {
        flex: 1 0 auto;
    }
    .container {
        margin: 0 auto;
        padding: 0 15px;
        max-width: 1300px;
    }
`;
