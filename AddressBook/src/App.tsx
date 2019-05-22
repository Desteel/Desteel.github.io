/// <reference path="globals.d.ts" />
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, observer } from 'mobx-react';
// stores
import { SearchStore } from './stores/SearchStore';
import contentStore from './stores/ContentStore';
import modalStore from './stores/ModalStore';
import { ContentStore } from './models/ContentStore';

import Header from './components/main/header/Header';
import Main from './components/main/main/Main';
import Footer from './components/main/footer/Footer';
import ModalRender from './components/modal/ModalRender';
import Normalize from './styles/Normalize';
import { theme, GlobalStyle } from './styles/StyledGlobal';

import DevTools from 'mobx-react-devtools';

const searchStore = SearchStore.create({
    value: ''
});
const contentStoreMST = ContentStore.create({
    cards: [
        {
            photoUrl:
                'https://avatars3.githubusercontent.com/u/30462928?s=460&v=4',
            name: 'test1',
            lastname: 'test1',
            phoneValues: ['84626358367', '84626358367'],
            address: 'Detroit'
        },
        {
            photoUrl:
                'https://avatars3.githubusercontent.com/u/30462928?s=460&v=4',
            name: 'test2',
            lastname: 'test2',
            phoneValues: ['84626358367', '84626358367'],
            address: 'Moscow'
        }
    ]
});
const stores = { searchStore, ContentStore, contentStoreMST, contentStore, modalStore };

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
