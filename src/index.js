import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/swiper-bundle.css';
import Mainb from './layout/Mainb'
import Social from './layout/Social'
import App from './layout/App'
import './css/common.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Mainb />
  <Social />
  <App />
  </Router>
    

);
