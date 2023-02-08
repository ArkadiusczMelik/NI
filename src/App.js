import ray from './img/ray.svg';
import './App.css';
import  ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import NavBar from './NavBar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import {BrowserRouter,Route} from "react-router-dom";




function App() {
  return (
    
  <BrowserRouter>
  <div>

    <Header/>
    <Route path="/" component={HomePage}/>
    <Route path="/" component={CoinPage}/>


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
