import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';

/* Creating a root element for the React app. */
const root = ReactDOM.createRoot(document.getElementById('root'));
/* Rendering the App component. */
root.render(
    /* A component that is being rendered. */
    <Router >
       {/* A component that is being rendered. */}
        <App />
    </Router>
);
