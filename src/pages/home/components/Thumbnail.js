import React from "react";
import styled from "styled-components";

const StyledThumbnail = styled.img`
     width: 5rem;
    height: 5rem auto;
    align-self: center;
`;

function Thumbnail(props) {
    return (
        <StyledThumbnail src={props.url} />
    );
}

export default Thumbnail;