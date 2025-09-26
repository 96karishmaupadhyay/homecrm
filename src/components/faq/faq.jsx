import React, { useState } from 'react';
const leftColumnFaqs = [
  {
    id: 'faq-1',
    question: "Can we use a CRM system for marketing purposes?",
    answer: "Yes, you can absolutely use a CRM system for marketing purposes. It helps you manage leads, segment your audience, automate campaigns, and track performance effectively."
  },
  {
    id: 'faq-2',
    question: "Can we migrate from a different CRM provider?",
    answer: "Yes, you can migrate your data from a different CRM provider to our platform. Our team can assist you with data migration to ensure a smooth transition."
  },
  {
    id: 'faq-3',
    question: "What is the difference between CRM and spreadsheets?",
    answer: "Traditional spreadsheets require manual data entry and are prone to errors. CRM software offers automation, centralized customer data, task management, integration with other tools, and powerful analytics for better decision-making."
  }
];

const rightColumnFaqs = [
  {
    id: 'faq-4',
    question: "How to get the most out of a CRM system?",
    answer: "To get the most out of a CRM system, ensure your team is properly trained, keep your data clean and updated, integrate it with your sales and marketing tools, and regularly analyze reports to improve customer engagement."
  },
  {
    id: 'faq-5',
    question: "What are the prerequisites to implement a CRM system?",
    answer: "You need to have clearly defined sales and customer processes, a list of existing customer data, and involvement from your sales, marketing, and support teams. A strategy for onboarding and training is also essential."
  },
  {
    id: 'faq-6',
    question: "Do we need to configure the CRM system ourselves?",
    answer: "No, our team offers free onboarding and will configure the CRM system to suit your business needs. Just connect with your account manager to get started."
  }
];


const FaqPanel = ({ faqs, panelId }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="faq-panel">
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          
          return (
            <div
              key={faq.id}
              className="border border-gray-50  rounded-lg overflow-hidden bg-white shadow-md "
            >
              <div className="panel-heading">
                <h6 className="panel-title">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left text-lg font-medium text-gray-800 bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none "
                    aria-expanded={isOpen}
                  >
                    <div className="flex justify-between items-center">
                      <span className="pr-4 text-gray-500 text-sm">{faq.question}</span>
                      <span className="text-xl flex-shrink-0 text-blue-500 ">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                  </button>
                </h6>
              </div>
              
              {isOpen && (
                <div className="panel-body px-6 py-4 border-t border-gray-200 bg-white">
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-12">
      <div className="theme-title-one mb-20">
        <h2 className="main-title text-4xl font-bold text-left lg:text-center text-gray-800 mb-8">
          <span className="relative">
            Frequently Asked Questions
            
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-max">
        <div className="col-lg-6">
          <FaqPanel faqs={leftColumnFaqs} panelId="accordion" />
        </div>
        
        <div className="col-lg-6">
          <FaqPanel faqs={rightColumnFaqs} panelId="accordion2" />
        </div>
      </div>
    </div>
  );
};

export default Faq;