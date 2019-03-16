import { createGlobalStyle } from "styled-components";
import { Provider } from "mobx-react";
import searchStore from "./components/stores/Search";
import contentStore from "./components/stores/Content";
import Header from "./components/main/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";
import DevTools from "mobx-react-devtools";
import Normalize from "./styles/Normalize";

const stores = { searchStore, contentStore };

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=cyrillic');
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

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <React.Fragment>                    
                    <Normalize />
                    <GlobalStyle />
                    <DevTools />
                    <Header />
                    <Main />
                    <Footer />
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
