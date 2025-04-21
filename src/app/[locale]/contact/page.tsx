import React from 'react';
import Image from 'next/image';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

const ContactUs: React.FC = () => {
    return (
        <div className="w-full h-screen relative">
            {/* Fullscreen Background Image */}
            <div className="w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-0">
                <Image
                    src="/images/home/banner1.png"
                    layout="fill"
                    objectFit="cover"
                    alt="banner"
                />
            </div>

            {/* Overlay Content */}
            <div className="w-full h-screen px-[clamp(10px,2.6041667vw,200px)] fixed top-0 z-10 flex items-center justify-center">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Contact Form & Info */}
                    <div className="flex flex-col gap-10 bg-white bg-opacity-90 rounded-xl shadow-xl p-6 md:p-10 max-w-3xl w-full relative z-[1]">
                        <h2 className="text-3xl font-bold text-center text-gray-900">CONTACT US</h2>
                        <p className="text-center text-gray-700">
                            We&apos;re Always Here For You! Feel Free To Reach Out —
                            <br />
                            Our Team Is Ready To Assist And Answer Your Questions Anytime.
                        </p>

                        <div className="flex flex-col md:flex-row gap-10">
                            {/* Contact Info */}
                            <div className="flex-1 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">Reach Us:</h3>
                                <ul className="space-y-4 text-sm text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <FaMapMarkerAlt className="mt-1 text-primary" />
                                        <span>Office 25, Building 17, New Cairo</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaPhoneAlt className="mt-1 text-primary" />
                                        <span>Call us: 16591</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <FaEnvelope className="mt-1 text-primary" />
                                        <span>Email us: info@arx.com</span>
                                    </li>
                                </ul>
                                <div>
                                    <p className="font-semibold mb-2">Follow Us</p>
                                    <div className="flex gap-4 text-primary text-lg">
                                        <FaFacebookF />
                                        <FaTwitter />
                                        <FaInstagram />
                                        <FaLinkedinIn />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">Send Us A Message</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="border p-2 rounded w-full"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="border p-2 rounded w-full"
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Your Message"
                                        rows={4}
                                        className="border p-2 rounded w-full"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Optional: Profile or Office Image Section */}
                    <Image
                        src="https://placehold.co/160x160"
                        width={160}
                        height={160}
                        className="w-40 h-40 rounded-full border border-white"
                        alt="Team"
                    />
                    <Image
                        src="https://placehold.co/160x160"
                        className="w-40 h-40 rounded-full border border-white"
                        alt="Office"
                    />
                    <Image
                        src="https://placehold.co/160x160"
                        className="w-40 h-40 rounded-full border border-white"
                        alt="Location"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
