import styled from 'styled-components';
import React from 'react';
import RigComponent from './components/RigComponent';
import { RIG_COMPONENTS as RigComponents } from '../../core/constants';
import AddComponent from './components/AddComponent';
import Invoice from './components/Invoice';

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
    flex: 50%;
    height: auto;
`;


const generateRigComponents = () => {
    var components = [];
    RigComponents.forEach((value, key) => {
        if(key !== 'add') {
            components.push(<RigComponent header={value.header} />);
        } else {
            components.push(<AddComponent />);
        }
    });
    return components;
}


const Home = () => {
    return(
        <AppContainer>
            <SelectionContainer>
                { generateRigComponents() }
            </SelectionContainer>
            <PreviewContainer>
                <Invoice />
            </PreviewContainer>
        </AppContainer>
    );
}

export default Home;