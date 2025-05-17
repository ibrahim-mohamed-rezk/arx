"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import mapImage from "../../../../../public/images/home/c2b5e402a0df6277694731f6bd60841b5c331ca9.jpg";
import heroSwiper from "../../../../../public/images/home/aa776c3816e1d51c033677ecbeb05bb997177ae0.png";
import svg from "../../../../../public/images/home/452d25274c85a25c3f47bbc5a16dc095fbf48716.gif";
import { getData } from "@/libs/axios/server";
import { AxiosHeaders } from "axios";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { ProjectType } from "@/libs/types/types";
import ContactForm from "./components/ContactForm";
import PhotosSwiper from "./components/PhotosSwiper";

interface TabContent {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface FeatureTabContent {
  id: string;
  name: string;
  isActive: boolean;
}

const ProjectPage: React.FC = () => {
  // Create array of hero swiper images (repeating the same image as requested)
  const backgroundImages = [heroSwiper, heroSwiper, heroSwiper];
  const locale = useLocale();
  const { id } = useParams();
  const [projectData, setProjectData] = useState<ProjectType | null>(null);
  const [openForm, setOpenForm] = useState(false);
  const [activeFloor, setActiveFloor] = useState(
    projectData?.property_payment_plans[0].id || 1
  );
  // Create photo gallery images
  const photoGalleryImages = Array(6).fill("https://placehold.co/600x400");

  // Create video gallery images
  const videoGalleryImages = Array(4).fill("https://placehold.co/600x400");

  // State for vertical swiper
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // State for photo swiper

  // State for video swiper
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  // State for tabs
  const [activeTab, setActiveTab] = useState("features");
  const [activeFeatureTab, setActiveFeatureTab] = useState("Overview");

  // Feature tabs data
  const featureTabs: FeatureTabContent[] = [
    { id: "Overview", name: "Overview", isActive: true },
    { id: "Details", name: "Details", isActive: false },
    { id: "Amenities", name: "Amenities", isActive: false },
    { id: "OutdoorFeatures", name: "Outdoor Features", isActive: false },
  ];

  // featch project data
  useEffect(() => {
    const feachData = async () => {
      try {
        const response = await getData(
          `property/${id}`,
          {},
          new AxiosHeaders({
            lang: locale,
          })
        );
        setProjectData(response.data);
      } catch (error) {
        throw error;
      }
    };

    feachData();
  });

  // Autoplay functionality for all swipers
  useEffect(() => {
    // Hero swiper autoplay
    const heroInterval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) =>
          prev === backgroundImages.length - 1 ? 0 : prev + 1
        );
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);

    // Video swiper autoplay
    const videoInterval = setInterval(() => {
      if (activeTab === "videos") {
        setCurrentVideoSlide((prev) =>
          prev === videoGalleryImages.length - 1 ? 0 : prev + 1
        );
      }
    }, 6000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(videoInterval);
    };
  }, [
    currentSlide,
    isTransitioning,
    backgroundImages.length,
    activeTab,
    photoGalleryImages.length,
    videoGalleryImages.length,
  ]);

  // Handle swiper touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isTransitioning) {
      if (touchStart - touchEnd > 75) {
        // Swipe up
        handleNextSlide();
      } else if (touchStart - touchEnd < -75) {
        // Swipe down
        handlePrevSlide();
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleNextSlide = () => {
    if (currentSlide < backgroundImages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle wheel scrolling for vertical swiper
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      handleNextSlide();
    } else {
      handlePrevSlide();
    }
  };

  // Tabs data with content
  const tabs: TabContent[] = [
    {
      id: "features",
      name: "features",
      icon: (
        <svg
          width="24"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7004 4.79981H15.3004V2.3998C15.2996 1.9758 15.1308 1.56861 14.8308 1.26861C14.5316 0.969405 14.1244 0.800605 13.7004 0.799805H2.50039C2.07639 0.800605 1.66919 0.968605 1.36919 1.26861C1.06919 1.56861 0.901191 1.9758 0.900391 2.3998V21.5998C0.901191 22.0238 1.06999 22.431 1.36919 22.7302C1.66919 23.0302 2.07639 23.199 2.50039 23.1998H21.7004C22.1244 23.199 22.5308 23.0302 22.8308 22.7302C23.1308 22.4302 23.2996 22.0238 23.3004 21.5998V6.39981C23.2996 5.97581 23.1308 5.56861 22.8308 5.26861C22.5316 4.96941 22.1244 4.8006 21.7004 4.79981ZM9.70039 21.5998H6.50039V17.5998H9.70039V21.5998ZM13.7004 21.5998H11.3004V17.5998C11.2996 17.1758 11.1308 16.7686 10.8308 16.4694C10.5316 16.1694 10.1244 16.0006 9.70039 15.9998H6.50039C6.07639 16.0006 5.66919 16.1694 5.36919 16.4694C5.06999 16.7686 4.90119 17.1758 4.90039 17.5998V21.5998H2.50039L2.49959 2.3998H13.7004V21.5998ZM21.7004 21.5998H15.3004V6.39981H21.7004V21.5998ZM19.3004 11.9998C19.3004 12.1582 19.2532 12.3126 19.1652 12.4446C19.078 12.5758 18.9524 12.6782 18.8068 12.739C18.6604 12.7998 18.4996 12.815 18.3444 12.7846C18.1892 12.7534 18.0468 12.6774 17.9348 12.5654C17.8228 12.4534 17.7468 12.311 17.7156 12.1558C17.6852 12.0006 17.7004 11.8398 17.7612 11.6934C17.822 11.5478 17.9244 11.4222 18.0556 11.335C18.1876 11.247 18.342 11.1998 18.5004 11.1998C18.7124 11.1998 18.9164 11.2838 19.066 11.4342C19.2164 11.5838 19.3004 11.7878 19.3004 11.9998ZM17.7004 8.79981C17.7004 8.64141 17.7476 8.48701 17.8356 8.35501C17.9228 8.22381 18.0484 8.12141 18.194 8.06061C18.3404 7.99981 18.5012 7.9846 18.6564 8.015C18.8116 8.0462 18.954 8.1222 19.066 8.2342C19.178 8.3462 19.254 8.48861 19.2852 8.64381C19.3156 8.79901 19.3004 8.9598 19.2396 9.1062C19.1788 9.25181 19.0764 9.37741 18.9452 9.46461C18.8132 9.5526 18.6588 9.59981 18.5004 9.59981C18.2884 9.59981 18.0844 9.51581 17.9348 9.36541C17.7844 9.21581 17.7004 9.01181 17.7004 8.79981ZM11.3004 11.9998C11.3004 12.1582 11.2532 12.3126 11.1652 12.4446C11.078 12.5758 10.9524 12.6782 10.8068 12.739C10.6604 12.7998 10.4996 12.815 10.3444 12.7846C10.1892 12.7534 10.0468 12.6774 9.93479 12.5654C9.82279 12.4534 9.74679 12.311 9.71559 12.1558C9.68519 12.0006 9.70039 11.8398 9.76119 11.6934C9.82199 11.5478 9.92439 11.4222 10.0556 11.335C10.1876 11.247 10.342 11.1998 10.5004 11.1998C10.7124 11.1998 10.9164 11.2838 11.066 11.4342C11.2164 11.5838 11.3004 11.7878 11.3004 11.9998ZM11.3004 8.79981C11.3004 8.95821 11.2532 9.11261 11.1652 9.24461C11.078 9.3758 10.9524 9.47821 10.8068 9.53901C10.6604 9.5998 10.4996 9.61501 10.3444 9.58461C10.1892 9.55341 10.0468 9.47741 9.93479 9.36541C9.82279 9.25341 9.74679 9.111 9.71559 8.9558C9.68519 8.8006 9.70039 8.63981 9.76119 8.49341C9.82199 8.34781 9.92439 8.22221 10.0556 8.13501C10.1876 8.04701 10.342 7.99981 10.5004 7.99981C10.7124 7.99981 10.9164 8.0838 11.066 8.2342C11.2164 8.3838 11.3004 8.58781 11.3004 8.79981ZM11.3004 5.5998C11.3004 5.7582 11.2532 5.9126 11.1652 6.0446C11.078 6.17581 10.9524 6.2782 10.8068 6.339C10.6604 6.39981 10.4996 6.41501 10.3444 6.3846C10.1892 6.3534 10.0468 6.2774 9.93479 6.1654C9.82279 6.0534 9.74679 5.91101 9.71559 5.75581C9.68519 5.60061 9.70039 5.43981 9.76119 5.2934C9.82199 5.1478 9.92439 5.0222 10.0556 4.935C10.1876 4.847 10.342 4.79981 10.5004 4.79981C10.7124 4.79981 10.9164 4.88381 11.066 5.03421C11.2164 5.18381 11.3004 5.3878 11.3004 5.5998ZM6.50039 11.9998C6.50039 12.1582 6.45319 12.3126 6.36519 12.4446C6.27799 12.5758 6.15239 12.6782 6.00679 12.739C5.86039 12.7998 5.69959 12.815 5.54439 12.7846C5.38919 12.7534 5.24679 12.6774 5.13479 12.5654C5.02279 12.4534 4.94679 12.311 4.91559 12.1558C4.88519 12.0006 4.90039 11.8398 4.96119 11.6934C5.02199 11.5478 5.12439 11.4222 5.25559 11.335C5.38759 11.247 5.54199 11.1998 5.70039 11.1998C5.91239 11.1998 6.11639 11.2838 6.26599 11.4342C6.41639 11.5838 6.50039 11.7878 6.50039 11.9998ZM6.50039 8.79981C6.50039 8.95821 6.45319 9.11261 6.36519 9.24461C6.27799 9.3758 6.15239 9.47821 6.00679 9.53901C5.86039 9.5998 5.69959 9.61501 5.54439 9.58461C5.38919 9.55341 5.24679 9.47741 5.13479 9.36541C5.02279 9.25341 4.94679 9.111 4.91559 8.9558C4.88519 8.8006 4.90039 8.63981 4.96119 8.49341C5.02199 8.34781 5.12439 8.22221 5.25559 8.13501C5.38759 8.04701 5.54199 7.99981 5.70039 7.99981C5.91239 7.99981 6.11639 8.0838 6.26599 8.2342C6.41639 8.3838 6.50039 8.58781 6.50039 8.79981ZM6.50039 5.5998C6.50039 5.7582 6.45319 5.9126 6.36519 6.0446C6.27799 6.17581 6.15239 6.2782 6.00679 6.339C5.86039 6.39981 5.69959 6.41501 5.54439 6.3846C5.38919 6.3534 5.24679 6.2774 5.13479 6.1654C5.02279 6.0534 4.94679 5.91101 4.91559 5.75581C4.88519 5.60061 4.90039 5.43981 4.96119 5.2934C5.02199 5.1478 5.12439 5.0222 5.25559 4.935C5.38759 4.847 5.54199 4.79981 5.70039 4.79981C5.91239 4.79981 6.11639 4.88381 6.26599 5.03421C6.41639 5.18381 6.50039 5.3878 6.50039 5.5998Z"
            fill="white"
          />
        </svg>
      ),
      content: (
        <div className="flex lg:flex-row items-center  lg:gap-6 gap-0  flex-col  sm:gap-10">
          {/* tabs */}
          <div className="flex flex-row sm:flex-row md:flex-row lg:flex-col bg-[#FFFFFF] gap-2 py-3 rounded-full px-7 overflow-x-auto md:overflow-visible">
            {featureTabs.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveFeatureTab(item.id)}
                className={`h-12 w-12 md:h-20 md:w-20 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  activeFeatureTab === item.id ? "bg-black" : "bg-gray-500"
                }`}
              >
                <span className="text-white text-xs md:text-sm  text-center px-1">
                  {item.name}
                </span>
              </button>
            ))}
          </div>

          <div className="w-full md:flex-1 border-t md:border-t-0  md:pt-0 pt-13 mt-10  ">
            {activeFeatureTab === "Overview" && (
              <>
                {[
                  {
                    label: "Space",
                    value: projectData?.home_area,
                    icon: (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 12H5C5.26522 12 5.51957 12.1054 5.70711 12.2929C5.89464 12.4804 6 12.7348 6 13V17M1 6H5C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5V1M17 12H13C12.7348 12 12.4804 12.1054 12.2929 12.2929C12.1054 12.4804 12 12.7348 12 13V17M12 1V5C12 5.26522 12.1054 5.51957 12.2929 5.70711C12.4804 5.89464 12.7348 6 13 6H17"
                          stroke="#060B0E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Price",
                    value: `${projectData?.start_price} - ${projectData?.end_price}`,
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1V23M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Location",
                    value: projectData?.location,
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.62 8.49C5.59 -0.169998 18.42 -0.159998 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Building Date",
                    value: projectData?.year_built,
                    icon: (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16 2V6"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 2V6"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3 10H21"
                          stroke="#060B0E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-[#B1B3B4] py-1 px-10"
                  >
                    <div className="flex justify-between items-center py-5">
                      <div className="flex items-center gap-1 space-x-2 ">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-gray-800  capitalize text-sm">
                          {item.label}
                        </span>
                      </div>
                      <div className="text-gray-700 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeFeatureTab === "Details" && (
              <>
                {projectData?.features.map(
                  (item: { id?: number; key?: string; value?: string }) => (
                    <div
                      key={item.id}
                      className="border-b border-[#B1B3B4] px-10"
                    >
                      <div className="flex justify-between items-center py-5">
                        <div className="text-gray-800 capitalize text-sm">
                          {item.key}
                        </div>
                        <div className="text-gray-700 text-sm">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </>
            )}

            {activeFeatureTab === "Amenities" && (
              <div className="grid grid-cols-2">
                {projectData?.amenities.map(
                  (item: { id: number; type: string; title: string }) => {
                    if (item.type !== "amenity") return null;
                    return (
                      <div
                        key={item.id}
                        className="py-4 px-6 border-b border-r border-[#E5E7EB]"
                      >
                        <div className="text-gray-800 text-sm">
                          {item.title}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}

            {activeFeatureTab === "OutdoorFeatures" && (
              <div className="grid grid-cols-2">
                {projectData?.amenities.map(
                  (item: { id: number; type: string; title: string }) => {
                    if (item.type !== "out_door_feature") return null;
                    return (
                      <div
                        key={item.id}
                        className="py-4 px-6 border-b border-r border-[#E5E7EB]"
                      >
                        <div className="text-gray-800 text-sm">
                          {item.title}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            )}
          </div>
        </div>
      ),
    },
    {
      id: "photos",
      name: "photos",
      icon: (
        <svg
          width="30"
          height="15"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 21V27C28.5 27.8284 27.8284 28.5 27 28.5H3C2.17158 28.5 1.5 27.8284 1.5 27V24M28.5 21V3C28.5 2.17158 27.8284 1.5 27 1.5H3C2.17158 1.5 1.5 2.17158 1.5 3V24M28.5 21L20.2243 15.4829C19.7764 15.1842 19.2028 15.1485 18.7213 15.3892L1.5 24"
            stroke="#060B0E"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </svg>
      ),
      content: <PhotosSwiper activeTab="photos" projectData={projectData} />,
    },
    {
      id: "videos",
      name: "videos",
      icon: (
        <svg
          width="30"
          height="15"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 21H9V3H27V21ZM15 5.25V18.75L24 12L15 5.25Z"
            fill="#060B0E"
          />
        </svg>
      ),
      content: (
        <div className="relative overflow-hidden space-y-3 py-3">
          {/* Main Video Swiper */}
          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
            >
              {projectData?.property_listing_videos?.map((video, index) => (
                <div key={video.id} className="w-full h-85 flex-shrink-0">
                  <div className="aspect-video h-full w-full bg-gray-800 rounded-md overflow-hidden relative">
                    {video.type === "youtube" ? (
                      <iframe
                        src={video.video}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={video.video}
                        className="w-full h-full"
                        controls
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow navigation */}
            <button
              onClick={() =>
                setCurrentVideoSlide((prev) =>
                  prev === 0
                    ? (projectData?.property_listing_videos?.length || 1) - 1
                    : prev - 1
                )
              }
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70"
              aria-label="Previous video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentVideoSlide((prev) =>
                  prev ===
                  (projectData?.property_listing_videos?.length || 1) - 1
                    ? 0
                    : prev + 1
                )
              }
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70"
              aria-label="Next video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "plan",
      name: "plan",
      icon: (
        <svg
          width="36"
          height="15"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.4828 31.8571H0.517241C0.231517 31.8571 0 31.6256 0 31.3398V0.660796C0 0.375072 0.231517 0.143555 0.517241 0.143555H31.8977C32.1834 0.143555 32.4149 0.375072 32.4149 0.660796V15.956H35.4828C35.7685 15.956 36 16.1876 36 16.4733V31.3398C36 31.6256 35.7685 31.8571 35.4828 31.8571ZM9.41379 30.8226H34.9655V16.9905H24.2688C23.983 16.9905 23.7515 16.759 23.7515 16.4733V15.4775H22.4746C22.1888 15.4775 21.9573 15.246 21.9573 14.9602C21.9573 14.6745 22.1888 14.443 22.4746 14.443H23.7515V11.0981C23.7515 10.8124 23.983 10.5809 24.2688 10.5809C24.5545 10.5809 24.786 10.8124 24.786 11.0981V15.956H27.792V1.17804H24.786V4.96011C24.786 5.24583 24.5545 5.47735 24.2688 5.47735C23.983 5.47735 23.7515 5.24583 23.7515 4.96011V3.37383H15.6207C15.335 3.37383 15.1034 3.14231 15.1034 2.85659V1.17804H13.2151V3.58073C13.2151 3.86645 12.9836 4.09797 12.6979 4.09797C12.4121 4.09797 12.1806 3.86645 12.1806 3.58073V1.17804H11.6208V2.5119C11.6208 2.79762 11.3892 3.02914 11.1035 3.02914H10.9423C11.0348 3.24038 11.0863 3.47376 11.0863 3.71873V5.06355C11.0863 6.01424 10.313 6.78762 9.36228 6.78762C8.41159 6.78762 7.63821 6.01424 7.63821 5.06355V3.71873C7.63821 3.47355 7.68972 3.24038 7.78221 3.02914H7.62103C7.33531 3.02914 7.10379 2.79762 7.10379 2.5119V1.17804H5.22414V8.029C5.22414 8.31473 4.99262 8.54624 4.7069 8.54624H4.03448V11.4507H12.1806V9.06349C12.1806 8.77776 12.4121 8.54624 12.6979 8.54624C12.9836 8.54624 13.2151 8.77776 13.2151 9.06349V14.4428H14.4921C14.7778 14.4428 15.0093 14.6743 15.0093 14.96C15.0093 15.2458 14.7778 15.4773 14.4921 15.4773H13.2151V18.0118C13.2151 18.2975 12.9836 18.529 12.6979 18.529C12.4121 18.529 12.1806 18.2975 12.1806 18.0118V12.4851H4.79317V27.3395H8.89655C9.18228 27.3395 9.41379 27.571 9.41379 27.8567V30.8226ZM1.03448 30.8226H8.37931V28.374H4.27593C3.99021 28.374 3.75869 28.1425 3.75869 27.8567V18.8567H1.03448V30.8226ZM1.03448 17.8222H3.75869V12.4851H1.03448V17.8222ZM30.6207 15.956H31.3804V1.17804H30.6207V15.956ZM28.8265 15.956H29.5862V1.17804H28.8265V15.956ZM1.03448 11.2705H3V8.54624H1.03448V11.2705ZM3.51724 7.51176H4.18966V1.17804H1.03448V7.51176H3.51724ZM9.36207 3.02914C8.98179 3.02914 8.67248 3.33866 8.67248 3.71873V5.06355C8.67248 5.44383 8.98179 5.75314 9.36207 5.75314C9.74234 5.75314 10.0517 5.44383 10.0517 5.06355V3.71873C10.0517 3.33866 9.74234 3.02914 9.36207 3.02914ZM16.1379 2.33935H23.7515V1.17804H16.1379V2.33935ZM9.36207 1.99466H10.5863V1.17804H8.13786V1.99466H9.36207ZM20.6806 29.2876H16.5333C16.2476 29.2876 16.0161 29.0561 16.0161 28.7704V19.292C16.0161 19.0063 16.2476 18.7748 16.5333 18.7748H20.6806C20.9663 18.7748 21.1978 19.0063 21.1978 19.292V28.7706C21.1978 29.0561 20.9661 29.2876 20.6806 29.2876ZM17.0506 28.2531H20.1633V27.7359H18.3275C18.0418 27.7359 17.8103 27.5044 17.8103 27.2187V20.8438C17.8103 20.558 18.0418 20.3265 18.3275 20.3265H20.1633V19.8093H17.0506V28.2531ZM18.8448 26.7014H20.1633V21.361H18.8448V26.7014ZM31.8977 28.9773C31.6119 28.9773 31.3804 28.7458 31.3804 28.46V19.5635C31.3804 19.2778 31.6119 19.0462 31.8977 19.0462C32.1834 19.0462 32.4149 19.2778 32.4149 19.5635V21.1682C32.6839 21.1864 32.8966 21.4105 32.8966 21.6842V26.3393C32.8966 26.6131 32.6841 26.8371 32.4149 26.8554V28.46C32.4149 28.7458 32.1834 28.9773 31.8977 28.9773ZM26.9112 28.3566C25.2662 28.3566 23.9777 26.5845 23.9777 24.3221C23.9777 22.0597 25.2662 20.2876 26.9112 20.2876C28.5563 20.2876 29.8448 22.0597 29.8448 24.3221C29.8448 26.5845 28.5563 28.3566 26.9112 28.3566ZM26.9112 21.3221C25.8817 21.3221 25.0121 22.6959 25.0121 24.3221C25.0121 25.9483 25.8819 27.3221 26.9112 27.3221C27.9406 27.3221 28.8103 25.9483 28.8103 24.3221C28.8103 22.6959 27.9406 21.3221 26.9112 21.3221Z"
            fill="#060B0E"
          />
        </svg>
      ),
      content: (
        <div className="flex lg:flex-row items-center justify-between w-full lg:gap-6 gap-0  flex-col  sm:gap-10">
          {/* tabs */}
          <div className="flex flex-row sm:flex-row md:flex-row lg:flex-col bg-[#FFFFFF] gap-2 py-3 rounded-full px-7 overflow-x-auto md:overflow-visible">
            {projectData?.property_floor_plans.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveFloor(item.id)}
                className={`h-12 w-12 md:h-20 md:w-20 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  activeFloor === item.id ? "bg-black" : "bg-gray-500"
                }`}
              >
                <span className="text-white text-xs md:text-sm text-center px-1">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="w-fit  ">
            <div className="w-fit">
              <img
                src={
                  projectData?.property_floor_plans.find(
                    (plan) => plan.id === activeFloor
                  )?.image
                }
                alt=""
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white pb-30   py-7 rounded-bl-lg rounded-br-lg">
      <div
        className="relative w-full h-[90vh] overflow-hidden rounded-bl-lg rounded-br-lg "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {/* Swiper slides */}
        <div
          className="w-full transition-transform duration-500 ease-in-out text-4xl rounded-bl-lg rounded-br-lg"
          //   style={{
          //     height: `${backgroundImages.length * 90}vh`,
          //     transform: `translateY(-${currentSlide * 90}vh)`,
          //   }}
        >
          <div className="relative w-full h-[90vh]">
            <div className="absolute inset-0">
              <Image
                src={projectData?.image || ""}
                alt={`project image`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* {backgroundImages.map((image, index) => (
            <div key={index} className="relative w-full h-[90vh]">
              <div className="absolute inset-0">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-zinc-950/50"></div>
              </div>

              {index === currentSlide && (
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 opacity-100 transition-opacity duration-300">
                  <div className="flex items-end justify-end">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="text-white text-xs md:text-sm  font-['Lato'] capitalize">
                        New Administrative Capital
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))} */}
        </div>

        {/* Vertical slide indicator dots */}
        <div className="absolute left-13 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(i);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`w-3 h-${
                i === currentSlide ? "6" : "3"
              } rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-[#E2A12D]" : "bg-white"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* GIF chevron navigation */}
        <div className="absolute left-8 bottom-8 z-10">
          <button
            onClick={handleNextSlide}
            className={`transition-all duration-300 hover:scale-110 ${
              currentSlide === backgroundImages.length - 1
                ? " cursor-not-allowed"
                : ""
            }`}
            disabled={currentSlide === backgroundImages.length - 1}
            aria-label="Next slide"
          >
            <Image src={svg} alt="Next slide" width={50} height={40} priority />
          </button>
        </div>
      </div>

      {/* Project Information Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:space-y-1 space-y-[20px] sm:py-8">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-2xl flex flex-col items-center gap-2 py-8">
            <h1
              className="text-center text-black  font-['Lato'] leading-tight"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                lineHeight: "clamp(1.75rem, 6vw, 3rem)",
              }}
            >
              {projectData?.title}
            </h1>
            <div className="w-24 h-px bg-gray-300"></div>
          </div>

          <div
            className="w-full text-center h-fit text-black text-sm md:text-base lg:px-18 px-4 py-0  lg:pb-10 pb-1 font-['Lato'] "
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              lineHeight: "clamp(1.25rem, 2vw, 1.5rem)",
            }}
          >
            {projectData?.description}
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 lg:gap-12 items-center justify-center">
          <button
            onClick={() => setOpenForm(true)}
            className="w-full sm:w-[320px] px-4 py-2 bg-[#035B8D] text-white text-sm rounded-md hover:bg-blue-700 transition"
          >
            register your interest with this project
          </button>
          <a
            href={projectData?.brochure || "#"}
            target="_blank"
            download
            className="w-full sm:w-[320px] px-4 py-2 bg-white text-blue-600 text-sm border border-blue-600 rounded-md hover:bg-gray-50 transition text-center"
          >
            Download brochure
          </a>
        </div>
      </div>

      <div className="w-full py-6 md:py-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-2 mb-4">
            <h2
              className="text-blue-600 text-lg md:text-xl py-6  font-['Lato'] uppercase"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
              }}
            >
              Building Features
            </h2>
            <div
              className="text-center text-black  font-['Cinzel'] leading-tight max-w-[300px]"
              style={{
                fontSize: "clamp(1.25rem, 4vw, 2rem)",
                lineHeight: "clamp(1.5rem, 2.5vw, 2.5rem)",
              }}
            >
              Explore all the details that make this building stand out
            </div>
          </div>

          {/* Interactive tab navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-6 text-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 min-w-0 sm:min-w-[120px] md:min-w-[150px] transition-colors duration-300  ${
                  activeTab === tab.id
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                <span className=" uppercase tr`uncate text-sm">{tab.icon}</span>
                <span className=" uppercase truncate text-sm">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="min-h-[300px] ">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>

      {/* Location Section with Map Image */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full md:w-full h-[50vh] md:h-[90vh] relative">
          {/* Map image from import */}
          <Image
            src={mapImage}
            alt="Project Location Map"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-800/30 pointer-events-none"></div>
        </div>
        <div className="w-full md:w-full h-[60vh] sm:h-[80vh] md:h-[90vh] lg:h-[90vh] bg-[#060B0E] text-white flex items-center">
          <div className="w-full px-4 sm:px-6 md:px-22 lg:px-16 py-6 sm:py-10 md:py-36">
            <h2
              className="text-center text-white font-['Cinzel'] mb-4 sm:mb-6 md:mb-10"
              style={{
                fontSize: "clamp(1.125rem, 1vw + 1rem, 1.875rem)",
                lineHeight: "clamp(1.5rem, 1.5vw + 1rem, 2.25rem)",
              }}
            >
              PRIME LOCATION
            </h2>

            <p
              className="text-white mb-6 sm:mb-8 md:mb-12"
              style={{
                fontSize: "clamp(0.75rem, 0.5vw + 0.5rem, 1rem)",
                lineHeight: "clamp(1.2rem, 0.7vw + 1rem, 1.5rem)",
              }}
            >
              Strategically situated in Downtown, the heart of the New
              Administrative Capital, KÈNTRO TOWER enjoys an exceptional
              position surrounded by key landmarks.
            </p>

            <div className="mb-6 sm:mb-8 md:mb-12">
              <h3
                className="text-white font-medium mb-2 md:mb-4"
                style={{
                  fontSize: "clamp(0.813rem, 0.5vw + 0.6rem, 1rem)",
                  lineHeight: "clamp(1.2rem, 0.7vw + 1rem, 1.5rem)",
                }}
              >
                Getting There
              </h3>
              <p
                className="text-white"
                style={{
                  fontSize: "clamp(0.75rem, 0.5vw + 0.5rem, 1rem)",
                  lineHeight: "clamp(1.2rem, 0.7vw + 1rem, 1.5rem)",
                }}
              >
                With seamless access from major roads and proximity to 80% of
                the capital s iconic destinations, KÈNTRO TOWER stands as a
                central hub in the New Capital. Minutes away from UK Gold
                Market, Museum of Egypt, monorail station, and the Green River.
              </p>
            </div>

            <div>
              <button
                className="px-5 py-1.5 bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition inline-block"
                style={{
                  fontSize: "clamp(0.7rem, 0.3vw + 0.6rem, 0.875rem)",
                }}
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <ContactForm isOpen={openForm} onClose={() => setOpenForm(false)} />
    </div>
  );
};

export default ProjectPage;
