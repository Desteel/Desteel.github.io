import StyledGrid from "./StyledMain";
import CardCollection from "../../card/CardCollection";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <StyledGrid rowItemCount={3}>
                        <HocCard />
                    </StyledGrid>
                </div>
            </div>
        );
    }
}

export default Main;
