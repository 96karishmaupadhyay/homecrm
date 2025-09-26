import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const tenPercentOfWindow = window.innerHeight * 0.1;

      console.log("scrollY:", scrollY, "Trigger:", tenPercentOfWindow);

      if (scrollY > tenPercentOfWindow) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white shadow-md w-full z-50 transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0' : 'relative'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">
        
          <div className="flex-shrink-0 text-2xl font-bold text-orange-300">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
          </div>

        
          <div className="hidden md:flex space-x-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-500">Features</Link>
            {/* <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link> */}
            {/* <Link to="/partners" className="text-gray-700 hover:text-blue-500">Partners</Link> */}
        
          </div>

       
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 py-4 space-y-2 bg-white w-full shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-blue-500 border-b border-gray-200 pb-3">Home</Link>
          <Link to="/features" className="block text-gray-700 hover:text-blue-500 border-b border-gray-200 pb-3">Features</Link>
         <Link to="/pricing" className="block text-gray-700 hover:text-blue-500 border-b border-gray-200 pb-3">Pricing</Link>
          {/* <Link to="/services" className="block text-gray-700 hover:text-blue-500 border-b border-gray-200 pb-3">Services</Link> */}
          {/* <Link to="/partners" className="text-gray-700 hover:text-blue-500">Partners</Link> */}
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
