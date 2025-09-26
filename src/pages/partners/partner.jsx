import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Partners from '../../sections/partners/partners';
import Footer from '../../components/footer/footer';

const Partner = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

     <section className="bg-blue-400 h-[60vh] flex items-center justify-center text-center px-4">
  <div>
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Hands with Us</h1>
    <p className="text-lg text-gray-600 max-w-xl mx-auto">
      Partnering for innovation, growth, and success. Let’s build the future together.
    </p>
  </div>
</section>


      {/* Existing Partners Section */}
      <Partners />

      {/* Why Partner With Us */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "Wider Reach", desc: "Expand your customer base with our growing network." },
              { title: "Tech Integration", desc: "Easy APIs and seamless tools for collaboration." },
              { title: "Marketing Boost", desc: "Get featured across our digital platforms." }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">What Our Partners Say</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                <p className="italic text-gray-700 mb-4">"Partnering with them helped us scale faster than ever!"</p>
                <div className="text-sm text-gray-500">– Partner {i + 1}, Company</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
        <p className="mb-6 max-w-md mx-auto">Become part of an ecosystem that thrives on mutual growth and innovation.</p>
        <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition">
          Get in Touch
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Partner;
