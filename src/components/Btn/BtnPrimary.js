import styled from "styled-components";


const StyledPrimaryBtn = styled.button`
    padding: 0.5rem 2rem;
`;

const BtnPrimary = (props) => {
    return(
        <StyledPrimaryBtn>
            {props.name}
        </StyledPrimaryBtn>
    );
}

export default BtnPrimary;