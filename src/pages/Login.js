import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = () => {
    return(
        <StyledLogin>
            <h1>This is Login Page!</h1>
        </StyledLogin>
    );
}

export default Login;