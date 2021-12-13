import styled from "styled-components";


const StyledThumbnail = styled.img`
    width: 3rem;
    height: 3rem;
    align-self: center;
`;

function Thumbnail(props) {
    return (
        <StyledThumbnail src={props.url} />
    );
}

export default Thumbnail;