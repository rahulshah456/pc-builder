import styled from "styled-components";


const StyledThumbnail = styled.img`
    width: 4rem;
    height: 4rem;
    align-self: center;
`;

function Thumbnail(props) {
    return (
        <StyledThumbnail src={props.url} />
    );
}

export default Thumbnail;