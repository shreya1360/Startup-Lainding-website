import React from 'react';
import {Link} from 'react-router-dom'
import  {p} from 'react';

function Footer(){
    return(
       <section className="section footer bg-dark text-white">
        <div className="container">
            <div class="row">
            <div className="col-md-4">
                <h6>Company Information</h6>
                <hr/>
                <p clasName="text-white">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                     totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                     dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 

                </p>

            </div>
            <div className="col-md-4 text-center">
                <h6>Quick Links</h6>
                <hr/>
                <div><Link to="/">Home</Link></div>
                <div><Link to = "/about">About</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <div><Link to="/">Blog</Link></div>

            </div>
            <div className="col-md-4">
                <h6>Contact Information</h6>
                <hr/>
                <div><p className="text-white mb-1">#64, Banglore Karnataka India, Byrathi</p></div>
                 <div className="text-white mb-1"><p>+91 8888XXXXX8</p></div>
                 <div className="text-white mb-1"><p>+91 8888XXXXX8</p></div>
                 <div className="text-white mb-1"><p>email@domain.com</p></div>
                 </div>


            </div>

        </div>

       </section> 
    );
}
export default Footer;