import React from 'react';
import { FileCheck2 } from "lucide-react";
const plans = [
  {
    name: 'Starter Plan',
    price: 0,
    buttonText: 'Try for Free',
    features: [
      'Verified Business Profile',
      'Up to 100 Monthly Conversations',
      'Basic WhatsApp Inbox Access',
      '1 Chatbot with 5 Flows',
      '1 Agent Seat',
      'Basic Analytics',
      'Community Support'
    ],
    conversationCharges: {
      Marketing: '₹0.85',
      Utility: '₹0.13',
      Authentication: '₹0.12',
      Service: '₹0'
    },
    link: '#'
  },
  {
    name: 'Growth Plan',
    price: 1299,
    buttonText: 'Start 7 Day Free Trial',
    features: [
      'Unlimited Conversations',
      'Unlimited Chatbots & Flows',
      'Team Inbox with Role Management',
      'Contact Segmentation & Tagging',
      'Broadcast Scheduling & Smart Retargeting',
      'Custom Templates with Approval',
      'Priority Email Support'
    ],
    conversationCharges: {
      Marketing: '₹0.75',
      Utility: '₹0.11',
      Authentication: '₹0.11',
      Service: '₹0'
    },
    link: '#'
  },
  {
    name: 'Pro Plan',
    price: 2499,
    buttonText: 'Start 7 Day Free Trial',
    features: [
      'Dedicated Success Manager',
      'Multi-Channel Inbox ( IG, FB, Email)',
      'Advanced CRM Integrations',
      'API Access & Webhooks',
      'Custom Workflows & Automations',
      'Real-time Team Performance Analytics',
      '24/7 Live Chat Support'
    ],
    conversationCharges: {
      Marketing: '₹0.72',
      Utility: '₹0.10',
      Authentication: '₹0.10',
      Service: '₹0'
    },
    link: '#'
  }
];


const PricingSection = () => {
  return (
    <div className="bg-white-100 py-12 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Pricing Our Services</h2>
        <div className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded" />
        <p className="mt-4 text-gray-600">
          We are here to | Give our best for you
        </p>
       
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <h4 className="text-3xl font-bold text-blue-400 mb-4">₹{plan.price}/m</h4>

              <div className="mb-4">
                <p className="font-semibold mb-1">Conversation Charges:</p>
                {Object.entries(plan.conversationCharges).map(([key, value]) => (
                  <p key={key} className="text-gray-600 text-sm">
                    {key} : <span className="font-medium">{value}</span>
                  </p>
                ))}
              </div>

              <div>
                <p className="font-semibold mb-1">Features:</p>
                <ul className="  text-sm text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className='flex gap-2 items-center'> 
                     <FileCheck2  className="text-blue-500 h-3"/> 
                    {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all">
                {plan.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all text-lg">
          Explore Pricing Plans
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
