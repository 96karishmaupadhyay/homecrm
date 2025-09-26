import React, { useState } from 'react';
import styles from './heroSection.module.css'
import { Link } from 'react-router-dom';
const HeroSection = () => {

  return (
    <div className="container mx-auto px-8 py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
      
    
      <div className="w-full lg:w-1/2 space-y-6 lg:mr-8 px-2">
     
        {/* <div className='flex gap-2 p-2 w-fit py-2 bg-white rounded-full items-center shadow-lg'>
          <img
            src="https://web-assets.emovur.com/whatsapp-business-api/images/meta%404x.png"
            alt="meta"
            className="w-16 h-3"
          />
          <span className="text-md font-semibold">Tech Partner</span>
      </div> */}

     
        <h1 className="text-3xl md:text-6xl font-bold leading-snug">
          Grow your business <br />
          on <span className="text-[#42B763] font-bold">WhatsApp API</span>
        </h1>

       
        <p className="text-gray-700 text-lg">
          Engage audience, accelerate sales <br />& drive business outcomes.
        </p>

    
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img
              src="https://web-assets.emovur.com/whatsapp-business-api/images/Green tick.svg"
              alt="Green Tick"
              className="w-4 h-4"
            />
            <span className="text-black">verified</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://web-assets.emovur.com/whatsapp-business-api/images/No Markup.svg"
              alt="No Markup"
              className="w-4 h-4"
            />
            <span className="text-black">Pricing Available</span>
          </div>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/login"
          >
            <button 
         className={styles.btnNormal}
     
            >
              Start Free Trial
            </button>
          </Link>
          <Link
           to="/demo-book"

          >
            <button 
              className={styles.btnHover}
          
            >
              Book 1-1 Demo
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="https://web-assets.emovur.com/whatsapp-business-api/images/whatsapp-business-api-title.webp"
          alt="Whatsapp Landing Page"
          className="w-full max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
