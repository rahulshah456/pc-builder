import logo from '../assets/logo.svg';
import styled from 'styled-components';
import React from 'react';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    return(
        <React.Fragment>
            <AppContainer>
                <h1>Welcome Boi!</h1>
            </AppContainer>
        </React.Fragment>
    );
}

export default Home;