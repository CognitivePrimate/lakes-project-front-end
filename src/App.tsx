import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// imported components
import Header from './components/header';


// styles
import GlobalStyle from "./GlobalStyles";
import Homepage from './components/homepage/homepage';
import SchedulingMenu from './components/scheduling/scheduling-menu';
import CreateNewSchedule from './components/scheduling/create-new-schedule';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Homepage />}/>
          <Route path='SchedulingMenu' element={<SchedulingMenu />}/>
          <Route path='CreateNewSchedule' element={<CreateNewSchedule/>}/>

        </Routes>
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
