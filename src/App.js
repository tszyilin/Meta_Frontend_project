import React from 'react';
//import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Booking from './components/Booking';

function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/booking' element={<Booking />}></Route>
      </Routes>

    </Router>
  );
}

export default App;