import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store';
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false;


const rootElement = document.getElementById('root') as HTMLElement;
const store = configureStore();

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const renderApplication = () => {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Root />
      </Provider>
    </React.StrictMode>
  );
};

renderApplication();