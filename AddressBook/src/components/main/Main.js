import { StyledGrid } from "./StyledMain";
import Grid from "../grid/Grid";

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <StyledGrid rowItemCount={3}>
                        <Grid />
                    </StyledGrid>
                </div>
            </div>
        );
    }
}

export default Main;
