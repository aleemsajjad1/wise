import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouting from './AppRouting'

const App = () => (
  <BrowserRouter>
  <AppRouting></AppRouting>    
  </BrowserRouter>
  // <h1>HELLO WORLD</h1>
);

export default App;
