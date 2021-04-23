import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss"
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <div>
    <App />
    </div>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

