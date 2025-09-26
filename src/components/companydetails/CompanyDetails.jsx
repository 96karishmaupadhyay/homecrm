import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CompanyDetails() {
  const [formData, setFormData] = useState({
    fullName: 'Karishma Upadhyay',
    companyName: '',
    companyDescription: '',
    country: 'India',
    state: 'Select State',
    companySize: 'Company Size',
    industry: 'Industry',
    websiteUrl: '',
    mobileNumber: '',
    timezone: 'Asia/Calcutta (+05:30)'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const states = [
    'Select State',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  const companySizes = [
    'Company Size',
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  const industries = [
    'Industry',
    'Technology',
    'Healthcare',
    'Finance',
    'Education',
    'Manufacturing',
    'Retail',
    'Consulting',
    'Real Estate',
    'Transportation',
    'Other'
  ];

  const timezones = [
    'Asia/Calcutta (+05:30)',
    'America/New_York (-05:00)',
    'Europe/London (+00:00)',
    'Asia/Tokyo (+09:00)',
    'Australia/Sydney (+11:00)'
  ];

  return (
    <div className="max-w-2xl mx-auto bg-white p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">We're almost there!</h1>
        
        {/* Email connection status */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between mb-8">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">jai6@gmail.com</span>
            <span className="ml-2 text-sm text-gray-600">connected</span>
          </div>
          <button className="text-blue-600 text-sm hover:text-blue-700">
            Change
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Tell us a bit about yourself</h2>
          <p className="text-sm text-gray-600">Please fill in the following details to help us customize your experience.</p>
        </div>
      </div>

      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Full Name</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Company Name */}
        <div>
          <input
            type="text"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Company Description */}
        <div>
          <input
            type="text"
            placeholder="Company Description"
            value={formData.companyDescription}
            onChange={(e) => handleInputChange('companyDescription', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Country Dropdown */}
        <div className="relative">
          <select
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* State Dropdown */}
        <div className="relative">
          <select
            value={formData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            {states.map((state) => (
              <option key={state} value={state} className={state === 'Select State' ? 'text-gray-400' : 'text-gray-900'}>
                {state}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Company Size Dropdown */}
        <div className="relative">
          <select
            value={formData.companySize}
            onChange={(e) => handleInputChange('companySize', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            {companySizes.map((size) => (
              <option key={size} value={size} className={size === 'Company Size' ? 'text-gray-400' : 'text-gray-900'}>
                {size}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Industry Dropdown */}
        <div className="relative">
          <select
            value={formData.industry}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry} className={industry === 'Industry' ? 'text-gray-400' : 'text-gray-900'}>
                {industry}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Website URL */}
        <div>
          <input
            type="url"
            placeholder="Website URL"
            value={formData.websiteUrl}
            onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex">
          <div className="flex items-center px-3 py-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-lg">
            <span className="text-sm text-gray-600">🇮🇳 +91</span>
            <ChevronDown className="h-4 w-4 text-gray-400 ml-1" />
          </div>
          <input
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* Timezone */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Timezone</label>
          <div className="relative">
            <select
              value={formData.timezone}
              onChange={(e) => handleInputChange('timezone', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            >
              {timezones.map((timezone) => (
                <option key={timezone} value={timezone}>
                  {timezone}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
            disabled
          >
            Complete Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}