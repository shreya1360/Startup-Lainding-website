import React from 'react';
import { Link } from "react-router-dom";
import Vmc from './inc/Vmc';

function Aboutus(){
    return(
        // Banner section
<div>
    <section className="py-4 bg-info">
        <div className="container">
            <div className="row">
                <div className="col-md-8 my-auto">
                    <h6 className="float-end">Home /  About us</h6>

                </div>
            </div>
            
        </div>
    </section>

    <section className="section border-bottom">
        <div className="container"></div>
        <h5 className="main-heading">Our Company</h5>
        <div className="underline"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
        </p>

    </section>

    {/* Our vision, mission and value */}
    <Vmc/>

</div>
    )

}
export default Aboutus;