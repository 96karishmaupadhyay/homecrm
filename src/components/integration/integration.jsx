import React from 'react';

const Integration = () => {
  return (
    <div className="relative bg-blue-950 text-white px-6 md:px-12 pb-0 py-12 overflow-hidden flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
      <h4 className="text-3xl sm:text-4xl font-semibold leading-snug ">
        Customer interaction,<br />
        <span className="text-blue-400">on the go</span>
      </h4>

      <p className="mt-4 max-w-xl text-lg text-gray-300">
        Ziplofy chat for mobile enables you to browse conversations, reply to messages and collaborate with your team. Now available on Android and iOS.
      </p>

   

      {/* App Store Buttons */}
      {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 z-10 relative  items-center md:justify-start ">
        
          <img
            src="https://web-assets.emovur.com/whatsapp-business-api/images/play-store.png"
            alt="Google Play"
            className="w-40 sm:w-48"
          />
  
          <img
            src="https://web-assets.emovur.com/whatsapp-business-api/images/app-store.png"
            alt="Apple Store"
            className="w-40 sm:w-48"
          />
       
      </div> */}
</div>
      {/* App Image */}
      <div className="mt-10 z-10 relative">
        <img
          src="https://web-assets.emovur.com/whatsapp-business-api/images/app-w_1040.webp"
          alt="App Mobile"
          className=" w-[220px] sm:w-[400px] lg:w-[400px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Integration;
