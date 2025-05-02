"use client"
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState, useRef, useCallback } from 'react';

const BlogPage: NextPage = () => {
    const swiperRef = useRef<HTMLDivElement>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Featured videos data - expanded with more items
    const featuredVideos = [
        {
            id: 1,
            title: "Rise",
            thumbnail: "/rise-video-thumbnail.jpg",
            duration: "3:23",
            views: "28000"
        },
        {
            id: 2,
            title: "Navigating Urban Spaces",
            subtitle: "Exploring the modern cityscape",
            thumbnail: "/urban-spaces-thumbnail.jpg",
            duration: "5:12",
            views: "15400"
        },
        {
            id: 3,
            title: "The Hotel Rooms",
            subtitle: "Designing spaces that feel like home",
            thumbnail: "/hotel-rooms-thumbnail.jpg",
            duration: "4:45",
            views: "9800"
        },
        {
            id: 4,
            title: "Architectural Principles",
            subtitle: "Fundamentals of modern design",
            thumbnail: "/architecture-principles.jpg",
            duration: "6:30",
            views: "12700"
        },
        {
            id: 5,
            title: "Future Cities",
            subtitle: "Urban planning for tomorrow",
            thumbnail: "/future-cities.jpg",
            duration: "7:15",
            views: "18300"
        }
    ];

    // Featured card data
    const featuredCards = [
        {
            id: 1,
            title: "DESIGNED TO MEET",
            subtitle: "",
            description: "Exclusive Interview From The Ramadan Iftar Party!",
            logo: "",
            thumbnail: "/interview-thumbnail.jpg",
            video: true
        },
        {
            id: 2,
            title: "The Hotel Rooms",
            subtitle: "Are equipped with amenities",
            description: "Our Special Projects",
            logo: "logo-lavie.png",
            thumbnail: "/hotel-rooms.jpg",
            video: true
        }
    ];

    // Navigate to the next slide with looping
    const goToNextSlide = useCallback(() => {
        setActiveSlide(prevSlide =>
            prevSlide === featuredVideos.length - 1 ? 0 : prevSlide + 1
        );
    }, [featuredVideos.length]);

    // Navigate to the previous slide with looping
    const goToPrevSlide = useCallback(() => {
        setActiveSlide(prevSlide =>
            prevSlide === 0 ? featuredVideos.length - 1 : prevSlide - 1
        );
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

    // Pause autoplay when hovering over swiper
    const handleSwiperMouseEnter = () => setIsPaused(true);
    const handleSwiperMouseLeave = () => setIsPaused(false);

    // Handle swipe events for mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsPaused(true); // Pause autoplay when touching
        setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

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
            currentSwiperRef.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (currentSwiperRef) {
                currentSwiperRef.removeEventListener('wheel', handleWheel);
            }
        };
    }, [goToNextSlide, goToPrevSlide]);

    // Blog posts data
    const blogPosts = [
        {
            id: 1,
            title: "Sustainable Architecture in 2025",
            image: "/sustainable-architecture.jpg",
            category: "Architectural Innovation"
        },
        {
            id: 2,
            title: "Urban Planning for Modern Cities",
            image: "/urban-planning.jpg",
            category: "Urban Development"
        },
        {
            id: 3,
            title: "Futuristic Building Concepts",
            image: "/futuristic-building.jpg",
            category: "Design Concepts"
        },
        {
            id: 4,
            title: "Green Spaces in Metropolitan Areas",
            image: "/green-spaces.jpg",
            category: "Environmental Design"
        },
        {
            id: 5,
            title: "Modern Office Building Trends",
            image: "/office-building-trends.jpg",
            category: "Workplace Design"
        },
        {
            id: 6,
            title: "Innovative Facades for Skyscrapers",
            image: "/innovative-facades.jpg",
            category: "Exterior Design"
        },
        {
            id: 7,
            title: "Public Parks and City Planning",
            image: "/public-parks.jpg",
            category: "Urban Planning"
        },
        {
            id: 8,
            title: "Mixed-Use Development Strategies",
            image: "/mixed-use-development.jpg",
            category: "Strategic Planning"
        },
        {
            id: 9,
            title: "The Role of Glass in Modern Architecture",
            image: "/glass-architecture.jpg",
            category: "Materials Innovation"
        },
        {
            id: 10,
            title: "Sustainable Urban Development Practices",
            image: "/sustainable-urban.jpg",
            category: "Sustainability"
        },
        {
            id: 11,
            title: "Smart Buildings and IoT Integration",
            image: "/smart-buildings.jpg",
            category: "Technology"
        },
        {
            id: 12,
            title: "Revitalizing Historical Districts",
            image: "/historical-districts.jpg",
            category: "Heritage Preservation"
        }
    ];

    return (
        <div className="min-h-screen font-lato bg-white pb-20">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
                
                html {
                    font-family: 'Lato', sans-serif;
                    scroll-behavior: smooth;
                }
                
                body {
                    font-family: 'Lato', sans-serif;
                    background-color: white;
                    color: #333;
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .vertical-swiper {
                    scroll-snap-type: y mandatory;
                    overflow-y: hidden;
                }
                
                .vertical-swiper-slide {
                    scroll-snap-align: start;
                    transition: transform 0.5s ease;
                }
                
                .vertical-indicator {
                    transition: height 0.3s ease, opacity 0.3s ease;
                }
                
                .progress-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 4px;
                    background-color: rgba(255, 255, 255, 0.7);
                    transition: width 0.1s linear;
                    z-index: 30;
                }
                
                .feature-card {
                    transition: all 0.4s ease;
                }
            `}</style>

            <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
                {/* Video Section */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl md:text-2xl font-bold" style={{ fontSize: 'clamp(1.25rem, 1vw + 1rem, 1.5rem)' }}>OUR NEW VIDEOS</h2>
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
                            {featuredVideos.map((video, index) => (
                                <div
                                    key={video.id}
                                    className={`vertical-swiper-slide absolute inset-0 w-full h-full ${index === activeSlide ? 'opacity-100 z-10' :
                                        index < activeSlide ? 'opacity-0 -translate-y-full' : 'opacity-0 translate-y-full'
                                        }`}
                                    style={{
                                        transform: `translateY(${(index - activeSlide) * 100}%)`,
                                        transition: 'transform 0.5s ease, opacity 0.5s ease',
                                    }}
                                >
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 bg-gray-300">
                                            <Image
                                                src={video.thumbnail || "/placeholder.jpg"}
                                                alt={video.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 rounded-lg"></div>

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-white bg-opacity-80 rounded-full p-4">
                                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                                                <div className="text-white">
                                                    <h3 className="font-bold mb-1" style={{ fontSize: 'clamp(1.25rem, 1vw + 1rem, 1.75rem)' }}>
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
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress bar for autoplay indication */}
                                    {index === activeSlide && !isPaused && (
                                        <div className="progress-bar" style={{
                                            width: `${(Date.now() % 5000) / 50}%`,
                                            animation: 'progress 5s linear infinite'
                                        }}></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Featured Cards - Side by Side */}
                        <div className="w-full md:w-1/2 flex flex-row space-x-4 h-[450px]">
                            {/* First Card - Small by Default */}
                            <div 
                                className={`feature-card relative rounded-lg overflow-hidden shadow-md cursor-pointer ${
                                    hoveredCard === 0 ? 'w-3/5' : hoveredCard === 1 ? 'w-2/5' : 'w-2/5'
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
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                    hoveredCard === 1 ? 'w-3/5' : hoveredCard === 0 ? 'w-2/5' : 'w-3/5'
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
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Text Content */}
                                    <div className="absolute top-1/3 left-4 right-4 text-white">
                                        <h3 className="font-bold text-2xl mb-2">
                                            {featuredCards[1].title}
                                        </h3>
                                        <p className="text-white text-lg">{featuredCards[1].subtitle}</p>
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white text-sm">{featuredCards[1].description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional content - Interview excerpt */}
                <div className="mb-12">
                    <div className="text-lg font-bold mb-2">
                        Exclusive Interview From The Ramadan Iftar Party!
                    </div>
                    <p className="text-gray-700">
                        Mr. Mohamed Nazmy, VIP Sales Partner at RED - Real Estate Domain, shares expert insights on the real estate market and investment opportunities in 2025!
                    </p>
                </div>

                {/* Blog Posts Section */}
                <section>
                    <div className="mb-8 text-center">
                        <div className="inline-block mb-1 text-gray-500 uppercase tracking-wider" style={{ fontSize: 'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)' }}>
                            LATEST FROM FEED
                        </div>
                        <h2 className="font-bold tracking-tight mb-2" style={{ fontSize: 'clamp(1.5rem, 2vw + 1rem, 2.25rem)' }}>
                            WELCOME TO OUR BLOG, WHERE WE SHARE THE LATEST
                        </h2>
                        <p className="text-gray-700" style={{ fontSize: 'clamp(1rem, 1vw + 0.5rem, 1.25rem)' }}>
                            NEWS, TIPS, AND INSPIRING IDEAS!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="relative w-full" style={{ paddingBottom: '60%' }}>
                                    <div className="absolute inset-0 bg-gray-300">
                                        <Image
                                            src={post.image || "/placeholder.jpg"}
                                            alt={post.title}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="text-xs text-gray-500 mb-1">{post.category}</div>
                                    <h3 className="font-semibold line-clamp-2" style={{ fontSize: 'clamp(0.875rem, 0.5vw + 0.7rem, 1.125rem)' }}>
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BlogPage;