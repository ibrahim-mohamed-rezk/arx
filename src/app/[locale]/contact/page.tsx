"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaCalendarAlt,
} from "react-icons/fa";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const iconWrapper =
    "w-8 h-8 flex items-center justify-center rounded-full bg-[#035B8D] text-white font-['Lato']";
const inputStyle =
    "bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#035B8D] font-['Lato']";

const ContactPage = () => {
    const [phone, setPhone] = useState("");

    return (
        <div className="bg-white font-['Cinzel']">
            {/* Header Section */}
            <div className="relative w-full h-[80vh] text-white bg-black">
                <Image
                    src="/images/home/banner1.png"
                    fill
                    className="object-cover object-center z-0 opacity-20"
                    alt="banner"
                />
                <div className="absolute inset-0 bg-opacity-60 flex flex-col justify-start items-center pt-20 text-center px-4 z-10">
                    <h2 className="text-[clamp(2rem,5vw,3rem)] font-['Cinzel']">
                        CONTACT US
                    </h2>
                    <p className="mt-4 text-[clamp(0.875rem,2.5vw,1rem)] font-['Lato']">
                        We’re Always Available For Your Real Estate Needs 24/7.
                    </p>
                    <p className="text-[clamp(0.875rem,2.5vw,1rem)] font-['Lato']">
                        Our Team Is Ready To Assist And Answer Your Questions Anytime.
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="flex justify-center -mt-52 z-10 relative px-4">
                <div className="bg-white shadow-lg rounded-3xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 p-6 gap-6">
                    {/* Left Side - Info */}
                    <div className="space-y-4 text-gray-700 md:col-span-2">
                        <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-['Lato'] text-[#035B8D]">
                            Reach Us
                        </h3>
                        <p className="text-[clamp(0.875rem,2.5vw,1rem)]">
                            we’re here to help and always happy to hear from you! 📞
                        </p>
                        <ul className="space-y-4 text-[clamp(0.875rem,2.5vw,1rem)]">
                            <li className="flex items-start gap-3">
                                <span className={iconWrapper}>
                                    <FaMapMarkerAlt />
                                </span>
                                <div>
                                    <p className="font-['Lato']">Office Address</p>
                                    <p>
                                        New Cairo - south 90 St- top 90 building
                                        <br />
                                        New Damietta - the 3rd district – 15th St
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={iconWrapper}>
                                    <FaPhoneAlt />
                                </span>
                                <div>
                                    <p className="font-['Lato']">Phone Number</p>
                                    <p>16591</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={iconWrapper}>
                                    <FaEnvelope />
                                </span>
                                <div>
                                    <p className="font-['Lato']">Email Us</p>
                                    <p>info@areeg.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className={iconWrapper}>
                                    <FaCalendarAlt />
                                </span>
                                <div>
                                    <p className="font-['Lato']">Schedule Meeting</p>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-4 border-t">
                            <p className="text-sm font-['Lato'] mb-2">Follow Our Social Media</p>
                            <div className="flex space-x-3">
                                <span className={iconWrapper}>
                                    <FaFacebookF />
                                </span>
                                <span className={iconWrapper}>
                                    <FaInstagram />
                                </span>
                                <span className={iconWrapper}>
                                    <FaLinkedinIn />
                                </span>
                                <span className={iconWrapper}>
                                    <FaYoutube />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="space-y-6 md:col-span-3">
                        <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-['Lato'] pt-12 text-[#035B8D]">
                            Send Us A Message
                        </h3>
                        <form className="space-y-4 font-['Lato']">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className={inputStyle}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-sm mb-1">
                                        Phone Number
                                    </label>
                                    <PhoneInput
                                        international
                                        defaultCountry="EG"
                                        value={phone}
                                        onChange={(value) => setPhone(value || "")}
                                        id="phone"
                                        placeholder="Enter phone number"
                                        className="w-full bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#035B8D] font-['Lato']"
                                        inputClass="phone-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="interest" className="block text-sm mb-1">
                                        Subject
                                    </label>
                                    <select id="interest" className={inputStyle}>
                                        <option>Interested In</option>
                                        <option>Commercial</option>
                                        <option>Housing</option>
                                        <option>Administrative</option>
                                        <option>Medical</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Enter your message"
                                    className={inputStyle}
                                    rows={4}
                                ></textarea>
                            </div>

                            <div className="flex flex-row-reverse">
                                <button
                                    type="submit"
                                    className="bg-[#035B8D] text-white px-6 py-2 rounded hover:bg-opacity-90 w-full sm:w-auto"
                                >
                                    Send
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>

            {/* Locations Section */}
            <div className="text-center mt-20 px-4">
                <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-['Lato']">
                    OUR LOCATIONS
                </h3>
                <div className="mt-8 w-full h-96 bg-gray-200 flex justify-center items-center">
                    {/* Map Placeholder */}
                    <p className="text-gray-500 text-[clamp(0.875rem,2.5vw,1rem)]">
                        [Map Showing City & Street Locations]
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
