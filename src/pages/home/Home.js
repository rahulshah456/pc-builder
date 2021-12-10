import styled from 'styled-components';
import React from 'react';
import RigComponent from './components/RigComponent';
import { PC_COMPONENTS } from '../../core/constants';
import AddComponent from './components/AddComponent';

const AppContainer = styled.div`
    width: 100%;
    height: 100% auto;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SelectionContainer = styled.div`
    flex: 50%;
    padding: 3rem 0 3rem 3rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: flex-start;

    @media (max-width: 768px) {
        justify-content: center;
        padding: 2rem;
    }
`;

const PreviewContainer = styled.div`
    background-color: pink;
    flex: 50%;
    height: auto;
`;


const Home = () => {
    return(
        <AppContainer>
            <SelectionContainer>
                {PC_COMPONENTS.map((item) => {

                    if(item.id !== 'add') {
                        return (
                            <RigComponent header={item.header} />
                        );
                    } else {
                        return (
                            <AddComponent />
                        );
                    }
                    
                })}
            </SelectionContainer>
            <PreviewContainer>
                <h1>Go Back Boi!</h1>
            </PreviewContainer>
        </AppContainer>
    );
}

export default Home;