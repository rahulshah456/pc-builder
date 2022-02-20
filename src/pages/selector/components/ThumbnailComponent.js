import styled from "styled-components";


const StyledThumbnail = styled.img`
    width: 6rem;
    height: 6rem auto;
    align-self: center;
`;

function ThumbnailComponent(props) {
    return (
        <StyledThumbnail src={props.url} />
    );
}

export default ThumbnailComponent;