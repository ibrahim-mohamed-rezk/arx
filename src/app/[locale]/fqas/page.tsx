"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/routing";

const FAQItem = ({ question }: { question: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="self-stretch px-4 sm:px-6 py-6 sm:py-9 bg-light-gray rounded-2xl"
    >
      <div 
        className="flex justify-between items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-black text-base sm:text-lg md:text-xl font-bold font-['Lato'] capitalize leading-normal sm:leading-10 tracking-wide">
          {question}
        </div>
        <div className="flex-shrink-0 w-6 h-6 relative">
          <div className="w-6 h-6 absolute overflow-hidden">
            <div className={`w-3.5 h-3.5 left-[5px] top-[5px] absolute bg-actions-primary transition-transform ${isOpen ? 'rotate-45' : ''}`} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 text-gray-700 pl-0 sm:pl-6">
          This is the answer to your question. We provide detailed information to help you understand our services better.
        </div>
      )}
    </div>
  );
};

const FAQsPage = () => {
  const faqQuestions = [
    "How Can I Find The Best Real Estate Agent To Help Me Buy Or Sell a Property?",
    "What Documents Do I Need When Applying For A Mortgage?",
    "How Long Does The Closing Process Typically Take?",
    "What Are The Benefits Of Working With A Real Estate Developer?",
    "How Do I Know If A Property Is A Good Investment?"
  ];

  return (
    <div className="w-full max-w-full flex flex-col justify-start items-center py-12 px-4">
      <div className="w-full max-w-7xl flex flex-col justify-start items-center gap-12 md:gap-24">
        <div className="w-full max-w-5xl flex flex-col justify-start items-center gap-12 md:gap-24">
          <div className="w-full flex flex-col justify-start items-start gap-12 md:gap-24">
            <div className="w-full flex flex-col md:flex-row justify-start items-center gap-4">
              <div className="hidden md:block w-20 h-0 origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-black" />
              <div className="w-full max-w-3xl flex flex-col justify-start items-center md:items-start gap-6">
                <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold font-['Cinzel'] leading-tight md:leading-[64px] tracking-tight">
                  Frequently Asked Questions
                </h1>
                <p className="text-center md:text-left text-dark-gray text-lg md:text-xl font-bold font-['Lato'] capitalize leading-relaxed md:leading-10 tracking-wide">
                  Got questions? We&apos;ve got answers!
                  <br /> Browse our FAQs to find everything you need to know.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-8">
              {faqQuestions.map((question, index) => (
                <FAQItem key={index} question={question} />
              ))}
            </div>
          </div>
          <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-6">
            <div className="w-full flex flex-col justify-start items-center gap-4">
              <h2 className="text-center text-2xl md:text-3xl font-bold font-['Lato'] uppercase leading-tight md:leading-10 tracking-tight text-actions-primary">
                Didn&apos;t find an answer to your question?
              </h2>
              <p className="text-center text-lg md:text-xl font-bold font-['Lato'] capitalize leading-relaxed md:leading-10 tracking-wide text-text-text-primary-2">
                Get in touch with us for details on additional services.
              </p>
            </div>
            <Link href="/contact">
              <button className="w-40 h-12 p-2.5 bg-actions-primary rounded-lg outline outline-1 outline-offset-[-1px] outline-actions-primary flex justify-center items-center gap-2.5 hover:bg-blue-700 transition-colors">
                <span className="text-center text-white text-base font-bold font-['Lato'] capitalize leading-none tracking-wide">
                  Contact Us
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
