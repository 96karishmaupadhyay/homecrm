// import React from 'react'
// import Navbar from '../../components/navbar/navbar'
// import PricingSection from '../../sections/pricing/pricingSection'
// import Footer from '../../components/footer/footer'

// const Prices = () => {
//   return (
//     <div>
//       <Navbar/>
//       <PricingSection/>
//       <Footer/>
//     </div>
//   )
// }

// export default Prices


import React from 'react';
import Navbar from '../../components/navbar/navbar';
import PricingSection from '../../sections/pricing/pricingSection';
import Footer from '../../components/footer/footer';

const Prices = () => {
  return (
    <div>
      <Navbar />

     
      <section className="text-center py-12 px-4 bg-white-50">
        <h1 className="text-4xl md:text-6xl  font-bold mb-4  md:mx-40">
                  
         You Think We will Make it <span className='text-blue-500 font-extrabold'>Possible</span> for you
      </h1>
      
        <p className="text-gray-600 max-w-xl mx-auto">
          Simple and transparent pricing with all the features you need to grow. Cancel anytime.
        </p>
        {/* <div className="h-3 w-24 bg-blue-50 rotate-145 mx-auto mt-2 rounded" ></div> */}
      </section>

      <PricingSection />

    

   
      <section className="text-center py-12 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-2">Need a Custom Plan?</h2>
        <p className="text-gray-700 mb-4">We’re happy to help tailor a solution just for you.</p>
        <a
          href="/demo-book"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Book a call
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
