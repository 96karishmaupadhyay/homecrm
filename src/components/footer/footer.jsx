import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Users,
  BarChart3,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_rgba(120,119,198,0.3),_transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.1),_transparent_50%)]"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
               <img src={logo} alt="" />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empower your business with our advanced CRM solutions. Streamline customer relationships, boost sales, and drive growth with intelligent automation.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-blue-400 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-slate-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

           
            <div>
  <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
  <ul className="space-y-3">
    <li>
      <Link to="/features" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
        Features
      </Link>
    </li>
    <li>
      <Link to="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
        Pricing
      </Link>
    </li>
    <li>
      <Link to="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
        Privacy
      </Link>
    </li>
    <li>
      <Link to="/terms-&-condition" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
        Terms & Condition
      </Link>
    </li>
    <li>
      <Link to="/refund-policy" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
        Refund Policy
      </Link>
    </li>
  </ul>
</div>


           
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">CRM Solutions</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Sales Management', icon: BarChart3 },
                  { name: 'Customer Support', icon: Users },
                  { name: 'Marketing Automation', icon: Zap },
                  { name: 'Analytics & Reports', icon: BarChart3 },
                  { name: 'Lead Generation', icon: Users },
                  { name: 'Pipeline Management', icon: BarChart3 }
                ].map((solution) => (
                  <li key={solution.name}>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                      <solution.icon className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
                      {solution.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email Us</p>
                    <a href="mailto:support@ziplofy.in" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      support@ziplofy.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500/20 p-2 rounded-lg mt-1">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Call Us</p>
                    <a href="tel:+1234567890" className="text-green-400 hover:text-green-300 transition-colors duration-200">
                      0120-5162149
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300">Visit Us</p>
                    <p className="text-purple-400">
                     office No.-731  <br />
                      Gaur City Mall ,Greater Noida
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-8  mr-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 ">
                <h5 className="text-lg font-semibold text-white mb-2">Stay Updated</h5>
                <p className="text-gray-300">Get the latest CRM tips and product updates</p>
              </div>
              <div className="flex  w-full md:w-auto mr-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-80 px-4 py-3 bg-slate-800 border border-slate-600 rounded-l-lg focus:outline-none  text-white placeholder-gray-400"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-r-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Ziplofy. All rights reserved. | Empowering businesses worldwide.
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;