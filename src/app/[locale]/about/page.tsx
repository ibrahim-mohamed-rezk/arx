import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
    return (
        <div className="bg-white text-gray-800 pt-5">
            {/* Vision / Mission / Values */}
            <section className="max-w-7xl mx-auto py-16 px-4 md:px-8 grid md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 className="text-xl font-semibold mb-4">VISION</h3>
                    <p>To be Egypt&apos;s top real estate destination through innovation, trust, and exceptional service.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">MISSION</h3>
                    <p>Deliver unique, top-tier developments that redefine luxury living in Egypt’s growing communities.</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">VALUES</h3>
                    <p>Integrity, Innovation, Excellence, and Customer Focus guide every project we undertake.</p>
                </div>
            </section>

            {/* Partners */}
            <section className="bg-[#0B0B0C] py-10 px-4 text-center">
                <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8">Our Success Partners</h2>
                <div className="flex justify-center items-center space-x-8 flex-wrap">
                    <Image src="/partners/partner1.png" height={48} width={48} alt="Partner 1" />
                    <Image src="/partners/partner1.png" height={48} width={48} alt="Partner 1" />
                    <Image src="/partners/partner2.png" height={48} width={48} alt="Partner 2" />
                    <Image src="/partners/partner3.png" height={48} width={48} alt="Partner 3" />
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex flex-wrap justify-center gap-10">
                        <div>
                            <div className="text-4xl text-blue-600 font-bold">25+</div>
                            <p className="mt-2">Years of Experience</p>
                        </div>
                        <div>
                            <div className="text-4xl text-blue-600 font-bold">2.5k</div>
                            <p className="mt-2">Happy Customers</p>
                        </div>
                        <div>
                            <div className="text-4xl text-blue-600 font-bold">100+</div>
                            <p className="mt-2">Successful Projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Board of Directors */}
            <section className="py-20 bg-gray-100 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                        Chairman Of The Board Of Directors Speech
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {/* Director Card */}
                        {['Mohamed Salah', 'Ahmed Ali', 'Omar Nabil', 'Youssef Hany'].map((name, index) => (
                            <div key={index} className="bg-white p-6 shadow-md rounded-md">
                                <Image
                                    src={`/directors/director${index + 1}.jpg`}
                                    alt={name}
                                    width={256}
                                    height={256}
                                    className="w-full h-64 object-cover mb-4 rounded"
                                />
                                <h3 className="text-lg font-semibold mb-2">{name}</h3>
                                <p className="text-sm text-gray-600">
                                    “We are committed to shaping tomorrow’s real estate landscape through our unmatched vision.”
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
