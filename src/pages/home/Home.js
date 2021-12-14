import styled from 'styled-components';
import React from 'react';
import RigComponent from './components/RigComponent';
import { RIG_COMPONENTS as RigComponents } from '../../core/constants';
import AddComponent from './components/AddComponent';
import Invoice from './components/Invoice';
import { useNavigate } from 'react-router-dom';

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


const generateRigComponents = (navigate) => {
    var components = [];
    RigComponents.forEach((value, key) => {
        if(key !== 'add') {
            components.push(
                <RigComponent 
                    header={value.header} 
                    onClickEvent={ async () => navigate(`/create/selector/${value.id}`) } />
            );
        } else {
            components.push(<AddComponent onClickEvent={ addComponentDialog }/>);
        }
    });
    return components;
}


const addComponentDialog = async () => {
    console.log("add Clicked!");
}


const Home = () => {

    const navigate = useNavigate();

    return(
        <AppContainer>
            <SelectionContainer>
                { generateRigComponents(navigate) }
            </SelectionContainer>
            <PreviewContainer>
                <Invoice />
            </PreviewContainer>
        </AppContainer>
    );
}

export default Home;