import styled from 'styled-components';
import React from 'react';
import RigComponent from './components/RigComponent';
import AddComponent from './components/AddComponent';
import Invoice from './components/Invoice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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


const generateRigComponents = (navigate, rigComponents) => {
    var components = [];
    for (const [key, value] of Object.entries(rigComponents)) { 
        if(key !== 'add') {
            components.push(
                <RigComponent 
                    key={value.id}
                    component={value} 
                    onClickEvent={ async () => navigate(`/create/selector/${value.id}`) } />
            );
        } else {
            components.push(<AddComponent key='add' onClickEvent={ addComponentDialog }/>);
        }
    }
    return components;
}


const addComponentDialog = async () => {
    console.log("add Clicked!");
}


const Home = () => {

    const navigate = useNavigate();
    const rigComponents = useSelector((state) => state.components.RigComponents);

    return(
        <AppContainer>
            <SelectionContainer>
                { generateRigComponents(navigate, rigComponents) }
            </SelectionContainer>
            <PreviewContainer>
                <Invoice />
            </PreviewContainer>
        </AppContainer>
    );
}

export default Home;