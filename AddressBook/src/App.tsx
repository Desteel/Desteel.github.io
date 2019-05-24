/// <reference path="globals.d.ts" />
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, observer } from 'mobx-react';

import * as stores from './stores/';

import * as conformation from './components/main/';
import ModalRender from './components/modal/ModalRender';
import * as style from './styles/';
import { theme } from './styles/Themes';

import DevTools from 'mobx-react-devtools';

@observer
class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        {!PRODUCTION && <DevTools />}
                        <style.Normalize />
                        <style.StyledGlobal
                            modalState={stores.modalStore.isOpen}
                        />
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
