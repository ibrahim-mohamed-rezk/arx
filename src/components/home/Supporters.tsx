import React from 'react';
import Image from 'next/image';
import partnersImg from '../../../public/images/home/Our Partners.png';
import bgImage from '../../../public/images/home/525ab7523c86871fbf6680382ffeb83b63451acc.jpg';

const SupportersPage: React.FC = () => {
    return (
        <section className="text-white ">
            {/* Metrics with background image and semi-transparent overlay */}
            <div
                className="relative -pb-16  px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center  overflow-hidden"
                style={{ backgroundImage: `url(${bgImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#060B0EE0]" />
                <div className="relative md:border-r md:border-white/50">
                    <span className="text-4xl font-bold">
                        25<span className="text-2xl align-top">+</span>
                    </span>
                    <p className="mt-2 text-sm">Total Years Of Experience</p>
                </div>
                <div className="relative md:border-r md:border-white/50">
                    <span className="text-4xl font-bold">
                        2.5K<span className="text-2xl align-top">+</span>
                    </span>
                    <p className="mt-2 text-sm">Units Sold</p>
                </div>
                <div className="relative md:border-r md:border-white/50">
                    <span className="text-4xl font-bold">
                        170<span className="text-2xl align-top">+</span>
                    </span>
                    <p className="mt-2 text-sm">Total Constructions</p>
                </div>
                <div className="relative">
                    <span className="text-4xl font-bold">
                        2K<span className="text-2xl align-top">+</span>
                    </span>
                    <p className="mt-2 text-sm">Customers Number</p>
                </div>
            </div>

            {/* Our Partners Image below metrics */}
            <div className="-mt-8  relative flex justify-center">
                <Image
                    src={partnersImg}
                    alt="Our Partners"
                    width={700}
                    height={150}
                />
            </div>
        </section>
    );
};

export default SupportersPage;
