// src/components/home/ShortsPage.tsx
"use client";

import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

import sliderImage01 from "../../../public/images/home/bba65e126777dbdbc37dcfc38ab04c9113908d13.png";
import sliderImage02 from "../../../public/images/home/38577258a3711dfb21407d5e146a7d6d148fdf5a.png";

interface Short {
    id: number;
    title: string;
    subtitle: string;
    image: StaticImageData;
}

const shorts: Short[] = [
    { id: 1, title: "O7 MALL – O7", subtitle: "New Damietta", image: sliderImage01 },
    { id: 2, title: "O7 MALL – O7", subtitle: "New Damietta", image: sliderImage02 },
];

const ShortsPage: NextPage = () => {
    const scroller = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scroller.current;
        if (!container) return;

        // Clone slides for seamless loop
        const slides = Array.from(container.children) as HTMLElement[];
        slides.forEach((slide) => container.appendChild(slide.cloneNode(true)));

        let lastTime: number | null = null;
        const speed = 0.05;

        function animate(time: number) {
            if (lastTime !== null) {
                const delta = time - lastTime;
                container.scrollLeft += speed * delta;
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft -= container.scrollWidth / 2;
                }
            }
            lastTime = time;
            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }, []);

    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-blue-600 uppercase">Our Shorts</p>
                    <h2 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900">
                        A glimpse into our journey, one reel at a time.
                    </h2>
                </div>

                {/* Infinite slider */}
                <div
                    ref={scroller}
                    className="scroll-container flex space-x-6 overflow-x-auto py-2"
                >
                    {shorts.map((s) => (
                        <div
                            key={s.id}
                            className="relative flex-shrink-0 w-64 md:w-72 lg:w-80 h-[450px] md:h-[500px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image src={s.image} alt={s.title} fill className="object-cover" />

                            <button className="absolute inset-0 flex items-center justify-center">
                                <FaPlay className="text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full" />
                            </button>

                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white">
                                <h3 className="text-lg font-semibold">{s.title}</h3>
                                <p className="text-sm">{s.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* hide scrollbar */}
            <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default ShortsPage;
