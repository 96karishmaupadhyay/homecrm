import React from "react";
import crm from "../../assets/crmframe.jpg";
import template from "../../assets/template.jpg";
import chatbot from '../../assets/chatbot.jpg'
import { FileCheck2 } from "lucide-react";
const features = [
  {
    title: "Chatbot",
    description: [
      "Automate user interactions",
      "Support 24/7 with quick responses",
      "Integrate with multiple platforms",
      "Automate user interactions",
      "Support 24/7 with quick responses",
      "Integrate with multiple platforms",
    ],
    image: chatbot,
    reverse: false, 
  },
  {
    title: "CRM",
    description: [
      "Manage leads and customer data",
      "Track communication history",
      "Automate follow-ups and reminders",
       "Manage leads and customer data",
      "Track communication history",
      "Automate follow-ups and reminders",
    ],
    image: crm,
    reverse: true, 
  },
  {
    title: "Template",
    description: [
      "Choose from multiple pre-built layouts",
      "Customize colors, fonts and elements",
      "Responsive designs for all screens",
       "Choose from multiple pre-built layouts",
      "Customize colors, fonts and elements",
      "Responsive designs for all screens",
    ],
    image: template,
    reverse: false,
  },
];

const Features = () => {
  return (
    <div className="bg-white-50 py-12 px-6 md:px-20 space-y-20  border-0 md:border-1 md:border-blue-300 md:rounded-2xl md:m-20 shadow">
      <h1 className="text-6xl font-bold text-center  mb-8">
        Our Features
      </h1>

      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center justify-between gap-16 ${
            feature.reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-4xl font-bold text-blue-400 mb-4">
              {feature.title}
            </h2>
            <ul className=" list-inside text-gray-700 space-y-2">
              {feature.description.map((point, i) => (
              <li key={i} className="flex gap-2 items-center"> 
               <FileCheck2  className="text-blue-500 h-4"/> 
              {point}</li>
              ))}
            </ul>
          </div>

         
          <div className="md:w-1/2 w-full group">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
