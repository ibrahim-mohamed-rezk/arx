"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("En");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <header className="w-full z-50 fixed top-0 bg-black ">
      <div className="w-full px-[10px] lg:px-[clamp(10px,16.614582vw,1000px)]">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={104}
              height={48}
              className="h-12 w-auto"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="flex items-center p-2 text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((item) => (
              <div key={item.href}>
                <Link
                  href={`${item.href}`}
                  className="text-white font-bold font-['Lato'] capitalize tracking-wide px-3 py-2 hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Language selector */}
          <div className="hidden md:flex items-center relative">
            <button
              className="flex items-center text-white font-bold font-['Lato'] text-sm"
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              {language}
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {isLangMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg overflow-hidden z-50">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange("En")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange("Ar")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Arabic
                    </button>
                    <button
                      onClick={() => handleLanguageChange("Fr")}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      French
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - slides from right */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-sky-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-white"
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4 py-2">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={`${item.href}`}
                className="text-white font-bold font-['Lato'] capitalize tracking-wide py-2 hover:text-gray-300 transition-colors"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 border-t border-sky-700 pt-4">
            <div className="flex items-center text-white font-bold font-['Lato'] text-sm mb-2">
              Language
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleLanguageChange("En")}
                className={`text-left py-2 text-sm ${
                  language === "En" ? "text-white" : "text-gray-300"
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange("Ar")}
                className={`text-left py-2 text-sm ${
                  language === "Ar" ? "text-white" : "text-gray-300"
                }`}
              >
                Arabic
              </button>
              <button
                onClick={() => handleLanguageChange("Fr")}
                className={`text-left py-2 text-sm ${
                  language === "Fr" ? "text-white" : "text-gray-300"
                }`}
              >
                French
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed w-screen h-screen inset-0 bg-[#0000005e] bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
