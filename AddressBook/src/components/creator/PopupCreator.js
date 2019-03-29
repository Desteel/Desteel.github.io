import { StyledSaveButton, StyledInputbox, StyledInput } from "./StyledCreator";
import IconCheck from "../../icons/tick.svg";

class Creator extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "idCreator"
        };
    }

    render() {
        return (
            <form>
                <StyledInputbox>
                    <StyledInput name="name" placeholder="name" />
                    <StyledInput name="lastname" placeholder="lastname" />
                    <StyledInput name="phone" placeholder="phone" />
                    <StyledInput name="address" placeholder="address" />
                </StyledInputbox>
                <StyledSaveButton>{<IconCheck />}</StyledSaveButton>
            </form>
        );
    }
}

export default Creator;
