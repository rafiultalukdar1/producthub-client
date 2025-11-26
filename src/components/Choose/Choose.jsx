import React from 'react';
import { BookOpen, Users, BadgeCheck, Clock, TrendingUp, Trophy, Box, ChartNoAxesCombined, Gift, Zap } from "lucide-react";

const Choose = () => {

    const features = [
        {
            icon: <Box className="text-[#21b6c5] w-6 h-6" />,
            bg: "bg-[#E6FAFC]",
            title: "Easy Product Management",
            description: "Add, edit, and organize your products with our intuitive interface. Complete control at your fingertips.",
        },
        {
            icon: <ChartNoAxesCombined className="text-[#f29a7a] w-6 h-6" />,
            bg: "bg-[#FFF1EC]",
            title: "Analytics & Insights",
            description: "Track performance metrics and gain valuable insights into your product catalog's success.",
        },
        {
            icon: <Gift className="text-[#21b6c5] w-6 h-6" />,
            bg: "bg-[#E6FAFC]",
            title: "Secure & Reliable",
            description: "Your data is protected with enterprise-grade security. Focus on growth, not worries.",
        },
        {
            icon: <Zap className="text-[#f29a7a] w-6 h-6" />,
            bg: "bg-[#FFF1EC]",
            title: "Lightning Fast",
            description: "Optimized for speed and performance. Manage thousands of products without breaking a sweat.",
        }
    ];

    return (
        <>
            <div className='py-[55px] lg:py-[85px]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] lg:text-[48px] font-bold text-[#1F2937]'>Powerful Features for Your Business</h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] mx-auto text-center'>Everything you need to manage and grow your product catalog, all in one place.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                        {
                            features.map((item, index) => ( <div key={index} className="border border-[#E5E7EB] rounded-2xl p-7 bg-white hover:shadow-md transition">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}>{item.icon}</div>
                                <h3 className="text-[20px] font-semibold text-[#141414] mb-2">{item.title}</h3>
                                <p className="text-[15px] text-[#6D7873]">{item.description}</p>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Choose;