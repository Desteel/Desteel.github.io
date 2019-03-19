import styled from "styled-components";
import Button from "../button/Button";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const Body = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 20px auto;
    background-color: #fff;
    max-width: 900px;
    padding: 25px;
    border-radius: 8px;
`;

export const Close = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
`;