"use client";

import { ProjectType } from "@/libs/types/types";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const PhotosSwiper = ({
  projectData,
  activeTab,
}: {
  projectData: ProjectType | null;
  activeTab: string;
}) => {
  const [currentPhotoSlide, setCurrentPhotoSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalSlides = Math.ceil(
    (projectData?.property_listing_images?.length ?? 0) / 3
  );

  const handleNextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentPhotoSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, totalSlides]);

  const handlePrevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentPhotoSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, totalSlides]);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      if (activeTab === "photos") {
        handleNextSlide();
      }
    }, 4000);

    return () => clearInterval(photoInterval);
  }, [activeTab, handleNextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isTransitioning) {
      if (touchStart - touchEnd > 75) {
        handleNextSlide();
      } else if (touchStart - touchEnd < -75) {
        handlePrevSlide();
      }
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative overflow-hidden py-3">
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPhotoSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, groupIndex) => (
            <div key={groupIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                {projectData?.property_listing_images
                  ?.slice(groupIndex * 3, (groupIndex + 1) * 3)
                  .map((image, imgIndex) => {
                    const actualIndex = groupIndex * 3 + imgIndex;
                    return (
                      <div
                        key={image.id}
                        className="aspect-video bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer"
                      >
                        <Image
                          src={image.image}
                          alt={`Property image ${actualIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors duration-300"
          aria-label="Previous photos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
          onClick={handleNextSlide}
          className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors duration-300"
          aria-label="Next photos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
  );
};

export default PhotosSwiper;
