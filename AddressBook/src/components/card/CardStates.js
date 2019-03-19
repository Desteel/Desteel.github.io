import ElemInput from "./ElemInput";
import { StyledCardInner, StyledImagebox, StyledMain } from "./StyledCard";
let photoIcon = require("../../images/photo.png");

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
