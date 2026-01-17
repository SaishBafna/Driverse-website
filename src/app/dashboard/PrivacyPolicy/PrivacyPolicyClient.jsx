"use client";
import React, { useState } from "react";

const PrivacyPolicyClient = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div>
          <p>
            Welcome to Driverse, a platform designed to connect truck drivers,
            transportation companies, agents, mechanics, and towing service
            providers across Canada. This Privacy Policy explains how we
            collect, use, store, and protect your personal information when you
            use our application and services.
          </p>
          <p>
            By downloading, registering with, or using Driverse, you agree to
            the collection and use of information as described in this policy.
            If you do not agree with our policies, please do not use our
            application.
          </p>
        </div>
      ),
    },
    {
      id: "information-collect",
      title: "Information We Collect",
      content: (
        <div>
          <div className="font-semibold text-lg mb-2">From All Users</div>
          <p>When you register and use Driverse, we collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Account information: name, email address, phone number, password,
              and profile picture
            </li>
            <li>
              Location data: GPS location when using the app (with your
              permission)
            </li>
            <li>
              Device information: device type, operating system, IP address, and
              mobile network information
            </li>
            <li>
              Usage data: how you interact with our app, including features used
              and time spent
            </li>
            <li>
              Communication data: messages and information shared through our
              in-app chat function
            </li>
          </ul>

          <div className="font-semibold text-lg mb-2">
            Additional Information By User Type
          </div>

          <div className="font-medium text-base mb-1">For Drivers</div>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Vehicle information: license, registration, and insurance details
            </li>
            <li>
              Service request history: records of towing and mechanical
              assistance requests
            </li>
            <li>
              Voice recordings: all voice calls with agents are recorded for
              quality and safety purposes
            </li>
          </ul>

          <div className="font-medium text-base mb-1">For Companies</div>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Business information: company name, address, and business
              registration details
            </li>
            <li>
              Fleet information: vehicle details, registration numbers, and
              maintenance records
            </li>
            <li>
              Authorized personnel: information about company representatives
              using the app
            </li>
          </ul>

          <div className="font-medium text-base mb-1">For Agents</div>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Professional details: professional qualifications and experience
            </li>
            <li>Call and chat logs: records of all customer interactions</li>
            <li>Performance metrics: response times and customer feedback</li>
          </ul>

          <div className="font-medium text-base mb-1">For Mechanics</div>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Service information: types of services offered, rates, and
              availability
            </li>
            <li>
              Professional credentials: certifications, licenses, and insurance
              information
            </li>
            <li>Performance history: ratings and reviews from customers</li>
          </ul>

          <div className="font-medium text-base mb-1">For Towing Providers</div>
          <ul className="list-disc pl-6 mb-3">
            <li>
              Service information: types of services offered, rates, and
              availability
            </li>
            <li>Vehicle information: details about towing equipment</li>
            <li>Performance history: ratings and reviews from customers</li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-use",
      title: "How We Use Your Information",
      content: (
        <div>
          <p>We use your personal information to:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Provide and maintain our services</li>
            <li>Process and fulfill service requests</li>
            <li>
              Facilitate communication between users (drivers, companies,
              agents, mechanics, and towers)
            </li>
            <li>Create and update your account and profile</li>
            <li>Develop and improve our application</li>
            <li>
              Generate and display leaderboards for mechanics and towing
              services
            </li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ol>
        </div>
      ),
    },
    {
      id: "voice-call",
      title: "Voice Call Recording",
      content: (
        <div>
          <p>
            For safety and quality assurance, all voice calls between
            drivers/companies and agents through our platform are recorded.
            These recordings:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Are stored securely on our servers</li>
            <li>
              May be reviewed for quality control, training, and dispute
              resolution
            </li>
            <li>May be accessed by our authorized personnel</li>
            <li>
              May be provided to law enforcement agencies if required by law
            </li>
            <li>
              Are retained for a period of [specify retention period, e.g., 90
              days]
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "sharing",
      title: "Information Sharing",
      content: (
        <div>
          <p>We may share your information with:</p>

          <div className="font-medium text-base mb-1">Service Providers</div>
          <p className="mb-3">
            Third-party vendors who assist us in providing our services,
            including payment processors, cloud storage providers, and analytics
            services.
          </p>

          <div className="font-medium text-base mb-1">Business Partners</div>
          <p className="mb-3">
            Mechanics and towing service providers when you request their
            services.
          </p>

          <div className="font-medium text-base mb-1">Other Users</div>
          <p className="mb-3">
            When you request a service, relevant information is shared with the
            appropriate user (e.g., when a driver requests towing, necessary
            information is shared with the towing provider).
          </p>

          <div className="font-medium text-base mb-1">Legal Requirements</div>
          <p className="mb-3">
            We may disclose your information if required by law or in response
            to valid requests by public authorities.
          </p>
        </div>
      ),
    },
    {
      id: "security",
      title: "Data Security",
      content: (
        <div>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </div>
      ),
    },
    {
      id: "rights",
      title: "Your Rights",
      content: (
        <div>
          <p>Depending on your location, you may have rights to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Delete your personal information</li>
            <li>Restrict or object to processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <p className="mt-3">
            <strong>Account Deletion:</strong>
            If you wish to delete your Driverse account and associated personal
            data, please send an email from your registered email address to{" "}
            <strong>query@driverse.ai</strong> with the subject line{" "}
            <strong>“Account Deletion Request”</strong>. Our support team will
            verify your request and process the deletion within a reasonable
            timeframe.
          </p>
        </div>
      ),
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: (
        <div>
          <p>
            Our services are not intended for children under 18. We do not
            knowingly collect personal information from children under 18. If
            you believe we have collected information from a child under 18,
            please contact us immediately.
          </p>
        </div>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Links and Services",
      content: (
        <div>
          <p>
            Our application may contain links to third-party websites or
            services. We are not responsible for the privacy practices of these
            third parties. We encourage you to read the privacy policies of any
            third-party websites or services that you visit or use.
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      content: (
        <div>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the Last Updated date.
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      content: (
        <div>
          <p>
            Driverse may use cookies, web beacons, SDKs, and similar tracking
            technologies to enhance user experience, provide personalized
            content, and analyze platform performance.
          </p>
          <p className="mt-2">We may use these for:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Authentication and session management</li>
            <li>User preferences and personalization</li>
            <li>Analytics and usage insights</li>
            <li>Error reporting and performance monitoring</li>
            <li>Marketing and remarketing (if applicable)</li>
          </ul>
          <p className="mt-2">
            You may disable cookies through device or browser settings, but
            certain features may not function properly.
          </p>
        </div>
      ),
    },
    {
      id: "retention",
      title: "Data Retention",
      content: (
        <div>
          <p>
            We retain personal information only for as long as necessary to
            fulfill the purposes described in this policy, including compliance
            with legal, tax, and reporting requirements.
          </p>
          <p className="mt-3">Retention periods depend on:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Account status (active or closed)</li>
            <li>Regulatory requirements</li>
            <li>Dispute resolution or enforcement needs</li>
            <li>Operational necessities (logs, analytics, security)</li>
          </ul>
          <p>
            After retention periods expire, we securely delete or anonymize your
            data.
          </p>
        </div>
      ),
    },
    {
      id: "international",
      title: "International Data Transfers",
      content: (
        <div>
          <p>
            Driverse may store or process your data on servers located inside or
            outside Canada. These locations may have different data protection
            laws than your region.
          </p>
          <p className="mt-2">
            By using our application, you consent to the transfer of your
            information to such locations for processing and storage.
          </p>
        </div>
      ),
    },
    {
      id: "marketing",
      title: "Marketing and Communications",
      content: (
        <div>
          <p>
            We may send emails, notifications, or promotional messages related
            to our services. You can opt out of marketing communications at any
            time.
          </p>
          <p className="mt-2">
            You may not opt out of essential messages such as:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Account verification</li>
            <li>Service-related updates</li>
            <li>Security alerts</li>
            <li>Policy updates</li>
          </ul>
        </div>
      ),
    },
    {
      id: "consent",
      title: "Consent",
      content: (
        <div>
          <p>
            By using Driverse, you consent to the collection, use, and
            processing of your data as described in this Privacy Policy.
          </p>
          <p className="mt-2">Consent may be collected through:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Account registration</li>
            <li>App installation</li>
            <li>Enabling permissions (GPS, microphone, etc.)</li>
            <li>Form submissions</li>
          </ul>
          <p>
            You may withdraw certain consents through device or account
            settings.
          </p>
        </div>
      ),
    },
    {
      id: "breach",
      title: "Data Breach Notification",
      content: (
        <div>
          <p>
            While we implement strong security measures, no system is entirely
            immune. In the event of a data breach that affects your personal
            information, we will:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Investigate the incident promptly</li>
            <li>Notify affected users when legally required</li>
            <li>Provide guidance on protective steps</li>
            <li>Comply with applicable regulatory obligations</li>
          </ul>
        </div>
      ),
    },
    {
      id: "compliance",
      title: "Legal Compliance and User Protections",
      content: (
        <div>
          <p>
            Depending on your location, you may have additional legal rights
            under privacy laws such as GDPR, PIPEDA, or CCPA. While Driverse
            does not guarantee legal compliance for all regions, we strive to
            provide:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Transparency about data collection</li>
            <li>Access to your personal data</li>
            <li>Correction or deletion options</li>
            <li>Data portability upon request</li>
            <li>Ability to withdraw certain permissions</li>
          </ul>
          <p className="mt-2">
            Requests can be submitted to <strong>query@driverse.ai</strong>.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <div>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p className="my-2">
            📧 Email: <strong>query@driverse.ai</strong>
          </p>
          <p className="my-2">
            🌐 Website: <strong>https://driverse.ai</strong>
          </p>
          <p className="my-2">We will respond within a reasonable timeframe.</p>
        </div>
      ),
    },
  ];

  const toggleSection = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Title Section */}
          <div className="bg-black text-white p-4">
            <div className="text-2xl font-bold mb-1">Privacy Policy</div>
            <p className="text-gray-300 text-sm">
              Last Updated: February 27, 2025
            </p>
          </div>

          {/* Table of Contents - Visible on larger screens */}
          <div className="md:flex hidden">
            <div className="w-64 p-4 border-r border-gray-200 bg-gray-50">
              <div className="font-bold text-lg mb-3 text-gray-900">
                Contents
              </div>
              <nav>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-gray-700 hover:text-black hover:underline block py-1"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(section.id)
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-6">
                  <div className="text-xl font-bold mb-3 text-black pb-2 border-b border-gray-200">
                    {section.title}
                  </div>
                  <div className="text-gray-800">{section.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion style for mobile */}
          <div className="md:hidden block p-4">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="mb-3 border-b border-gray-200 pb-2"
              >
                <button
                  className="flex justify-between w-full py-2 px-1 text-left font-bold text-black"
                  onClick={() => toggleSection(section.id)}
                >
                  {section.title}
                  <span>{activeSection === section.id ? "−" : "+"}</span>
                </button>
                {activeSection === section.id && (
                  <div className="py-2 px-1 text-gray-800">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyClient;
