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
          className={'menu-button'}
          to='/'
          text='Menu Button' 
        />

        {/* <Button
          theme={'submitButton'}
          to='/'
          text='Submit Button' 
        />

        <Button
          theme={'navButton'}
          to='/'
          text='Nav Button' 
        />

        <Button
          theme={'breadCrumb'}
          to='/'
          text='Breadcrumb Button' 
        /> */}

        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
