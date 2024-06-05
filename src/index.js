import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/css/index.css';

const root = document.getElementById('root');
const container = ReactDOM.createRoot(root);

document.title = 'PokéView';
container.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);