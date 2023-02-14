import ray from './img/ray.svg';
import './App.css';
import  ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import NavBar from './NavBar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import {BrowserRouter,Route, Router, Routes} from "react-router-dom";
import { makeStyles, withTheme } from '@mui/styles';





function App() {

const useStyles=makeStyles(()=>({
App:{

  backgroundColor:"#14161a",
  color:"white",
  minHeight:"100vh",

},
}));

const classes = useStyles();
  return (
    
  <BrowserRouter>
  <div className={classes.App}>
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage/>} exact/>
    <Route path="/coins/:id" element={<CoinPage/>}/>
    </Routes>
  </div>
  </BrowserRouter>
    
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ray} className="App-logo" alt="ray" />
        <p>
          Welcome to best analytics platform in crypto world!
        </p>
        <button
          className="App-link"
          href="markup/login.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href='markup/login.html'>
           
          </a>
        </button>
      </header>
    </div>
  );
}*/

export default App;
