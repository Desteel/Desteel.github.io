import Header from "./components/main/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/main/footer/Footer"

import "./styles/Styles.scss";
import "./components/button/Button.scss";

class App extends React.Component {    
    render() {
        return (
            <React.Fragment>
                <Header />                       
                <Main />                           
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;