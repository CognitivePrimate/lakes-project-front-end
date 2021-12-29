import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// imported components
import Header from './components/header';


// styles
import GlobalStyle from "./GlobalStyles";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        

        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
