import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vmc from './inc/Vmc';
import Service1 from '../images/img1.jpg';
import Service2 from '../images/img2.jpg';
import Service3 from '../images/img3.jpg';
function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our vision, mission and value */}
      <Vmc/>

{/* Our Services */}
<section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center ">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
             </div>
             <div className="col-md-4 ">
                <div className="card shadow">
                 
                   <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                   <div className="card-body">
                    <h6>Service 1</h6>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>

                <Link to="/services" className="btn btn-link">read more</Link>
                    </div>
                   </div>
               </div>

               <div className="col-md-4 ">
                <div className="card shadow">
                 
                   <img src={Service2} className="w-100 border-bottom" alt="Services"/>
                   <div className="card-body">
                    <h6>Service 2</h6>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>

                <Link to="/services" className="btn btn-link">read more</Link>
                    </div>
                   </div>
               </div>

               <div className="col-md-4 ">
                <div className="card shadow">
                 
                   <img src={Service3} className="w-100 border-bottom" alt="Services"/>
                   <div className="card-body">
                    <h6>Service 3</h6>
                <div className="underline"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>

                <Link to="/services" className="btn btn-link">read more</Link>
                    </div>
                   </div>
               </div>

               
            
           </div>
           </div>
      </section>
    </div>
  );
}
export default Home;
