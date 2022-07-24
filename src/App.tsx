import React from 'react';
import SingIn from './pages/SingIn/index';
import SingUp from './pages/SingUp/index';
import Home from './pages/home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/singin' element={<SingIn />} />
          <Route path='/' element={<Home />} />
          <Route path='/singup' element={<SingUp />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
