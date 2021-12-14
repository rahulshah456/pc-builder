import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledSelector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


const Selector = () => {

    const params = useParams();

    return(
        <StyledSelector>
            <h1>This is Components Selector Page!</h1>
            <h2>Select {params.id}</h2>
        </StyledSelector>
    );
}

export default Selector;