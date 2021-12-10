import React from 'react';
import { useRoutes, BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './components/Nav/Navbar';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/Login';
import Selector from './pages/Selector';

const AppContainer = styled.div`
    width: 100%;
    height: calc(100vh - 4rem);
`;

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/create", element: <Create /> },
    { path: "/create/selector", element: <Selector /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> }
  ]);
  return routes;
};


const AppWrapper = () => {
  return (
      <AppContainer>
        <Navbar />
        <BrowserRouter>
          <App/> 
        </BrowserRouter>
      </AppContainer>
    );
}


export default AppWrapper;
