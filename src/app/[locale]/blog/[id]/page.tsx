"use client";

/* next.config.js (add this to configure allowed image domains):
module.exports = {
  images: {
    domains: ['via.placeholder.com', 'placehold.co'],
  },
};
*/

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import BlogMain from '../../../../../public/images/home/BlogMain.png';
import PrimeMiniste1 from '../../../../../public/images/home/PrimeMiniste1.png';
import PrimeMiniste2 from '../../../../../public/images/home/PrimeMiniste2.png';
import PrimeMiniste3 from '../../../../../public/images/home/PrimeMiniste3.png';

// Load Lato font
const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

// Banner images array
const bannerImages = [
    { src: BlogMain, alt: 'Downtown view' },
    { src: PrimeMiniste1, alt: 'Prime Minister Office 1' },
    { src: PrimeMiniste2, alt: 'Prime Minister Office 2' },
    { src: PrimeMiniste3, alt: 'Prime Minister Office 3' },
];

// Captions for gallery images
const captions = [
    'Prime Minister Office 1',
    'Prime Minister Office 2',
    'Prime Minister Office 3',
];

const InvestmentOpportunityPage: NextPage = () => {
    const [current, setCurrent] = useState(0);
    const length = bannerImages.length;

    // Automatic slide every 1 second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % length);
        }, 100000);
        return () => clearInterval(timer);
    }, [length]);

    return (
        <>
            {/* Full-Width Automatic Slider */}
            <div className="relative w-full overflow-hidden p-5 px-10 pt-20 rounded-lg">
                {bannerImages.map(({ src, alt }, idx) => (
                    idx === current && (
                        <Image
                            key={idx}
                            src={src}
                            alt={alt}
                            className="w-full h-auto object-cover max-h-[80vh] rounded-lg"
                            priority
                        />
                    )
                ))}
                {/* Social Icons */}
                <div className="flex items-center  justify-between py-15 text-[clamp(1rem,1.5vw,1.125rem)]">
                    {/* Date & Title */}
                    <p className="text-gray-500 uppercase mt-4 text-[clamp(0.875rem,1vw,1rem)]">
                        Tuesday, 28 March 2023
                    </p>
                    <div className='flex items-center mt-4 space-x-4 py-15 text-[clamp(1rem,1.5vw,1.125rem)]'>
                        <a href="#" aria-label="Share on Facebook">
                            <FaFacebookF className="text-blue-600 hover:text-blue-800 cursor-pointer" />
                        </a>
                        <a href="#" aria-label="Share on Twitter">
                            <FaTwitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
                        </a>
                        <a href="#" aria-label="Share on LinkedIn">
                            <FaLinkedinIn className="text-blue-700 hover:text-blue-900 cursor-pointer" />
                        </a>
                    </div>
                </div>
                <hr className='text-gray-500' />
            </div>

            <div className={`${lato.className} max-w-4xl mx-auto px-4 py-8 font-sans`}>


                <h1 className="mt-2 font-bold text-[clamp(2rem,3vw,2.5rem)] leading-tight">
                    Why Is The Downtown Area an Investment Opportunity That Will Not Be Repeated In The Administrative Capital?
                </h1>


                {/* Article Content */}
                <article className="mt-8 space-y-6 text-gray-700">
                    <p className="text-[clamp(1rem,1.5vw,1.125rem)]">
                        It is considered one of the most luxurious and sought-after areas, offering unparalleled infrastructure, premium amenities, and a prime location that promises high returns on investment.
                    </p>

                    <h2 className="mt-6 font-semibold text-[clamp(1.5rem,2.5vw,2rem)]">
                        The Downtown Area Is Strategically Located In The Heart Of The New Administrative Capital, Surrounded By Major Landmarks Such As:
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-[clamp(1rem,1.5vw,1.125rem)]">
                        <li>Residential districts</li>
                        <li>Government buildings</li>
                        <li>Commercial centers</li>
                        <li>Parks and green spaces</li>
                        <li>Transport hubs</li>
                    </ul>

                    <h2 className="mt-6 font-semibold text-[clamp(1.5rem,2.5vw,2rem)]">
                        Reasons As An Unmatched Investment Opportunity:
                    </h2>
                    <ol className="list-decimal list-inside mt-4 space-y-2 text-[clamp(1rem,1.5vw,1.125rem)]">
                        <li>Prime location with high foot traffic.</li>
                        <li>High-end infrastructure and utilities.</li>
                        <li>Strong government support and incentives.</li>
                        <li>Rapidly developing surrounding areas.</li>
                        <li>Guaranteed capital appreciation.</li>
                    </ol>
                </article>

                {/* Gallery Images with Captions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                    {[PrimeMiniste1, PrimeMiniste2, PrimeMiniste3].map((src, idx) => (
                        <div key={idx} className="relative rounded-lg overflow-hidden">
                            <Image
                                src={src}
                                alt={captions[idx]}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 px-3">
                                <p className="text-white text-[clamp(0.875rem,1vw,1rem)]">
                                    {captions[idx]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default InvestmentOpportunityPage;
