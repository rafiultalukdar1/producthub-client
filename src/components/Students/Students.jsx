import React from 'react';
import { Star } from "lucide-react";

const Students = () => {

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "E-commerce Owner",
            initials: "SJ",
            text: "ProductHub transformed how I manage my online store. The interface is intuitive and the features are exactly what I needed.",
        },
        {
            name: "Michael Chen",
            role: "Product Manager",
            initials: "MC",
            text: "Best product management platform I've used. The analytics and inventory tracking features are game-changers.",
        },
        {
            name: "Emily Rodriguez",
            role: "Small Business Owner",
            initials: "ER",
            text: "As a small business owner, this platform gave me enterprise-level tools at an affordable price. Highly recommend!",
        },
    ];

    return (
        <>
            <div className='py-[55px] lg:py-[85px]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] lg:text-[48px] font-bold text-[#1F2937]'>What Our Users Say</h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] mx-auto text-center'>Don't just take our word for it - hear from our satisfied customers</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {testimonials.map((item, index) => (
                            <div key={index} className="border border-[#E5E7EB] bg-white rounded-2xl p-7 hover:shadow-md transition">
                                <div className="flex gap-1 mb-4">
                                    {Array(5).fill(0).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#F0754C] fill-[#F0754C]" />
                                    ))}
                                </div>
                                <p className="text-[15px] text-[#4B5563] leading-relaxed">{item.text}</p>
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="w-12 h-12 rounded-full bg-[#E6FAFC] flex items-center justify-center text-[#21b6c5] font-semibold">{item.initials}</div>
                                    <div>
                                        <h4 className="text-[16px] font-semibold text-[#141414]">{item.name}</h4>
                                        <p className="text-[14px] text-[#6D7873]">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Students;