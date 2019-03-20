import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Provider } from "mobx-react";
import { observer } from "mobx-react";
// stores
import searchStore from "./components/stores/SearchStore";
import contentStore from "./components/stores/ContentStore";
import modalStore from "./components/stores/ModalStore";

import Header from "./components/main/header/Header";
import Main from "./components/main/main/Main";
import Footer from "./components/main/footer/Footer";
import Modal from "./components/modal/Modal";
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
                        <Modal />
                    </React.Fragment>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
