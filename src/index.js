import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Amplify} from 'aws-amplify';
import config from './aws-exports'

import NavBar from './NavBar';
import './NavBar.css';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <App/>
  
);





  


