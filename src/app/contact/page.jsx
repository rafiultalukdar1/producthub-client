"use client";

import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const ContactPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted!");
    };

    return (
        <>
            <div className="py-[60px] lg:py-[100px]">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#141414]"> Contact Us </h1>
                        <p className="text-[#65758B] text-[16px] sm:text-[18px] mt-4"> Have a question or want to reach out? Fill out the form below and we'll get back to you. </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="">
                            <div className="bg-white border border-[#E1E7EF] rounded-2xl px-6 py-4 flex flex-col items-center gap-1 shadow-sm hover:shadow-md transition transform mb-5">
                                <div className="bg-[#E7F8F2]  w-15 h-15 rounded-full flex items-center justify-center">
                                    <Mail className="text-[#219E64]" size={28} />
                                </div>
                                <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#141414] text-center"> Email </h4>
                                <p className="text-[15px] text-[#65758B] text-center"> info@producthub.com </p>
                            </div>
                            <div className="bg-white border border-[#E1E7EF] rounded-2xl px-6 py-4 flex flex-col items-center gap-1 shadow-sm hover:shadow-md transition transform mb-5">
                                <div className="bg-[#E7F8F2]  w-15 h-15 rounded-full flex items-center justify-center">
                                    <PhoneCall className="text-[#219E64]" size={28} />
                                </div>
                                <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#141414] text-center"> Call </h4>
                                <p className="text-[15px] text-[#65758B] text-center"> +880 1XXX-XXXXXX </p>
                            </div>
                            <div className="bg-white border border-[#E1E7EF] rounded-2xl px-6 py-4 flex flex-col items-center gap-1 shadow-sm hover:shadow-md transition transform mb-5">
                                <div className="bg-[#E7F8F2] w-15 h-15 rounded-full flex items-center justify-center">
                                    <MapPin className="text-[#219E64]" size={28} />
                                </div>
                                <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#141414] text-center"> Location </h4>
                                <p className="text-[15px] text-[#65758B] text-center"> Dhaka, Bangladesh </p>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4.5">
                                <div>
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" className="form-input" />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" className="form-input" />
                                </div>
                                <div>
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Your Message" rows={5} className="form-input" />
                                </div>
                                <button type="submit" className="mt-2 py-2.5 w-full bg-[#219E64] hover:bg-[#0c7e49] text-white font-medium rounded-lg transition cursor-pointer text-center"> Send Message </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;