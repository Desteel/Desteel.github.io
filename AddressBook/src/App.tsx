/// <reference path="globals.d.ts" />
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, observer } from 'mobx-react';
// stores
import searchStore from './stores/SearchStore';
// test
import contentStoreMST from './stores/ContentStoreMST';
// test
import contentStore from './stores/ContentStore';
import modalStore from './stores/ModalStore';

import Header from './components/main/header/Header';
import Main from './components/main/main/Main';
import Footer from './components/main/footer/Footer';
import ModalRender from './components/modal/ModalRender';
import Normalize from './styles/Normalize';
import { theme, GlobalStyle } from './styles/StyledGlobal';

import DevTools from 'mobx-react-devtools';

const stores = {
    searchStore,
    contentStoreMST,
    contentStore,
    modalStore
};

@observer
class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        {!PRODUCTION && <DevTools />}
                        <Normalize />
                        <GlobalStyle modalState={modalStore.isOpen} />
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
