import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingIn from './pages/SingIn/index';
import SingUp from './pages/SingUp/index';
import Home from './pages/home';
import Profile from './pages/Profile';
import Profiles from './pages/Profiles';
import NewPost from './pages/Newpost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SingIn />} />
          <Route path='/home' element={<Home />} />
          <Route path='/singup' element={<SingUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profiles' element={<Profiles />} />
          <Route path='/new' element={<NewPost />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
