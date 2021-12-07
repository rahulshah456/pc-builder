import React from 'react';
import { useRoutes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Nav/Navbar';
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Selector from './pages/Selector';


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
      <React.Fragment>
        <Navbar />
        <BrowserRouter>
          <App/> 
        </BrowserRouter>
      </React.Fragment>
    );
}


export default AppWrapper;
