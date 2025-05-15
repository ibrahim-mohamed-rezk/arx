"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

const BlogVideos = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  // const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  // Pause autoplay when hovering over swiper
  const handleSwiperMouseEnter = () => setIsPaused(true);
  const handleSwiperMouseLeave = () => setIsPaused(false);

  // Handle swipe events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true); // Pause autoplay when touching
    setTouchStart(e.targetTouches[0].clientY);
  };

  const featuredCards = [
    {
      id: 1,
      title: "DESIGNED TO MEET",
      subtitle: "",
      description: "Exclusive Interview From The Ramadan Iftar Party!",
      logo: "",
      thumbnail: "/interview-thumbnail.jpg",
      video: true,
    },
    {
      id: 2,
      title: "The Hotel Rooms",
      subtitle: "Are equipped with amenities",
      description: "Our Special Projects",
      logo: "logo-lavie.png",
      thumbnail: "/hotel-rooms.jpg",
      video: true,
    },
  ];

  const featuredVideos = [
    {
      id: 1,
      title: "Rise",
      thumbnail: "/rise-video-thumbnail.jpg",
      duration: "3:23",
      views: "28000",
    },
    {
      id: 2,
      title: "Navigating Urban Spaces",
      subtitle: "Exploring the modern cityscape",
      thumbnail: "/urban-spaces-thumbnail.jpg",
      duration: "5:12",
      views: "15400",
    },
    {
      id: 3,
      title: "The Hotel Rooms",
      subtitle: "Designing spaces that feel like home",
      thumbnail: "/hotel-rooms-thumbnail.jpg",
      duration: "4:45",
      views: "9800",
    },
    {
      id: 4,
      title: "Architectural Principles",
      subtitle: "Fundamentals of modern design",
      thumbnail: "/architecture-principles.jpg",
      duration: "6:30",
      views: "12700",
    },
    {
      id: 5,
      title: "Future Cities",
      subtitle: "Urban planning for tomorrow",
      thumbnail: "/future-cities.jpg",
      duration: "7:15",
      views: "18300",
    },
  ];

  // Navigate to the next slide with looping
  const goToNextSlide = useCallback(() => {
    // setActiveSlide((prevSlide) =>
    //   prevSlide === featuredVideos.length - 1 ? 0 : prevSlide + 1
    // );
  }, [featuredVideos.length]);

  // Navigate to the previous slide with looping
  const goToPrevSlide = useCallback(() => {
    // setActiveSlide((prevSlide) =>
    //   prevSlide === 0 ? featuredVideos.length - 1 : prevSlide - 1
    // );
  }, [featuredVideos.length]);

  // Setup autoplay
  useEffect(() => {
    // Start autoplay
    const startAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }

      autoplayIntervalRef.current = setInterval(() => {
        if (!isPaused) {
          goToNextSlide();
        }
      }, 5000); // Change slide every 5 seconds
    };

    startAutoplay();

    // Cleanup
    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [goToNextSlide, isPaused]);

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe up - go to next slide
      goToNextSlide();
    } else if (touchStart - touchEnd < -50) {
      // Swipe down - go to previous slide
      goToPrevSlide();
    }

    // Resume autoplay after a short delay
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Handle scroll events for desktop
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (swiperRef.current && swiperRef.current.contains(e.target as Node)) {
        e.preventDefault();
        setIsPaused(true); // Pause autoplay when scrolling

        if (e.deltaY > 0) {
          goToNextSlide();
        } else if (e.deltaY < 0) {
          goToPrevSlide();
        }

        // Resume autoplay after a short delay
        setTimeout(() => setIsPaused(false), 1000);
      }
    };

    const currentSwiperRef = swiperRef.current;
    if (currentSwiperRef) {
      currentSwiperRef.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (currentSwiperRef) {
        currentSwiperRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [goToNextSlide, goToPrevSlide]);

  // Blog posts data

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-xl md:text-2xl font-bold"
          style={{ fontSize: "clamp(1.25rem, 1vw + 1rem, 1.5rem)" }}
        >
          OUR NEW VIDEOS
        </h2>
        <div className="h-0.5 bg-gray-200 flex-grow ml-4"></div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Vertical Video Swiper */}
        <div
          ref={swiperRef}
          className="relative vertical-swiper w-full md:w-1/2 h-[450px] overflow-hidden rounded-lg shadow-lg mb-4 md:mb-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleSwiperMouseEnter}
          onMouseLeave={handleSwiperMouseLeave}
        >
          <div
            className={`vertical-swiper-slide absolute inset-0 w-full h-full`}
            // style={{
            //   transform: `translateY(${(index - activeSlide) * 100}%)`,
            //   transition: "transform 0.5s ease, opacity 0.5s ease",
            // }}
          >
            {/* map here if swiper */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gray-300">
                {/* <Image
                    src={"/placeholder.jpg"}
                    alt={"video.title"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  /> */}

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 rounded-lg"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 rounded-full p-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                  <div className="text-white">
                    <h3
                      className="font-bold mb-1"
                      style={{
                        fontSize: "clamp(1.25rem, 1vw + 1rem, 1.75rem)",
                      }}
                    >
                      {video.title}
                    </h3>
                    {video.subtitle && (
                      <p className="text-sm text-gray-200">{video.subtitle}</p>
                    )}
                  </div>
                  <div className="flex space-x-2 items-center text-white">
                    <span>{video.duration}</span>
                    <span>·</span>
                    <span>{video.views}</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Progress bar for autoplay indication */}
            {/* {index === activeSlide && !isPaused && (
              <div
                className="progress-bar"
                style={{
                  width: `${(Date.now() % 5000) / 50}%`,
                  animation: "progress 5s linear infinite",
                }}
              ></div>
            )} */}
          </div>
        </div>

        {/* Featured Cards - Side by Side */}
        <div className="w-full md:w-1/2 flex flex-row space-x-4 h-[450px]">
          {/* First Card - Small by Default */}
          <div
            className={`feature-card relative rounded-lg overflow-hidden shadow-md cursor-pointer ${
              hoveredCard === 0
                ? "w-3/5"
                : hoveredCard === 1
                ? "w-2/5"
                : "w-2/5"
            }`}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gray-300">
              <Image
                src={featuredCards[0].thumbnail || "/placeholder.jpg"}
                alt={featuredCards[0].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute top-1/3 left-4 right-4 text-white">
                <h3 className="font-bold text-2xl mb-2">
                  {featuredCards[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Second Card - Big by Default */}
          <div
            className={`feature-card relative rounded-lg overflow-hidden shadow-md cursor-pointer ${
              hoveredCard === 1
                ? "w-3/5"
                : hoveredCard === 0
                ? "w-2/5"
                : "w-3/5"
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gray-300">
              <Image
                src={featuredCards[1].thumbnail || "/placeholder.jpg"}
                alt={featuredCards[1].title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

              {/* Logo */}
              <div className="absolute top-3 right-3">
                <Image
                  src="/logo-lavie.png"
                  alt="LA VIE Logo"
                  width={60}
                  height={30}
                  objectFit="contain"
                />
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Text Content */}
              <div className="absolute top-1/3 left-4 right-4 text-white">
                <h3 className="font-bold text-2xl mb-2">
                  {featuredCards[1].title}
                </h3>
                <p className="text-white text-lg">
                  {featuredCards[1].subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm">
                  {featuredCards[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogVideos;
