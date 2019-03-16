import styled from "styled-components";
import ElemInput from "./ElemInput";
import Input from "../elements/Input";
let photoIcon = require("../../images/photo.png");

const StyledCardInner = styled.div`
    display: flex;
    border: 1px solid #dadce0;
    border-radius: 8px;
    padding: 10px;
`;
const StyledImagebox = styled.div`
    flex: none;
    width: 90px;
    height: 90px;
    margin-right: 15px;

    img {
        border-radius: 8px;
        max-height: 100%;
    }
`;
const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-right: 10px;
`;

export function Form({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <StyledCardInner as="form">
            <StyledImagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </StyledImagebox>
            <StyledMain>
                <ElemInput
                    templateEdit={rest.action}
                    value={name}
                    cath={"name"}
                />
                <ElemInput
                    templateEdit={rest.action}
                    value={surname}
                    cath={"surname"}
                />
                <ElemInput
                    templateEdit={rest.action}
                    value={phone}
                    cath={"phone"}
                />
                <ElemInput
                    templateEdit={rest.action}
                    value={address}
                    cath={"address"}
                />
            </StyledMain>
            {children}
        </StyledCardInner>
    );
}

export function Div({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <StyledCardInner>
            <StyledImagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </StyledImagebox>
            <StyledMain>
                <div>{`${name} ${surname}`}</div>
                <div>{phone}</div>
                <div>{address}</div>
            </StyledMain>
            {children}
        </StyledCardInner>
    );
}
