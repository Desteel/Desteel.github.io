import styled from "styled-components";
import Grid from "../grid/Grid";

const StyledGrid = styled.div`
    display: flex;
    flex-flow: wrap;
    margin: 0 -15px;
    padding: 40px 0;

    > * {
        width: calc(100% / ${props => props.rowItemCount || 1} - 30px);
        margin: 0 15px;
        margin-bottom: 30px;
    }
`;

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
