import styled from "styled-components";
import Button from "../elements/";

export const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: auto;
`;

export const Overlay = styled(ModalWrap)`
    background-color: rgba(0, 0, 0, 0.8);
`;

export const Body = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    margin: 20px auto;
    background-color: #fff;
    max-width: 900px;
    padding: 25px;
    border-radius: ${props => props.theme.borderRadius};
`;

export const Close = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
`;
