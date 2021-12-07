import React from "react";
import styled from "styled-components";

const StyledSelector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Selector = () => {
    return(
        <StyledSelector>
            <h1>This is Components Selector Page!</h1>
        </StyledSelector>
    );
}

export default Selector;