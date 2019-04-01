import StyledGrid from "./Styles";
import CardCollection from "../../../containers/card-hoc/Index";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <StyledGrid rowItemCount={3}>
                        <CardCollection />
                    </StyledGrid>
                </div>
            </div>
        );
    }
}

export default Main;
