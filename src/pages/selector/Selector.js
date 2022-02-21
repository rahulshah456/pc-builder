import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SelectionComponent from "./components/SelectionComponent";

const StyledSelector = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
`;


const FetchProcessors = async (component) => {
    try {
        const response = await fetch(`http://localhost:8080/links/${component}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Connection': 'keep-alive',
                'Vary': 'Accept-Encoding',
                'Accept': 'application/json',
            }
        });
        return response.json();

    } catch(error) {
        console.log(error);
    }
}





const Selector = () => {

    const params = useParams();
    const [isLoading, setLoading] = useState(true);
    const [processors, setProcessors] = useState(null);


    const generateCPUComponents = async () => {

        //params includes the navigated path headers
        const response = await FetchProcessors(params.id);
        const components = [];

        if(response.toplist.length > 0) {

            response.toplist.forEach( (item, index) => {
                components.push(item);
            });

            //console.log(components);
            setProcessors(components);
            setLoading(false);
        }
    }

    useEffect(() => {
        generateCPUComponents();
    },[]);
    

    return(
        <StyledSelector>
            {(isLoading) ? <h2>Loading...</h2> : 
                processors.map(data => <SelectionComponent data={data} type={params.id} />) }
        </StyledSelector>
    );
}

export default Selector;