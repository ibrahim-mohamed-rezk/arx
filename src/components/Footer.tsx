import React from 'react';
import { Link } from "@/i18n/routing";
import SVGComponent from './../../public/logo';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="relative"> {/* spacing top for newsletter */}

      {/* Newsletter Section Floating Above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-7xl lg:px-34">
        <div className="bg-gradient-to-b from-[#0C0E11] to-[#1A1C1F] rounded-lg p-6 flex flex-col md:flex-row justify-between items-center shadow-lg">
          <div className=" space-y-5 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-white">Join Our Newsletter Now</h3>
            <p className="text-sm text-gray-400">Subscribe to our weekly newsletter and receive updates via Email</p>
          </div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email to Subscribe"
              className="px-4 py-2 rounded-l-md text-black bg-white w-full md:w-72 focus:outline-none"
            />
            <button type="submit" className="bg-[#0053F0] hover:bg-blue-700 px-5 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-gradient-to-b from-[#0C0E11] to-[#1A1C1F] text-gray-300 pt-28 pb-10 lg:px-44">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {/* Logo + Description */}
          <div>
            <SVGComponent className="h-20 w-auto mb-2" />
            <p className="text-sm text-gray-400 leading-6">
              With 25+ years in Egypt’s real estate market, ARX delivers exceptional services.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-gray-400">
              <li>📍 New Cairo - New Damietta</li>
              <li>📧 info@arx-eg.com</li>
              <li>📞 16591</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home Page</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4">Projects</h4>
            <ul className="space-y-2 text-sm">
              {['Full City', 'UNI6', 'Golden Project', 'UNI8'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              {['Full City', 'UNI6', 'Golden Project', 'UNI8'].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2c2e31] mt-10 pt-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ARX Developments</p>
            <div className="flex space-x-4 mt-3 sm:mt-0 text-gray-400">
              <a href="#"><FaFacebookF size={16} /></a>
              <a href="#"><FaTwitter size={16} /></a>
              <a href="#"><FaInstagram size={16} /></a>
              <a href="#"><FaLinkedinIn size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
