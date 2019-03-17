import styled from "styled-components";
import { observer, inject } from "mobx-react";
import Search from "../../search/Search";
import Button from "../../button/Button";
import Time from "../../time/Time";

const StyledHeader = styled.header`
    padding: 8px;
    border-bottom: 1px solid #dadce0;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const BtnAddCard = styled(Button)`
    padding: 8px;
    border: 1px solid #dadce0;
    background-color: transparent;
    border-radius: 8px;
`;


@inject("modalStore")
@observer
class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="container">
                    <Search />
                    <BtnAddCard action={this.props.modalStore.open}>{"Add card"}</BtnAddCard>
                    <Time />
                </div>
            </StyledHeader>
        );
    }
}

export default Header;
