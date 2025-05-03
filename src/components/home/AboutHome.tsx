import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import about from '../../../public/images/home/about.png';
import SVGComponent from '../../../public/logo';
import Vision from '../../../public/cityscape-svgrepo-com.svg';
import Mission from '../../../public/real-estate-investment-svgrepo-com.svg';
import Values from '../../../public/values.svg';

const AboutHome: NextPage = () => {
  return (
    <div className="w-full lg:w-[75%] mx-auto bg-white font-['lato']">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side with image */}
          <div className="md:w-1/2">
            <div className="relative h-96 justify-end flex">
              <Image
                src={about}
                alt="Luxury Real Estate Building"
                width={300}
                height={40}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 shadow left-6 bg-[#F1F3F3] p-4 rounded-lg">
                <SVGComponent className="h-20 w-auto mb-2" />
              </div>
            </div>
          </div>

          {/* Right side with content */}
          <div className="md:w-2/3">
            <div className="text-sm  text-[#035B8D] mb-2">
              ABOUT US
            </div>
            <h1 className="text-4xl font-bold  text-gray-900 mb-6">
              REDEFINING LUXURY REAL ESTATE WITH 25+ YEARS OF EXCELLENCE.
            </h1>

            {/* Three columns section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/** Vision */}
              <div className="flex flex-col items-start">
                <Image
                  src={Vision}
                  alt="Vision Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-fluid-lg  mb-2">Vision</h3>
                <p className="text-fluid-base text-gray-600">
                  Enhancing communities through innovative real estate
                  projects. Selective creativity with advanced design principles
                  to ensure client investment.
                </p>
              </div>

              {/** Mission */}
              <div className="flex flex-col items-start">
                <Image
                  src={Mission}
                  alt="Mission Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-fluid-lg  mb-2">Mission</h3>
                <p className="text-fluid-base text-gray-600">
                  We curate core assets that allow sustainable and sophisticated
                  urban developments beyond conventional market trends.
                </p>
              </div>

              {/** Values */}
              <div className="flex flex-col items-start">
                <Image
                  src={Values}
                  alt="Values Icon"
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-fluid-lg  mb-2">Values</h3>
                <p className="text-fluid-base text-gray-600">
                  Transparency. We uphold honesty and clarity in all our
                  dealings. Respect. We foster a culture of mutual respect and
                  integrity.
                </p>
              </div>
            </div>

            {/* Learn More button */}
            <div className="mt-8 flex justify-end">
              <Link href="/about" passHref>
                <span className="inline-flex items-center text-fluid-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
                  Learn More
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
