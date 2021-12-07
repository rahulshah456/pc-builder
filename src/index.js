import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppWrapper from './App';
import DarkThemeProvider from './components/CustomThemeProvider';
import { GlobalStyle } from './core/theme';
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <DarkThemeProvider>
          <GlobalStyle />
          <AppWrapper/>
      </DarkThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);