"use client"; 

import { useEffect, useState } from "react";
import {ChevronUp, Plus } from "lucide-react";
import { AxiosHeaders } from "axios";
import { getData } from "@/libs/axios/server";
import { useLocale, useTranslations } from "next-intl";
import { FQAType } from "@/libs/types/types";
import { Link } from "@/i18n/routing";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const locale = useLocale();
  const [fqas, setFqas] = useState<FQAType[]>([]);
  const t = useTranslations("fqas");

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    const feachData = async () => {
      try {
        const response = await getData(
          "faqs",
          {},
          new AxiosHeaders({
            lang: locale,
          })
        );
        setFqas(response.data);
      } catch (error) {
        throw error;
      }
    };

    feachData();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
          {/* Header Section */}
          <div className="flex border-s-2 ps-4 border-[#000] flex-col items-start text-start">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "Cinzel" }}
            >
              {t("frequently asked questions")}
            </h1>
            <p 
              className="text-lg text-start md:text-xl text-gray-600 max-w-3xl"
              style={{ fontFamily: "Lato" }}
            >
              {t("got questions? we've got answers!")}
              <br /> {t("browse our faqs to find everything you need to know")}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 md:space-y-6">
            {fqas.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-4 md:p-6 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center gap-4"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3
                    className="text-lg md:text-xl font-bold text-black flex-1"
                    style={{ fontFamily: "Lato" }}
                  >
                    {item.request}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp size={24} className="text-blue-600" />
                    ) : (
                      <Plus size={24} className="text-blue-600" />
                    )}
                  </div>
                </div>

                {openIndex === index && (
                  <div
                    className="mt-4 text-gray-700 text-base md:text-lg"
                    style={{ fontFamily: "Lato" }}
                  >
                    {item.response}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2
              className="text-2xl md:text-3xl text-blue-600 font-bold uppercase mb-4"
              style={{ fontFamily: "Lato" }}
            >
              {t("didn't find an answer to your question?")}
            </h2>
            <p
              className="text-lg md:text-xl text-gray-800 font-bold mb-8"
              style={{ fontFamily: "Lato" }}
            >
              {t("get in touch with us for details on additional services")}
            </p>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
              {t("contact us")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
