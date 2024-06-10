import React from 'react';
import './Landingscreen.css';
import AOS from "aos";
import "aos/dist/aos.css";
import {GiShakingHands} from 'react-icons/gi'
import {MdDoubleArrow} from 'react-icons/md';
import {Link} from "react-router-dom"

AOS.init({
    duration: 2000,
  });

function Landingscreen() {

    return (

        <div className="landing">
            
                <h2 data-aos="zoom-in"  className='heading' >
                    Explore My Skills
                </h2>
                <h1 data-aos="zoom-out" className='quotes'>
                    Let's Join Togother <GiShakingHands id='hands' /> To Move Forward.
                </h1>
                <Link to="/sudarsan-portfolio">
                    <button className="landingBtn"> Get Started <MdDoubleArrow id='arrow' /></button>
                </Link>
          
        </div>

    );
}

export default Landingscreen;