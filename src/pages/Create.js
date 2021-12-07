import React from "react";
import styled from "styled-components";

const StyledCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Create = () => {
    return(
        <StyledCreate>
            <h1>This is Create PC Page!</h1>
        </StyledCreate>
    );
}

export default Create;