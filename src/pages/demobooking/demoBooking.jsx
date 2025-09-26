import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const timeSlots = [
  "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM",
  "05:30 PM", "06:00 PM"
];

const DemoBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }
    alert(`✅ Demo booked on ${selectedDate.toDateString()} at ${selectedTime}`);
  };

  return (
    <>
    <Navbar/>
    <div className="h-fit bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            CRM Business <br />  One-on-One demo
          </h2>
          <p className="text-gray-600 mt-4">🕒 30 minutes</p>
          <p className="text-green-600 mt-2">
            ✅ Web conferencing details provided upon confirmation.
          </p>
        </div>

      
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose a Date</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            
          />
        </div>

      
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Select a Time</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`border rounded-md px-4 py-2 text-sm font-medium transition ${
                    selectedTime === slot
                      ? "bg-blue-600 text-white border-blue-600"
                      : "text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Book Demo
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DemoBooking;
