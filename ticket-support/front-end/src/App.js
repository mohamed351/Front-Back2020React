import React from 'react';

import './App.css';
import Navbar from './app/components/Navbar';
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './app/pages/Home';
import Login from './app/pages/Login';
import Register from './app/pages/Register';

function App() {
  return (
   <>
   <Router>

   <Navbar title={"Ticket Support"} />
   <div className='container mt-3'>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/register' element={ <Register />} />
    <Route path='/login' element={<Login/>} />
   </Routes>
   </div>
   </Router>

   </>
  );
}

export default App;
