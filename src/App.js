import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Findevents from './pages/findevents';
import Createevents from './pages/createevents';
import Creategroup from './pages/Creategroup';
import Steps from './pages/Steps';

function App() {
  

  return (
    <div className={`w-screen `}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/findevents' element={<Findevents />} />
          <Route path='/createevents' element={<Createevents />} />
          <Route path='/creategroup' element={<Creategroup />} />
          <Route path='/start' element={<Steps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
