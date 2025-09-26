import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const TermsAndConditions = () => {
  return (
    <>
    <Navbar/>
   
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Terms and Conditions</h1>
      <p className="italic mb-4">
        <strong>Effective Date:</strong> July 27th, 2025
      </p>
      <p className="mb-6">
        Welcome to <strong>Ziplofy</strong> Chatbot, a platform owned and operated by DAV Business Services Pvt. Ltd., headquartered in Greater Noida, Uttar Pradesh, India. By accessing or using our website (https://ziplofy.in), chatbot interface, SaaS dashboard, or WhatsApp Business API-based services, you acknowledge and agree to comply with the terms outlined below.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Services</h2>
      <p className="mb-2">Ziplofy provides intelligent automation and communication tools primarily focused on WhatsApp-based customer engagement, including:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>WhatsApp Chatbot Development:</strong> Custom bot creation and flow design</li>
        <li><strong>Manual Agent Chat Integration:</strong> Live agent handover and management</li>
        <li><strong>WhatsApp Business API Onboarding:</strong> WABA setup and verification</li>
        <li><strong>Campaign Management & Bulk Messaging:</strong> Broadcast and marketing campaigns</li>
        <li><strong>Lead Generation Tools:</strong> Customer acquisition and management</li>
        <li><strong>CRM & Dashboard Tools:</strong> Analytics and customer relationship management</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">2. User Responsibilities</h2>
      <p className="mb-2">As a user of Ziplofy, you agree to:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>You must provide <strong>accurate business, brand, and verification data</strong> for all services.</li>
        <li>Ensure chatbot flows and content comply with <strong>Meta's policies</strong> and applicable regulations.</li>
        <li>Do not use the platform for <span className="text-red-600">spam, harassment, or illegal activities</span>.</li>
        <li>Do not <u>reverse-engineer, redistribute, or resell</u> any part of our platform or services.</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Ziplofy systems, software, and proprietary technology</strong> are the intellectual property of DAV Business Services Pvt. Ltd.
        </li>
        <li>
          You retain ownership of your <strong>brand assets, customer data, and business content</strong> provided to the platform.
        </li>
        <li>
          Any custom integrations or automations developed remain <u>licensed to you</u> for use within our platform.
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments and Subscriptions</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Subscriptions are billed monthly or annually</strong> as per the chosen plan and payment schedule.
        </li>
        <li>
          <strong>Setup fees and onboarding charges</strong> are <span className="text-red-600">non-refundable</span> once services commence.
        </li>
        <li>
          Late payments may lead to <strong>service suspension</strong> until outstanding amounts are cleared.
        </li>
        <li>
          Price changes will be communicated with <strong>30 days advance notice</strong>.
        </li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Confidentiality and Data</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          All <strong>client data, chat logs, and business information</strong> are treated as confidential.
        </li>
        <li>
          Ziplofy does not access, share, or sell customer chat logs or lead information to third parties.
        </li>
        <li>
          Data is stored securely with <strong>encryption and access controls</strong> in compliance with applicable laws.
        </li>
        <li>
          Customers may request <u>data export or deletion</u> subject to legal and operational requirements.
        </li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
      <p className="mb-2">Ziplofy is <strong>not liable</strong> for:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>WhatsApp delivery issues, outages, or policy changes</strong> by Meta or third-party services.
        </li>
        <li>
          <strong>Unauthorized account access</strong> due to compromised credentials or security breaches on the client side.
        </li>
        <li>
          <strong>Campaign misconfigurations or content violations</strong> that result in account restrictions.
        </li>
        <li>
          Business losses, revenue impacts, or indirect damages arising from service interruptions.
        </li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">7. Termination</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          We may <strong>terminate or suspend access</strong> if terms are violated, payments are overdue, or platform misuse occurs.
        </li>
        <li>
          Customers may cancel services with <strong>30 days written notice</strong>, subject to refund policy terms.
        </li>
        <li>
          Upon termination, access to dashboards and services will be <span className="text-red-600">immediately revoked</span>.
        </li>
      </ul>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">8. Governing Law</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          These terms are governed by <strong>Indian law</strong> and subject to the jurisdiction of courts in <u>Bengaluru, Karnataka, India</u>.
        </li>
        <li>
          Any disputes will be resolved through <strong>arbitration or mediation</strong> before litigation.
        </li>
      </ul>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">9. Contact</h2>
      <p className="mb-1"><strong>Ziplofy – DAV Business Services Pvt. Ltd.</strong></p>
      <p>📧 Email: <a href="mailto:support@ziplofy.in" className="text-blue-600 underline">support@ziplofy.in</a></p>
      <p>🌐 Website: <a href="https://ziplofy.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://ziplofy.in</a></p>
    </div>
     <Footer/>
     </>
  );
};

export default TermsAndConditions;