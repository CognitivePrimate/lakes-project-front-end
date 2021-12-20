import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// imported components
import Header from './components/header';
import Button from './components/buttons/buttons';

// styles
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Button
          className='menuButton'
          to='/'
          text='Menu Button' 
        />

        <Button
          className='submitButton'
          to='/'
          text='Submit Button' 
        />

        <Button
          className='navButton'
          to='/'
          text='Nav Button' 
        />

        <Button
          className='breadCrumb'
          to='/'
          text='Breadcrumb Button' 
        />

        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
