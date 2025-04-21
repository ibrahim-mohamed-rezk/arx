// components/Footer.tsx
import React from 'react';
import SVGComponent from './../../public/logo'; // Adjust the path if needed
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Branding column */}
          <div>
            <a href="#" className="inline-block">
              <SVGComponent className="h-20 w-auto" />
            </a>
            <p className="mt-4 text-gray-400">
              With 25+ years in Egypt’s real estate market, we combine innovation and trust to deliver exceptional developments.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">New Cairo – New Zayed</a>
              </li>
              <li>
                <a href="mailto:info@arx.com" className="hover:text-white transition-colors">info@arx.com</a>
              </li>
              <li>
                <a href="tel:16591" className="hover:text-white transition-colors">16591</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1 sm:col-span-1 lg:col-span-3">
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-8">
              {/* Links */}
              <div>
                <h3 className="text-lg font-semibold text-white">Links</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {['Home Page', 'About Us', 'Services', 'Blog', 'FAQs', 'Privacy Policy'].map(item => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-semibold text-white">Projects</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {['Fall City', 'UNI6', 'Golden Project', 'UNI8'].map(item => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>
                    <span className="block text-gray-400">New Cairo – New Zayed</span>
                  </li>
                  <li>
                    <a href="mailto:info@arx.com" className="hover:text-white transition-colors">info@arx.com</a>
                  </li>
                  <li>
                    <a href="tel:16591" className="hover:text-white transition-colors">16591</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ARX Developments
          </p>

          {/* Social icons */}
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
