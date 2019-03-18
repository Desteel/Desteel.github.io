import styled from "styled-components";
import { action } from "mobx";
import { observer, inject } from "mobx-react";
import Search from "../../search/Search";
import HocModal from "../../modal/HocModal";
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

const BtnAddCard = styled(HocModal)`
    padding: 8px;
    border: 1px solid #dadce0;
    background-color: transparent;
    border-radius: 8px;
`;

const content = (
    <div className="test">"This is the test content for BtnAddCard"</div>
);

@inject("modalStore")
@observer
class Header extends React.Component {
    @action("init modal")
    initModal = () => {
        this.props.modalStore.init(content);
    };

    render() {
        return (
            <StyledHeader>
                <div className="container">
                    <Search />
                    <BtnAddCard content={content} />
                    <Time />
                </div>
            </StyledHeader>
        );
    }
}

export default Header;
