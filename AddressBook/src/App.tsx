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

import * as conformation from './components/main/';
import ModalRender from './components/modal/ModalRender';
import * as style from './styles/';
import { theme } from './styles/Themes';

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
                        <style.Normalize />
                        <style.StyledGlobal modalState={modalStore.isOpen} />
                        <conformation.Header />
                        <conformation.Main />
                        <conformation.Footer />
                        <ModalRender />
                    </React.Fragment>
                </ThemeProvider>
            </Provider>
        );
    }
}

export default App;
