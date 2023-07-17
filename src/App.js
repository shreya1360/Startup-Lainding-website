import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import Navbar from './components/inc/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/inc/Footer';

function App() {
  return (
   
<Router>
<>
<Navbar/>
<Routes>
<Route exact  path="/"  element={<Home/>}/>
<Route path="/about"  element={<Aboutus/>}/>
<Route path= "/contact"   element={<Contactus/>}/>
</Routes>
<Footer/>
  </>
  </Router>


  );
}

export default App;
