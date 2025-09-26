import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Features from '../../sections/features/features';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
const Feature = () => {
  return (
    <div>
      <Navbar />

   
      <section className="bg-slate-50 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Explore Our Powerful <span className='text-blue-500'>features</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Discover how our features can streamline your workflow, boost productivity,
          and give your business a competitive edge.
        </p>
      </section>

    
      <Features />

     
      <section className="bg-slate-200 py-12 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base max-w-xl mx-auto">
          Join thousands of users who trust our platform to grow their business.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all">
        <Link to="/demo-book">
        Start Your Free Trial
        </Link>  
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Feature;
