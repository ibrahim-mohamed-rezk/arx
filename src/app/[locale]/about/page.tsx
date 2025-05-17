import React from 'react';
import Image from 'next/image';

import Hero from '/public/images/home/aboutus.png';
import VisionImg from '/public/images/home/VISION.png';
import MissionImg from '/public/images/home/MISSION.png';
import ValuesImg from '/public/images/home/VALUES.png';
import PartnersBanner from '/public/images/home/OurSuccessPartners.png';
import { useTranslations } from "next-intl";



const AboutPage: React.FC = () => {
    const t = useTranslations("about");
    const directors = [
        { name: 'Dr. Ahmed Omar', img: "https://storage.googleapis.com/furniture-hub/arx/about_us/2.webp" ,describe:t("ahmed_describe")},
        { name: 'Eng. Yasser Omar', img: "https://storage.googleapis.com/furniture-hub/arx/about_us/3%20(1).webp" ,describe:t("yasser_describe")},
        { name: 'Dr. Saad Omar', img: "https://storage.googleapis.com/furniture-hub/arx/about_us/4.webp" ,describe:t("saad_describe")},
        { name: 'Dr. Osama Omar', img: "https://storage.googleapis.com/furniture-hub/arx/about_us/1%20(1).webp" ,describe:t("osama_describe")},
    ];
    return (
        <div className="text-gray-800">
            {/* HERO */}
            <section className="relative h-[50vh] md:h-[44vh] w-full">
                <Image
                    src={Hero}
                    alt="Who We Are"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 ">
                    <h1 className="text-[clamp(1.35rem,4vw,2.25rem)] font-['Cinzel'] mb-4 text-white">
                        {t("who_we")} <span >{t("are")}</span>
                    </h1>
                    <p className="text-[clamp(0.7rem,1.35vw,1.35rem)] text-white font-['Lato'] ">
                        {t("description")}
                    </p>
                    {/* <p className="text-[clamp(0.7rem,1.35vw,1.35rem)] text-white font-['Lato']  ">
                        excellence and creating <span >exceptional experiences. ✨</span>
                    </p> */}
                </div>
            </section>

            {/* VISION / MISSION / VALUES */}
            <section className="max-w-7xl mx-auto py-16 px-8 lg:px-44 space-y-20 space-x-2">
                {[
                    {
                        title: (
                            <div className="flex items-center gap-4">
                                <hr className="w-16 border-t-2 border-gray-800" />
                                <span className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold">{t("vision_title")}</span>
                            </div>
                        ),
                        text: t("vision_description"),
                        image: "https://storage.googleapis.com/furniture-hub/arx/about_us/Vision.png",
                        reverse: false,
                    },
                    {
                        title: (
                            <div className="flex items-center justify-end gap-4">
                                <span className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold">{t("mission_title")}</span>
                                <hr className="w-16 border-t-2 border-gray-800" />
                            </div>
                        ),
                        text: t("mission_description"),
                        image: "https://storage.googleapis.com/furniture-hub/arx/about_us/mission.png",
                        reverse: true,
                    },
                    {
                        title: (
                            <div className="flex items-center gap-4">
                                <hr className="w-16 border-t-2 border-gray-800" />
                                <span className="text-[clamp(1.5rem,2.5vw,2rem)] font-semibold">{t("values_title")}</span>
                            </div>
                        ),
                        text: t("values_description"),
                        image: "https://storage.googleapis.com/furniture-hub/arx/about_us/value.png",
                        reverse: false,
                    },
                ].map(({ title, text, image, reverse }, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center md:space-x-8 md:space-x-reverse`}
                    >
                        <div className="md:w-1/2 text-center md:text-left">
                            <div className="mb-4">{title}</div>
                            <p>{text}</p>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <Image
                                src={image}
                                alt="section"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover w-full h-auto"
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* PARTNERS */}
            <section className="w-full  h-[250px] sm:h-[300px] relative overflow-hidden">
                <Image
                    src={PartnersBanner}
                    alt="Our Success Partners"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </section>

            {/* STATS */}
            <section className="py-16 px-64">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-16">
                    {/* Years of Experience */}
                    <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 relative">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 bg-blue-800 rounded-full"></div>
                        <div className="absolute mr-35 mb-55 flex flex-col items-center justify-center bg-[#035B8D] text-[##035B8D] w-35 h-35 sm:w-40 sm:h-40 rounded-full border border-[##035B8D]">
                            {/* <span className="text-[clamp(2rem,5vw,3rem)] font-bold text-blue-800">+25</span>
                            <p className="text-sm text-gray-600">Years Of Experience</p> */}
                        </div>
                        <div className="absolute flex flex-col items-center justify-center bg-white w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-gray-200">
                            <span className="text-[clamp(2rem,5vw,3rem)] font-['Cinzel'] text-blue-800">+20</span>
                            <p className="text-sm text-gray-600 font-['Lato']">Years Of Experience</p>
                        </div>
                    </div>
                    {/* Other Stats */}
                    <div className="w-full lg:w-1/2 lg:grid grid-cols-1 gap-8 text-center justify-center items-center flex">
                        <div className="flex flex-col items-center">
                            <span className="text-[clamp(2rem,4vw,3rem)] font-['Cinzel'] text-[##024064]">
                                2.5K<span className="text-4xl text-yellow-500 pb-50 mb-50">+</span>
                            </span>
                            <span className="text-sm text-[##060B0E] mt-1">Units Sold</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[clamp(2rem,4vw,3rem)] font-['Cinzel'] text-[##024064]">
                                170<span className="text-4xl text-yellow-500 pb-50 mb-50">+</span>
                            </span>
                            <span className="text-sm text-[##060B0E] mt-1">Total Constructions</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[clamp(2rem,4vw,3rem)] font-['Cinzel'] text-[##024064]">
                                2K<span className="text-4xl text-yellow-500 pb-50 mb-50">+</span>
                            </span>
                            <span className="text-sm text-[##060B0E] mt-1">Customers Number</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOARD OF DIRECTORS */}
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-[450px] mx-auto text-center mb-12 font-['Cinzel']">
                    <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold">
                        Chairman Of The Board Of Directors Speech
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-10 items-center text-center">
                    {directors.map((dir, i) => (
                        <div key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={dir.img}
                                alt={dir.name}
                                width={300}
                                height={800}
                                className="w-full h-auto object-cover object-center"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-2">{dir.name}</h3>
                                <p className="text-sm text-gray-600">
                                    {dir.describe}
                           
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;