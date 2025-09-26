import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Refund = () => {
  return (
    <>
   <Navbar/>
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Refund Policy</h1>
      <p className="italic mb-4">
        This Refund Policy applies to all services and subscriptions offered by <strong>Ziplofy</strong>, operated by DAV Business Services Pvt. Ltd.
      </p>
      <p className="mb-6">
        At <strong>Ziplofy</strong>, we strive to provide reliable chatbot automation, WhatsApp API integration, and communication solutions. Due to the nature of our services, which involve digital infrastructure setup, messaging infrastructure provisioning, and time-intensive customizations, our refund policy is outlined below.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Service-Based Refunds</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>WhatsApp Chatbot Setup & Customization:</strong> Once the chatbot project has been initiated—flow mapping, integration, or customization—<span className="text-red-600">no refund</span> will be issued.
        </li>
        <li>
          <strong>Manual Agent Chat & CRM Setup:</strong> Refunds are not applicable once the SaaS dashboard and agent management system are configured.
        </li>
        <li>
          <strong>Software Integrations & Custom Solutions:</strong> For CRM/API integrations or custom automation logic, refunds are not possible once the scope is <u>approved</u> and implementation begins.
        </li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">2. Project Cancellation</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          If <strong>Ziplofy</strong> is unable to deliver agreed-upon services due to internal operational limitations, a <strong>partial or full refund</strong> may be considered on a case-by-case basis.
        </li>
        <li>
          If the <strong>client initiates cancellation</strong> after project commencement, Ziplofy reserves the right to retain payments for work completed.
        </li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">3. Retainer & Subscription-Based Services</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Monthly or annual SaaS subscriptions</strong>, including usage of chatbot platforms or dashboards, are <strong>non-refundable</strong> once the billing cycle has started.
        </li>
        <li>
          Customers must provide a <strong>30-day written notice</strong> to cancel any ongoing subscription.
        </li>
        <li>
          No refund will be issued for unused days within an active billing period.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">4. WhatsApp Business API Subscription</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Payments made for <strong>WhatsApp Business API registration, monthly template fees, or message credits</strong> are <strong>non-refundable</strong>, as they involve non-recoverable costs with Meta/BSP.
        </li>
        <li>
          Once a <strong>WABA</strong> is activated or linked to a number, <span className="text-red-600">no reversal or refund</span> is possible.
        </li>
        <li>
          Customers must thoroughly review the <strong>pricing, requirements, and approval terms</strong> before payment.
        </li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Dispute Resolution</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          In case of dissatisfaction, <strong>Ziplofy</strong> encourages clients to contact the support team.
        </li>
        <li>
          We may offer <strong>service credits or partial refunds</strong> at our discretion, if justified.
        </li>
        <li>
          Disputes raised after <strong>15 days</strong> of invoice date may not be eligible for refund.
        </li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact Us</h2>
      <p className="mb-1"><strong>Ziplofy – DAV Business Services Pvt. Ltd.</strong></p>
      <p>📧 Email: <a href="mailto:support@ziplofy.in" className="text-blue-600 underline">support@ziplofy.in</a></p>
      <p>🌐 Website: <a href="https://ziplofy.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://ziplofy.in</a></p>
    </div>
    <Footer/>
     </>
  );
};

export default Refund;
