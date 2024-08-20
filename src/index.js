import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/swiper-bundle.css';
import Mainb from './layout/Mainb'
import Social from './layout/Social'
import Form from './layout/Form'
import App from './layout/App'
import './css/common.css'

import 'jquery-ui/themes/base/theme.css'; // 기본 테마
import 'jquery-ui/themes/base/button.css';
import 'jquery-ui/themes/base/dialog.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Mainb />
  <Social />
  <Form />
  <App />
  </Router>

);
