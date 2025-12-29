"use client"
import React, { useState } from 'react';

const PrivacyPolicyClient = () => {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        {
            id: 'introduction',
            title: 'Introduction',
            content: (
                <div>
                    <p>Welcome to Driverse, a platform designed to connect truck drivers, transportation companies, agents, mechanics, and towing service providers across Canada. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our application and services.</p>
                    <p>By downloading, registering with, or using Driverse, you agree to the collection and use of information as described in this policy. If you do not agree with our policies, please do not use our application.</p>
                </div>
            )
        },
        {
            id: 'information-collect',
            title: 'Information We Collect',
            content: (
                <div>
                    <div className="font-semibold text-lg mb-2">From All Users</div>
                    <p>When you register and use Driverse, we collect:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Account information: name, email address, phone number, password, and profile picture</li>
                        <li>Location data: GPS location when using the app (with your permission)</li>
                        <li>Device information: device type, operating system, IP address, and mobile network information</li>
                        <li>Usage data: how you interact with our app, including features used and time spent</li>
                        <li>Communication data: messages and information shared through our in-app chat function</li>
                    </ul>

                    <div className="font-semibold text-lg mb-2">Additional Information By User Type</div>

                    <div className="font-medium text-base mb-1">For Drivers</div>
                    <ul className="list-disc pl-6 mb-3">
                        <li>Vehicle information: license, registration, and insurance details</li>
                        <li>Service request history: records of towing and mechanical assistance requests</li>
                        <li>Voice recordings: all voice calls with agents are recorded for quality and safety purposes</li>
                    </ul>

                    <div className="font-medium text-base mb-1">For Companies</div>
                    <ul className="list-disc pl-6 mb-3">
                        <li>Business information: company name, address, and business registration details</li>
                        <li>Fleet information: vehicle details, registration numbers, and maintenance records</li>
                        <li>Authorized personnel: information about company representatives using the app</li>
                    </ul>

                    <div className="font-medium text-base mb-1">For Agents</div>
                    <ul className="list-disc pl-6 mb-3">
                        <li>Professional details: professional qualifications and experience</li>
                        <li>Call and chat logs: records of all customer interactions</li>
                        <li>Performance metrics: response times and customer feedback</li>
                    </ul>

                    <div className="font-medium text-base mb-1">For Mechanics</div>
                    <ul className="list-disc pl-6 mb-3">
                        <li>Service information: types of services offered, rates, and availability</li>
                        <li>Professional credentials: certifications, licenses, and insurance information</li>
                        <li>Performance history: ratings and reviews from customers</li>
                    </ul>

                    <div className="font-medium text-base mb-1">For Towing Providers</div>
                    <ul className="list-disc pl-6 mb-3">
                        <li>Service information: types of services offered, rates, and availability</li>
                        <li>Vehicle information: details about towing equipment</li>
                        <li>Performance history: ratings and reviews from customers</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'how-use',
            title: 'How We Use Your Information',
            content: (
                <div>
                    <p>We use your personal information to:</p>
                    <ol className="list-decimal pl-6 mb-4">
                        <li>Provide and maintain our services</li>
                        <li>Process and fulfill service requests</li>
                        <li>Facilitate communication between users (drivers, companies, agents, mechanics, and towers)</li>
                        <li>Create and update your account and profile</li>
                        <li>Develop and improve our application</li>
                        <li>Generate and display leaderboards for mechanics and towing services</li>
                        <li>Monitor and analyze usage patterns and trends</li>
                        <li>Detect, prevent, and address technical issues</li>
                        <li>Comply with legal obligations</li>
                    </ol>
                </div>
            )
        },
        {
            id: 'voice-call',
            title: 'Voice Call Recording',
            content: (
                <div>
                    <p>For safety and quality assurance, all voice calls between drivers/companies and agents through our platform are recorded. These recordings:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Are stored securely on our servers</li>
                        <li>May be reviewed for quality control, training, and dispute resolution</li>
                        <li>May be accessed by our authorized personnel</li>
                        <li>May be provided to law enforcement agencies if required by law</li>
                        <li>Are retained for a period of [specify retention period, e.g., 90 days]</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'sharing',
            title: 'Information Sharing',
            content: (
                <div>
                    <p>We may share your information with:</p>

                    <div className="font-medium text-base mb-1">Service Providers</div>
                    <p className="mb-3">Third-party vendors who assist us in providing our services, including payment processors, cloud storage providers, and analytics services.</p>

                    <div className="font-medium text-base mb-1">Business Partners</div>
                    <p className="mb-3">Mechanics and towing service providers when you request their services.</p>

                    <div className="font-medium text-base mb-1">Other Users</div>
                    <p className="mb-3">When you request a service, relevant information is shared with the appropriate user (e.g., when a driver requests towing, necessary information is shared with the towing provider).</p>

                    <div className="font-medium text-base mb-1">Legal Requirements</div>
                    <p className="mb-3">We may disclose your information if required by law or in response to valid requests by public authorities.</p>
                </div>
            )
        },
        {
            id: 'security',
            title: 'Data Security',
            content: (
                <div>
                    <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
            )
        },
        {
            id: 'rights',
            title: 'Your Rights',
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
                    <p>To exercise these rights, please contact us at [contact email].</p>
                </div>
            )
        },
        {
            id: 'children',
            title: 'Children\'s Privacy',
            content: (
                <div>
                    <p>Our services are not intended for children under 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.</p>
                </div>
            )
        },
        {
            id: 'third-party',
            title: 'Third-Party Links and Services',
            content: (
                <div>
                    <p>Our application may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party websites or services that you visit or use.</p>
                </div>
            )
        },
        {
            id: 'changes',
            title: 'Changes to This Privacy Policy',
            content: (
                <div>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last Updated date.</p>
                </div>
            )
        },
        // {
        //     id: 'contact',
        //     title: 'Contact Us',
        //     content: (
        //         <div>
        //             <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        //             <p className="my-2">[Company Name]</p>
        //             <p className="my-2">[Address]</p>
        //             <p className="my-2">[Email]</p>
        //             <p className="my-2">[Phone]</p>
        //         </div>
        //     )
        // }
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
                        <p className="text-gray-300 text-sm">Last Updated: February 27, 2025</p>
                    </div>

                    {/* Table of Contents - Visible on larger screens */}
                    <div className="md:flex hidden">
                        <div className="w-64 p-4 border-r border-gray-200 bg-gray-50">
                            <div className="font-bold text-lg mb-3 text-gray-900">Contents</div>
                            <nav>
                                <ul className="space-y-1">
                                    {sections.map((section) => (
                                        <li key={section.id}>
                                            <a
                                                href={`#${section.id}`}
                                                className="text-gray-700 hover:text-black hover:underline block py-1"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
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
                                    <div className="text-gray-800">
                                        {section.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Accordion style for mobile */}
                    <div className="md:hidden block p-4">
                        {sections.map((section) => (
                            <div key={section.id} id={section.id} className="mb-3 border-b border-gray-200 pb-2">
                                <button
                                    className="flex justify-between w-full py-2 px-1 text-left font-bold text-black"
                                    onClick={() => toggleSection(section.id)}
                                >
                                    {section.title}
                                    <span>{activeSection === section.id ? '−' : '+'}</span>
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
