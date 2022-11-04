import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login';
import Registration from './Registration';
import Weather from './Weather';
import Degree from './Degree';
import Frontpage1 from './Frontpage1';
import Frontpage2 from './Frontpage2';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='/degree' element={<Degree/>}/>
      <Route path='/frontpage1' element={<Frontpage1/>}/>
      <Route path='/frontpage2' element={<Frontpage2/>}/>
    </Routes>
    </BrowserRouter>

     </>
  );
}

export default App;
