import React from "react";
import styled from "styled-components";

const StyledDashboard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Dashboard = () => {
    return(
        <StyledDashboard>
            <h1>This is User Dashboard Page!</h1>
        </StyledDashboard>
    );
}

export default Dashboard;