import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
// import App from './App';
import './index.scss'
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDesign from './components/Card/CardDesign';
import DoctorDirectoy from './DoctorDirectoy';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
<ChakraProvider>
  <ColorModeScript />
  {/* <App /> */}
  <Router>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path ='/doctor-directory' element={<DoctorDirectoy/>}/>
    </Routes>
  </Router>
</ChakraProvider>

);

;
