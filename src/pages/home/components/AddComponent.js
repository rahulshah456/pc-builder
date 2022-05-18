import React from "react";
import styled from "styled-components";
import { AddIcon } from "../../../components/Icons";
import { rigHoverThemeColor, textThemeColor, whiteColor } from "../../../core/color";

const StyledAddComponent = styled.div`
    border: 0.5px solid ${rigHoverThemeColor};
    width: 250px;
    height: auto 100px;
    border-radius: 0.5rem;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: 250ms ease-in;
    cursor: pointer;

    &:hover {
        background-color: ${rigHoverThemeColor};
    }
`;


function AddComponent(props) {
    return (
        <StyledAddComponent onClick={props.onClickEvent}>
            <AddIcon />
        </StyledAddComponent>
    );
}

export default AddComponent;