import React from 'react';

const Impact = () => {

    const stats = [
        {
            value: "50K+",
            label: "Active Users",
        },
        {
            value: "100K+",
            label: "Products Listed",
        },
        {
            value: "98%",
            label: "Success Rate",
        },
        {
            value: "24/7",
            label: "Support",
        },
    ];

    return (
        <>
            <div className='py-[55px] lg:py-[85px] bg-[#FBFCFC]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] sm:text-[35px] lg:text-[48px] font-bold text-[#1F2937] leading-[1.2]'>Numbers That Speak for<br className='hidden sm:block'/> Our Success</h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] max-w-[550px] mx-auto text-center'>Join thousands of satisfied users who trust our platform</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
                        {stats.map((stat, index) => (
                            <div key={index} className='text-center'>
                                <h3 className="text-[32px] lg:text-[38px] font-bold text-[#219E64] mb-1"> {stat.value}</h3>
                                <p className="text-[16px] text-[#6D7873] ">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Impact;