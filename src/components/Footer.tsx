"use client";
import React, { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";
import { ProjectType } from "@/libs/types/types";

const Footer: React.FC = () => {
  const t = useTranslations("header");
  const t2 = useTranslations("subscribe");
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const locale  = useLocale();

  useEffect(() => {
    const feachData = async () => {
      try {
        const response = await getData("properties", {}, new AxiosHeaders({
          lang: locale
        }));
        setProjects(response.data);
      } catch (error) {
        throw error;
      }
    };

    feachData();
  }, []);

  return (
    <div className="relative footer">
      {" "}
      {/* spacing top for newsletter */}
      {/* Newsletter Section Floating Above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-7xl lg:px-34">
        <div className="bg-gradient-to-b from-[#0C0E11] via-[#1A1C1F] to-[#2c2e31] rounded-lg p-6 flex flex-col md:flex-row justify-between items-center shadow-lg">
          <div className=" space-y-5 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-[Cinzel] font-bold text-white">
              {t2("join_us")}
            </h3>
            <p className="text-sm text-gray-400">
              {t2("subscribe_description")}
            </p>
          </div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder={t2("placeholder")}
              className="px-4 py-2 rounded-l-md text-black bg-white w-full md:w-72 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#E1A12B] hover:bg-blue-700 px-5 py-2 rounded-r-md text-white"
            >
              {t2("subscribe")}
            </button>
          </form>
        </div>
      </div>
      {/* Footer Content */}
      <footer className="bg-gradient-to-b from-[#0C0E11] via-[#1A1C1F] to-[#2c2e31] text-gray-300 pt-28 pb-10 lg:px-44">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {/* Logo + Description */}
          <div>
            <Image
              src="https://storage.googleapis.com/furniture-hub/arx/settings/ARX%20Logo%20(1).png"
              alt="ARX Logo"
              width={104}
              height={48}
              className="h-20 w-auto mb-2"
            />
            <p className="text-sm text-gray-400 leading-6">
              {t("footerDescription")}
            </p>
            <ul className="mt-4 space-y-1 text-sm text-gray-400">
              <li></li>
              <li>
                <a href="https://maps.google.com/?q=30.026306,31.489864">
                  📍 New Cairo-st 90, Top 90 Building
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=31.438272,31.664551">
                  📍 New Damietta, Third District, Street 15
                </a>
              </li>
              <li>
                <a href="#">📍 Mansoura</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("links")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link href="/fqas" className="hover:text-white transition">
                  {t("FAQs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              <Link href="/projects">{t("projects")}</Link>
            </h4>
            <ul className="space-y-2 text-sm">
              {projects.map((item) => (
                <li key={item.id}>
                  <a href="#" className="hover:text-white transition">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              <Link href="/contact">{t("contact")}</Link>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@arxeg.com"
                  className="hover:text-white transition"
                >
                  📧 info@arxeg.com
                </a>
                <br />
                <a href="tel:16591" className="hover:text-white transition">
                  📞 16591
                </a>
                <br />
                <a
                  href="https://wa.me/201001703888"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <FaWhatsapp size={16} /> 01001703888
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2c2e31] mt-10 pt-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} ARX Developments
            </p>
            <div className="flex space-x-4 mt-3 sm:mt-0 text-gray-400">
              <a href="https://www.facebook.com/Arxeg/">
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.instagram.com/arx_development/">
                <FaInstagram size={16} />
              </a>
              <a href="https://eg.linkedin.com/company/arxdevelopment">
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
