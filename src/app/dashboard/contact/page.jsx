import React from 'react';
import { FaMapMarkerAlt, FaTwitter, FaYoutube, FaTiktok, FaFacebook, FaLinkedin, FaRegAddressCard, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex h-full pb-28 sm:pb-32   flex-col items-center w-full about text-white p-4 sm:p-10">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full sm:py-10 ">
        {/* Google Maps Embed */}
        <div className="bg-white text-black p-4 sm:p-8 lg:p-12 rounded-xl shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-sans font-bold mb-6 text-start text-gray-800">Contact Us</h2>

            <div className="space-y-6 text-left">
              <div className="flex items-center">
                <MdOutlineMailOutline className="mr-4 text-2xl text-black" />
                <a href="mailto:Query@driverse.ai" className="underline text-lg hover:text-gray-700">Query@driverse.ai</a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-4 text-2xl text-black" />
                <a href="tel:+14373839224" className="underline text-lg hover:text-gray-700">+1 437 383 9224</a>
              </div>
              <div className="flex items-start">
                <FaRegAddressCard className="mr-4 text-2xl text-black" />
                <p className="text-lg">
                835 Arbour Lake Rd NW,<br/> Calgary, AB T3G 4N2, Canada
                </p>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-start text-black">Follow Us</h3>
            <ul className="flex justify-start gap-8">
              <li>
                <a href="https://maps.app.goo.gl/gmt8wBXr4MQ9ZhZX7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  <FaMapMarkerAlt size={28} />
                </a>
              </li>
              <li>
                <a href="https://x.com/driverseai?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  <FaTwitter size={28} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@driverseai?si=QdHNMyYki5Yui28b" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  <FaYoutube size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@driverse.ai?_t=8oFdHFKimMo&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  <FaTiktok size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61561441182839&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  <FaFacebook size={28} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/driverse-inc-0a712631b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
                  <FaLinkedin size={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Container */}
       

        <div className="w-full h-64 lg:h-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.8567628266737!2d-114.2185693!3d51.1317089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371691ac99ccd13%3A0x2324ac77f1649a53!2s835%20Arbour%20Lake%20Rd%20NW%2C%20Calgary%2C%20AB%20T3G%204N2%2C%20Canada!5e1!3m2!1sen!2sin!4v1724911706122!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1724417828">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          />
        </svg>
      </div> 
    </div>
  );
};

export default Contact;


