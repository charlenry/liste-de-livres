import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootswatch/lumen/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);