import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import SVGComponent from '../../../public/logo';
import Vision from '../../../public/cityscape-svgrepo-com.svg';
import Mission from '../../../public/real-estate-investment-svgrepo-com.svg';
import Values from '../../../public/values.svg';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const AboutHome: NextPage = () => {
  const t = useTranslations("about");
  return (
    <div className="w-full lg:w-[75%] mx-auto bg-white font-['lato']">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side with image */}
          <div className="md:w-1/2">
            <div className="relative h-110 justify-end flex">
            <img
              src="https://storage.googleapis.com/furniture-hub/arx/about_us/About%20us%20(1).webp"
              alt="Luxury Real Estate Building"
              width="300"
              height="40"
              className="rounded-lg shadow-lg "
            />

              <div className="absolute h-40 -bottom-6 shadow left-12 bg-[#F1F3F3] p-4 rounded-lg">
                <SVGComponent className="h-25 w-20 mb-2" />
              </div>
            </div>
          </div>

          {/* Right side with content */}
          <div className="md:w-2/3">
            <div className="text-lg font-bold text-[#035B8D] mb-2">
              {t("title")}
            </div>
            <h1 className="text-4xl font-bold font-[Cinzel] text-gray-900 mb-6">
              {t("description")}
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
                <h3 className="text-fluid-lg font-bold  mb-2">{t("vision_title")}</h3>
                <p className="text-fluid-base text-gray-600">
                  {t("vision_description")}

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
                <h3 className="text-fluid-lg font-bold  mb-2">{t("mission_title")}</h3>
                <p className="text-fluid-base text-gray-600">
                  {t("mission_description")}
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
                <h3 className="text-fluid-lg font-bold  mb-2">{t("values_title")}</h3>
                <p className="text-fluid-base text-gray-600">
                  {t("values_description")}
                </p>
              </div>
            </div>

            {/* Learn More button */}
            <div className="mt-8 flex justify-end">
              <Link href="/about">
                <span className="inline-flex  items-center text-fluid-sm font-medium text-[#035B8D] hover:text-blue-800 cursor-pointer">
                  {t("learn_more")}
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
