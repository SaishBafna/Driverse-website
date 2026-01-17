"use client";
import React, { useState } from "react";

const TermsConditionsClient = () => {
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
            providers across Canada.
          </p>
          <p>
            These Terms & Conditions (“Terms”) govern your use of our mobile
            application, platform, and services. By registering or using
            Driverse, you agree to these Terms. If you do not agree, please do
            not use our application or services.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: (
        <div>
          <p>To use Driverse, you must:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Be at least 18 years old</li>
            <li>Have the legal capacity to enter into a binding contract</li>
            <li>Provide accurate registration and profile information</li>
          </ul>
          <p>
            If you are registering on behalf of a company, you confirm that you
            are authorized to bind that company to these Terms.
          </p>
        </div>
      ),
    },
    {
      id: "user-accounts",
      title: "User Accounts",
      content: (
        <div>
          <p>To access certain features, you are required to create an account.</p>
          <p className="mt-3 font-semibold">You agree to:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Provide accurate and complete information</li>
            <li>Keep your login credentials secure</li>
            <li>Notify us of any unauthorized account access</li>
          </ul>
          <p>
            You are responsible for all activities that occur under your
            account.
          </p>
        </div>
      ),
    },
    {
      id: "services",
      title: "Platform Services",
      content: (
        <div>
          <p>Driverse functions as a connection platform between:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Drivers and towing providers</li>
            <li>Drivers and mechanics</li>
            <li>Drivers and agents</li>
            <li>Drivers and companies</li>
          </ul>
          <p>
            Driverse does not provide towing or mechanical services directly and
            is not responsible for the quality, safety, or completion of any
            services performed by third parties.
          </p>
        </div>
      ),
    },
    {
      id: "payments",
      title: "Payments & Transactions",
      content: (
        <div>
          <p>
            Payment terms may vary depending on the services and parties
            involved. When making payments through Driverse, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Pay all applicable fees and charges</li>
            <li>Provide valid payment details if required</li>
            <li>Comply with provider-specific payment terms</li>
          </ul>
          <p>Refunds are not guaranteed and are handled on a case-by-case basis.</p>
        </div>
      ),
    },
    {
      id: "user-conduct",
      title: "User Responsibilities & Conduct",
      content: (
        <div>
          <p>While using Driverse, you agree NOT to:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Violate any laws or regulations</li>
            <li>Use false identities or provide misleading information</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Interfere with platform operations or security</li>
          </ul>
        </div>
      ),
    },
    {
      id: "recording",
      title: "Call Recording & Communication",
      content: (
        <div>
          <p>
            Driverse may record voice calls between drivers, companies, and
            agents for quality, safety, and dispute resolution purposes.
          </p>
          <p className="mt-2">
            By using communication features within the platform, you consent to
            such recordings as explained in our Privacy Policy.
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      title: "Account Suspension & Termination",
      content: (
        <div>
          <p>We reserve the right to suspend or terminate accounts that:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Violate these Terms</li>
            <li>Abuse platform services</li>
            <li>Engage in fraudulent or illegal activities</li>
          </ul>
          <p>Users may request account deletion by contacting query@driverse.ai.</p>
        </div>
      ),
    },
    {
      id: "disclaimer",
      title: "Disclaimers",
      content: (
        <div>
          <p>
            Driverse is provided on an “as is” and “as available” basis. We do
            not guarantee that the platform will be:
          </p>
          <ul className="list-disc pl-6 mb-3">
            <li>Free from errors or downtime</li>
            <li>Suitable for all purposes</li>
            <li>Continuously available</li>
          </ul>
          <p>
            Driverse is not liable for any losses or damages arising from user
            interactions or third-party services.
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: (
        <div>
          <p>
            We may update these Terms from time to time. Continued use of the
            platform after updates constitutes acceptance of the revised Terms.
          </p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "Contact Information",
      content: (
        <div>
          <p>
            If you have questions or concerns regarding these Terms, please
            contact us at:
          </p>
          <p className="mt-2 font-semibold">Email: query@driverse.ai</p>
        </div>
      ),
    },
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-black text-white p-4">
            <div className="text-2xl font-bold mb-1">Terms & Conditions</div>
            <p className="text-gray-300 text-sm">Last Updated: February 27, 2025</p>
          </div>

          {/* Desktop */}
          <div className="md:flex hidden">
            <div className="w-64 p-4 border-r border-gray-200 bg-gray-50">
              <div className="font-bold text-lg mb-3 text-gray-900">Contents</div>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-gray-700 hover:text-black hover:underline block py-1"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(section.id).scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

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

          {/* Mobile */}
          <div className="md:hidden block p-4">
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-3 border-b border-gray-200 pb-2">
                <button
                  className="flex justify-between w-full py-2 px-1 text-left font-bold text-black"
                  onClick={() => toggleSection(section.id)}
                >
                  {section.title}
                  <span>{activeSection === section.id ? "−" : "+"}</span>
                </button>
                {activeSection === section.id && (
                  <div className="py-2 px-1 text-gray-800">{section.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsConditionsClient;
