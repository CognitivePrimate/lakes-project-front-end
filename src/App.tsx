import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// imported components
import Header from './components/header';


// styles
import GlobalStyle from "./GlobalStyles";
import MenuButton from './components/buttons/menuButton';
import Homepage from './components/homepage/homepage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Homepage />
        

        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
