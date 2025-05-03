// app/shorts/page.tsx
'use client'

import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import sliderImage01 from '../../../public/images/home/bba65e126777dbdbc37dcfc38ab04c9113908d13.png'
import sliderImage02 from '../../../public/images/home/38577258a3711dfb21407d5e146a7d6d148fdf5a.png'

const slides = [
    { id: 1, img: sliderImage01, title: 'O7 MALL – O7', location: 'New Damietta' },
    { id: 2, img: sliderImage02, title: 'O7 MALL – O7', location: 'New Damietta' },
    { id: 3, img: sliderImage01, title: 'O7 MALL – O7', location: 'New Damietta' },
    { id: 4, img: sliderImage02, title: 'O7 MALL – O7', location: 'New Damietta' },
]

export default function ShortsPage() {
    const containerRef = useRef<HTMLDivElement>(null)

    const scroll = (dir: 'left' | 'right') => {
        if (!containerRef.current) return
        const width = containerRef.current.clientWidth
        containerRef.current.scrollBy({ left: dir === 'left' ? -width : width, behavior: 'smooth' })
    }

    return (
        <>
            <Head>
                <title>Our Shorts – O7 Mall</title>
                <meta name="description" content="A glimpse into our journey, one reel at a time." />
            </Head>

            <main className=" bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-center text-sm font-semibold text-blue-600 uppercase">
                        Our Shorts
                    </h3>
                    <h2 className="mt-2 text-center text-3xl font-serif">
                        A glimpse into our journey, one reel at a time.
                    </h2>

                    <div className="relative mt-8">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll('left')}
                            aria-label="Previous"
                            className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 z-10"
                        >
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.79289 19.2559C10.1834 19.6465 10.8166 19.6465 11.2071 19.2559C11.5976 18.8654 11.5976 18.2322 11.2071 17.8417L6.91421 13.5488L20.5 13.5488C21.0523 13.5488 21.5 13.1011 21.5 12.5488C21.5 11.9965 21.0523 11.5488 20.5 11.5488L6.91421 11.5488L11.2071 7.25593C11.5976 6.86541 11.5976 6.23225 11.2071 5.84172C10.8166 5.4512 10.1834 5.4512 9.79289 5.84172L3.79289 11.8417C3.40237 12.2322 3.40237 12.8654 3.79289 13.2559L9.79289 19.2559Z" fill="white" />
                            </svg>
                        </button>

                        {/* Scrollable Track */}
                        <div className="px-15">
                            <div ref={containerRef} className="flex space-x-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
                                {slides.map((s) => (
                                    <div
                                        key={s.id}
                                        className="snap-start min-w-[280px] md:min-w-[320px] lg:min-w-[300px] h-[500px] bg-white rounded-xl overflow-hidden relative"
                                    >
                                        {/* Full-height Image */}
                                        <div className="relative w-full h-full">
                                            <Image src={s.img} alt={s.title} fill className="object-cover" />
                                        </div>

                                        {/* Play Overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16">
                                                <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M45.0681 90.5488C69.9211 90.5488 90.0681 70.4018 90.0681 45.5488C90.0681 20.696 69.9211 0.548828 45.0681 0.548828C20.2153 0.548828 0.0681152 20.696 0.0681152 45.5488C0.0681152 70.4018 20.2153 90.5488 45.0681 90.5488ZM38.9821 25.501L67.2006 41.1778C70.6296 43.0828 70.6296 48.0148 67.2006 49.9198L38.9821 65.5968C34.9828 67.8183 30.0681 64.9268 30.0681 60.3518V30.7459C30.0681 26.171 34.9828 23.2792 38.9821 25.501Z"
                                                        fill="white"
                                                        fillOpacity="0.5"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Title Overlay at Bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                            <h3 className="text-white text-lg font-semibold">{s.title}</h3>
                                            <p className="text-gray-200 text-sm">{s.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
            </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll('right')}
                            aria-label="Next"
                            className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 z-10"
                        >
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2071 5.84172C14.8166 5.4512 14.1834 5.4512 13.7929 5.84172C13.4024 6.23225 13.4024 6.86541 13.7929 7.25593L18.0858 11.5488H4.5C3.94772 11.5488 3.5 11.9965 3.5 12.5488C3.5 13.1011 3.94772 13.5488 4.5 13.5488H18.0858L13.7929 17.8417C13.4024 18.2322 13.4024 18.8654 13.7929 19.2559C14.1834 19.6465 14.8166 19.6465 15.2071 19.2559L21.2071 13.2559C21.5976 12.8654 21.5976 12.2322 21.2071 11.8417L15.2071 5.84172Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </main>

            {/* Hide scrollbar */}
            <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;   /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;           /* Chrome, Safari, Opera */
        }
      `}</style>
        </>
    )
}
