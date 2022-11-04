
import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Theme from './theme';
import {BrowserRouter as Router }from 'react-router-dom';


function App() {
  return (
    <Router>
      <Theme>
      <Navbar />
      </Theme>
    </Router>
    
    
  );
}

export default App;
