import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// imported components
import Header from './components/header';
import ButtonComponent from './components/buttons/buttons';

// styles
import GlobalStyle from "./GlobalStyles";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ButtonComponent
          variant={'menuButton'}
          to='/'
          text='Menu Button' 
        />

        {/* <ButtonComponent
          theme={'submitButton'}
          to='/'
          text='Submit Button' 
        />

        <ButtonComponent
          theme={'navButton'}
          to='/'
          text='Nav Button' 
        />

        <ButtonComponent
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
