import { ThemeProvider } from "styled-components";
import { Provider } from "mobx-react";
import { observer } from "mobx-react";
// stores
import searchStore from "./stores/SearchStore";
import contentStore from "./stores/ContentStore";
import modalStore from "./stores/ModalStore";

import Header from "./components/main/header/Header";
import Main from "./components/main/main/Main";
import Footer from "./components/main/footer/Footer";
import ModalRender from "./components/modal/ModalRender";
import Normalize from "./styles/Normalize";
import { theme, GlobalStyle } from "./styles/StyledGlobal";

import DevTools from "mobx-react-devtools";

const stores = { searchStore, contentStore, modalStore };

@observer
class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        <Normalize />
                        <GlobalStyle modalState={modalStore.isOpen} />
                        <DevTools />
                        <Header />
                        <Main />
                        <Footer />
                        <ModalRender />
                    </React.Fragment>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
