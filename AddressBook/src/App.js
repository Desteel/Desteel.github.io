import { Provider } from "mobx-react";
import searchStore from "./components/stores/Search";
import contentStore from "./components/stores/Content";
import Header from "./components/main/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";
import DevTools from "mobx-react-devtools";
import "./styles/Styles.scss";

const stores = { searchStore, contentStore };

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
