import { Provider } from "mobx-react";
import searchStore from "./components/stores/Search";
import gridStore from "./components/stores/Grid";

import Header from "./components/main/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";
import DevTools from "mobx-react-devtools";
import "./styles/Styles.scss";
import "./components/button/Button.scss";

const stores = { searchStore, gridStore };

class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <React.Fragment>
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
