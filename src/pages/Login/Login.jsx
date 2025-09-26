import React, { useState } from 'react';
import { Check, MessageCircle, Target, Shield, Eye, EyeOff } from 'lucide-react';
import logo from '../../assets/logo.png'
import CompanyDetails from '../../components/companydetails/CompanyDetails';
export default function Login() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [companyModal,setCompanyModal] =useState(false)
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlecompanyModal=()=>{
    setCompanyModal(true)
  }
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
  {/* Left Side - Stacked on mobile */}
  <div className="lg:w-1/2 w-full p-6 sm:p-8 flex flex-col">
    <img src={logo} alt="Ziplofy" height={40} width={120} className="mb-4" />
    <div className="max-w-md">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
        Experience the future of
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-8">
        WhatsApp Marketing
      </h2>

      {/* FREE Credits */}
      <div className="bg-[#0c9ffa] text-white p-3 rounded-lg mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <span className="text-green-500 font-bold text-sm">$</span>
          </div>
          <span className="text-lg sm:text-xl font-bold">$500 FREE Ad Credits</span>
        </div>
        <p className="text-green-100 text-sm sm:text-base">Run Click to WhatsApp Ads & 5X your leads</p>
      </div>

      {/* Features */}
      <div className="space-y-4">
        <p className="text-gray-600 font-medium mb-4 text-sm sm:text-base">
          YOUR FREE FOREVER PLAN INCLUDES
        </p>

        {[{
          icon: <MessageCircle className="w-5 h-5 text-green-600" />,
          title: "FREE WhatsApp Business API",
          desc: "Instant verification & setup with Meta"
        }, {
          icon: <Target className="w-5 h-5 text-green-600" />,
          title: "Advanced AI Ads Manager",
          desc: "AI-powered Ad Campaign optimization & targeting"
        }, {
          icon: <Shield className="w-5 h-5 text-green-600" />,
          title: "FREE Blue Tick Application",
          desc: "Apply for BLUE TICK & get a verified WhatsApp Business Account"
        }].map(({ icon, title, desc }, idx) => (
          <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right Side - Form */}
  <div className="lg:w-1/2 w-full">
    <div className="p-6 sm:p-8 min-h-screen flex flex-col">
      {/* Header */}
      <div className="text-center lg:text-right mb-6">
        <span className="text-gray-600 text-sm sm:text-base">Already a member? </span>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Log in</a>
      </div>

      {/* hey claude this section should be work with condition if company detail modal is false then it should show when it true then a company detail component should show there  */} 
{
  companyModal?(
    <CompanyDetails/>
  ):(
    <div className="flex-1 flex flex-col justify-center w-full max-w-xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
            Create Your Ziplofy Account
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Fill in the details below to get started with your FREE FOREVER plan.
          </p>

          {/* Google Signup */}
          <button className="w-full bg-[#0c9ffa] hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium mb-6 flex items-center justify-center space-x-2 transition-colors text-sm sm:text-base">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="..."/>
            </svg>
            <span>Signup with Google</span>
          </button>

          <div className="text-center mb-6">
            <span className="text-gray-400 text-sm">OR</span>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
            />

            <div className="flex">
              <select className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm">
                <option>🇮🇳 +91</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="WhatsApp Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 border-l-0 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm sm:text-base"
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-12 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none pr-12 text-sm sm:text-base"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <button
              type="button"
              className="w-full bg-[#0c9ffa] text-white py-3 px-4 rounded-lg font-medium  text-sm sm:text-base"
         onClick={handlecompanyModal}
            >
              Start Your FREE FOREVER Plan
            </button>
          </div>

          <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
            <span>The </span>
            <a href="#" className="text-blue-600 hover:underline">Google Privacy</a>
            <span> | </span>
            
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
            <span> apply.</span>
          </div>
        </div>
      </div>
  )
}

    </div>
  </div>
</div>

  );
}