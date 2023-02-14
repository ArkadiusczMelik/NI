import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Amplify} from 'aws-amplify';
import config from './aws-exports'

import NavBar from './NavBar';
import './NavBar.css';
import { BrowserRouter } from 'react-router-dom';
import CryptoContext from './CryptoContext';
import 'react-alice-carousel/lib/alice-carousel.css';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<CryptoContext>
<App/>
</CryptoContext>
 

);





  


