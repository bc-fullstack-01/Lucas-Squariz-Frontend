import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>      
    </div>
  );
}

export default App;
