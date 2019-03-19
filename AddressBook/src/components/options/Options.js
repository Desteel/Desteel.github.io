import styled from "styled-components";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import Button from "../button/Button";
import IconCross from "../../icons/cross.svg";
import IconPen from "../../icons/pen.svg";
import IconCheck from "../../icons/tick.svg";

const StyledOptions = styled.div`
    margin-right: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const StyledOptionsBtn = styled(Button)`
    background-color: transparent;
    padding: 5px;
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-right: none;
    color: inherit;    

    &:first-child {
        border-top-left-radius: 5px;
    }

    &:last-child {
        border-bottom-left-radius: 5px;
    }

    &:not(:last-child) {
        border-bottom: none;
    }
`;

@inject("contentStore")
@observer
class Options extends React.Component {
    @action("delete")
    delete = () => this.props.contentStore.deleteCard(this.props.id);

    @action("edit open")
    editOpen = () => {
        this.props.toggleEditable();
        this.props.fillTemplate();
    };

    @action("edit save")
    editSave = () => {
        this.props.toggleEditable();
        this.props.contentStore.saveCard(this.props.id, this.props.template);
    };

    ToggleOptions = () => {
        if (this.props.editable) {
            return (
                <React.Fragment>
                    <StyledOptionsBtn action={this.editSave}>{<IconCheck />}</StyledOptionsBtn>
                    <StyledOptionsBtn action={this.props.toggleEditable}>{"exit"}</StyledOptionsBtn>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <StyledOptionsBtn action={this.editOpen}>{<IconPen />}</StyledOptionsBtn>
                    <StyledOptionsBtn action={this.delete}>{<IconCross />}</StyledOptionsBtn>
                </React.Fragment>
            );
        }
    };

    render() {
        return <StyledOptions>{<this.ToggleOptions />}</StyledOptions>;
    }
}

export default Options;
