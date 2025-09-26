import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Privacy = () => {
  return (
    <>
    <Navbar/>
  
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>
      <p className="italic mb-4">
        <strong>Last Updated:</strong> July 27th, 2025
      </p>
      <p className="mb-6">
        This Privacy Policy outlines how <strong>Ziplofy</strong>, operated by DAV Business Services Pvt. Ltd., collects, stores, uses, and shares your personal data when you use our WhatsApp automation platform, chatbot services, and related tools. We are committed to protecting your privacy and ensuring transparent data practices.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Scope and Coverage</h2>
      <p className="mb-2">This policy applies to:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Website Visitors:</strong> Anyone browsing our website or marketing materials</li>
        <li><strong>Platform Users:</strong> Customers using our chatbot and dashboard services</li>
        <li><strong>End Users:</strong> Individuals interacting with chatbots powered by our platform</li>
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      
      <h3 className="text-lg font-medium mt-4 mb-2">Website Visitors:</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and session data</li>
        <li><strong>Location Data:</strong> General geographic location based on IP address</li>
        <li><strong>Usage Analytics:</strong> Pages visited, time spent, and interaction patterns</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Platform Customers:</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Contact Information:</strong> Name, email, phone number, and business details</li>
        <li><strong>Verification Data:</strong> Business documents, identity verification, and compliance information</li>
        <li><strong>Payment Information:</strong> Billing details processed through secure payment gateways</li>
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">Platform Users:</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Chat History:</strong> Messages, conversations, and interaction logs (when enabled)</li>
        <li><strong>Device Information:</strong> Device type, operating system, and app usage data</li>
        <li><strong>Metadata:</strong> Timestamps, message delivery status, and engagement metrics</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">3. How We Use Your Data</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Service Delivery:</strong> To activate and manage your <u>WhatsApp Business API</u> and chatbot services
        </li>
        <li>
          <strong>Customization:</strong> To configure chatbot flows, responses, and automation based on your requirements
        </li>
        <li>
          <strong>Analytics and Insights:</strong> To provide performance metrics, usage statistics, and optimization recommendations
        </li>
        <li>
          <strong>Customer Support:</strong> To respond to inquiries, troubleshoot issues, and provide technical assistance
        </li>
        <li>
          <strong>Marketing Communications:</strong> To send updates, newsletters, and promotional content <span className="text-red-600">(with explicit consent only)</span>
        </li>
        <li>
          <strong>Legal Compliance:</strong> To meet regulatory requirements and prevent fraud or misuse
        </li>
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies and Tracking Technologies</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Essential Cookies:</strong> Required for login authentication, session management, and core platform functionality
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Used to understand user behavior, improve services, and optimize performance
        </li>
        <li>
          <strong>Personalization Cookies:</strong> To remember preferences, settings, and customized experiences
        </li>
        <li>
          You can manage cookie preferences through your browser settings, though disabling essential cookies may affect functionality.
        </li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Sharing and Third Parties</h2>
      <p className="mb-2">We share data only with <strong>verified and trusted partners</strong> for:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Cloud Hosting and Infrastructure:</strong> Secure servers, databases, and content delivery networks
        </li>
        <li>
          <strong>Payment Processing:</strong> Banks, payment gateways, and financial institutions for transaction processing
        </li>
        <li>
          <strong>WhatsApp Business API:</strong> Meta and Business Solution Providers (BSPs) for message delivery
        </li>
        <li>
          <strong>Analytics and Monitoring:</strong> Tools for performance tracking and security monitoring
        </li>
        <li>
          We <span className="text-red-600">never sell, rent, or trade</span> your personal data to third parties for marketing purposes.
        </li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">6. International Data Transfers</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Your data may be processed in <strong>different countries</strong> where our service providers operate.
        </li>
        <li>
          We ensure appropriate <u>security measures and contractual safeguards</u> are in place for cross-border transfers.
        </li>
        <li>
          Data transfers comply with applicable privacy laws and international data protection standards.
        </li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">7. Data Security and Protection</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Encryption:</strong> All data transmission uses <u>SSL/TLS encryption</u> and data at rest is encrypted
        </li>
        <li>
          <strong>Access Controls:</strong> Role-based permissions and multi-factor authentication for staff access
        </li>
        <li>
          <strong>Secure Infrastructure:</strong> Regularly monitored servers with firewall protection and intrusion detection
        </li>
        <li>
          <strong>Password Security:</strong> User passwords are <span className="text-red-600">hashed and salted</span> using industry standards
        </li>
        <li>
          <strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing
        </li>
      </ul>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Retention</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          We retain personal data only for as long as <strong>necessary to provide services</strong> or as required by law.
        </li>
        <li>
          <strong>Chat data and conversation logs</strong> are retained based on your subscription plan and legal requirements.
        </li>
        <li>
          <strong>Account data</strong> is retained for up to <u>2 years after account closure</u> for legal and operational purposes.
        </li>
        <li>
          You may request earlier deletion subject to legal obligations and technical feasibility.
        </li>
      </ul>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">9. Your Privacy Rights</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Access:</strong> Request a copy of personal data we hold about you
        </li>
        <li>
          <strong>Correction:</strong> Update or correct inaccurate or incomplete information
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)
        </li>
        <li>
          <strong>Objection:</strong> Object to certain data processing activities, including marketing communications
        </li>
        <li>
          <strong>Data Portability:</strong> Export your data in a structured, machine-readable format
        </li>
        <li>
          <strong>Restriction:</strong> Request limitation of data processing in certain circumstances
        </li>
      </ul>

      {/* Section 10 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">10. Chat Data and Lead Management</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          <strong>Customer chat history and lead information</strong> is stored securely and used only for service delivery.
        </li>
        <li>
          We do not <span className="text-red-600">sell, share, or misuse</span> chat data or customer lead information.
        </li>
        <li>
          Chat data is accessible only to <u>authorized personnel</u> for support and technical purposes.
        </li>
        <li>
          Lead data belongs to the customer and can be exported or deleted upon request.
        </li>
      </ul>

      {/* Section 11 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">11. Policy Updates and Notifications</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          We may update this Privacy Policy to reflect <strong>service changes, legal requirements, or operational improvements</strong>.
        </li>
        <li>
          Significant changes will be communicated via <u>email or dashboard notifications</u> with 30 days advance notice.
        </li>
        <li>
          Continued use of services after policy updates constitutes acceptance of the revised terms.
        </li>
      </ul>

      {/* Section 12 */}
      <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact </h2>
      <p className="mb-1"><strong>Ziplofy – DAV Business Services Pvt. Ltd.</strong></p>
     
      <p>📧 Email: <a href="mailto:support@ziplofy.in" className="text-blue-600 underline">support@ziplofy.in</a></p>
      <p>🌐 Website: <a href="https://ziplofy.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://ziplofy.in</a></p>
      <p className="mt-4 text-sm text-gray-600">
        For disputes or concerns, you may also contact your local data protection authority or regulatory body.
      </p>
    </div>
    <Footer/>
      </>
  );
};

export default Privacy;