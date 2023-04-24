import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


const rootElement = document.getElementById('root') as HTMLElement;

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const renderApplication = () => {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
};

renderApplication();