// pages/ProjectAndBlog.tsx
"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import pm1 from "../../../public/images/home/PrimeMiniste1.png";
import pm2 from "../../../public/images/home/PrimeMiniste2.png";
import pm3 from "../../../public/images/home/PrimeMiniste3.png";

type Slide = {
    title: string;
    location?: string;
    image: StaticImageData;
};

const projectSlides: Slide[] = [
    { title: "O7 Mall – O7", location: "New Damietta", image: pm1 },
    { title: "Aura Mall", location: "New Damietta", image: pm2 },
    { title: "Metro Towers", location: "Cairo", image: pm3 },
];

const blogPosts: Slide[] = [
    { title: "Prime Minister: Administrative Capital…", image: pm1 },
    { title: "Economic Growth in 2025", image: pm2 },
    { title: "New Urban Developments", image: pm3 },
];

const testimonials = [
    {
        text:
            "I could probably go into sales for you. I am completely blown away. After using SEO my business skyrocketed! The very best.",
        author: "Grace Hall",
        role: "Customer",
    },
];

const ProjectAndBlog: React.FC = () => {
    // Projects slider state
    const [projIdx, setProjIdx] = useState(0);
    const lastIdx = projectSlides.length - 1;

    const nextProj = () =>
        setProjIdx((i) => (i === lastIdx ? 0 : i + 1));
    const prevProj = () =>
        setProjIdx((i) => (i === 0 ? lastIdx : i - 1));

    // Blog & Testimonials state
    const [blogIdx, setBlogIdx] = useState(0);
    const [testIdx, setTestIdx] = useState(0);
    const cycle = (i: number, len: number) => (i + len) % len;

    return (
        <div className="space-y-24 py-12">
            {/* ---------------------------- */}
            {/* Our Latest Projects */}
            {/* ---------------------------- */}
            <section className="py-16">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Left: Title + link (25% on lg) */}
                    <div>
                        <p className="text-sm uppercase font-medium text-gray-500">
                            Our Latest
                        </p>
                        <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
                            Projects
                        </h2>
                        <a
                            href="#"
                            className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                        >
                            See All Projects &rarr;
                        </a>
                    </div>

                    {/* Slider (75% on lg) */}
                    <div className="relative lg:col-span-3">
                        <div className="flex overflow-hidden gap-6">
                            {[
                                projectSlides[projIdx],
                                projectSlides[(projIdx + 1) % projectSlides.length],
                            ].map((slide, i) => (
                                <div key={i} className="flex-1 space-y-2">
                                    <div className="relative w-full h-72 rounded overflow-hidden">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="font-semibold">{slide.title}</h3>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        <span className="inline-block w-4 h-4 mr-1 bg-gray-300 rounded-full" />
                                        {slide.location}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Next arrow → on the far LEFT */}
                        <button
                            onClick={nextProj}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 rounded-full p-2 shadow"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 4.293a1 1 0 011.414 1.414L5.414 9H15a1 1 0 110 2H5.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {/* Prev arrow ← in the CENTER between slides */}
                        <button
                            onClick={prevProj}
                            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 15.707a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* ---------------------------- */}
            {/* Blog Section */}
            {/* ---------------------------- */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <p className="text-sm text-blue-600 uppercase">Our Blog</p>
                    <h2 className="text-3xl font-black">Latest News Feeds</h2>
                </div>
                <div className="relative">
                    <button
                        onClick={() =>
                            setBlogIdx(cycle(blogIdx - 1, blogPosts.length))
                        }
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full shadow p-2 z-10"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 4.293a1 1 0 011.414 1.414L5.414 9H15a1 1 0 110 2H5.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts
                            .slice(blogIdx, blogIdx + 3)
                            .map((post, i) => (
                                <div key={i} className="rounded overflow-hidden">
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="p-4 text-sm font-medium">{post.title}</p>
                                </div>
                            ))}
                    </div>
                    <button
                        onClick={() =>
                            setBlogIdx(cycle(blogIdx + 1, blogPosts.length))
                        }
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full shadow p-2 z-10"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 15.707a1 1 0 01-1.414-1.414L14.586 11H5a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </section>

            {/* ---------------------------- */}
            {/* Testimonials Section */}
            {/* ---------------------------- */}
            <section className="container mx-auto px-4 mb-20">
                <h2 className="text-center text-3xl font-black mb-6">
                    Trusted by Clients
                </h2>
                <div className="max-w-xl mx-auto text-center space-y-4">
                    <blockquote className="italic text-gray-700">
                        “{testimonials[testIdx].text}”
                    </blockquote>
                    <p className="font-semibold">
                        {testimonials[testIdx].author}{" "}
                        <span className="text-sm text-gray-500">
                            — {testimonials[testIdx].role}
                        </span>
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <button
                            onClick={() =>
                                setTestIdx(cycle(testIdx - 1, testimonials.length))
                            }
                            className="text-gray-400 hover:text-gray-600"
                        >
                            &larr;
                        </button>
                        <span className="font-medium text-blue-600">
                            {String(testIdx + 1).padStart(2, "0")} /{" "}
                            {String(testimonials.length).padStart(2, "0")}
                        </span>
                        <button
                            onClick={() =>
                                setTestIdx(cycle(testIdx + 1, testimonials.length))
                            }
                            className="text-gray-400 hover:text-gray-600"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectAndBlog;
