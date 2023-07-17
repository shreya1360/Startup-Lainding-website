import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container">
   
    
    <Link to="/" class="navbar-brand text-white">Funda of web IT</Link>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
         
          <Link to="/" class="nav-link active text-white">Home</Link>
        </li>
        <li class="nav-item">
         
          <Link to="/about" class="nav-link active text-white">Aboutus</Link>
        </li>

        <li class="nav-item">
         
          <Link to="/contact" class="nav-link active text-white">Contact us</Link>
        </li>
        
    
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    );

}
export default Navbar;