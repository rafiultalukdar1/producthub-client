import React from 'react';

const AboutPage = () => {
    return (
        <>
            <div className="py-[60px] lg:py-[90px]">
                <div className="container">
                    <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#141414] text-center"> About ProductsHub </h1>
                    <p className="text-[#65758B] text-[16px] sm:text-[18px] text-center mt-4 max-w-2xl mx-auto"> Your one-stop online store for quality products across multiple categories. At ProductsHub, we aim to make shopping seamless, reliable, and enjoyable for every customer. </p> {/* Flex Section: Mission/Vision + Why Choose */} <div className="mt-12 flex flex-col lg:flex-row gap-10"> {/* Left Side: Mission & Vision */} <div className="flex-1 flex flex-col gap-6">
                            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                                <h2 className="text-[24px] font-semibold text-[#141414] mb-3">Our Mission</h2>
                                <p className="text-[#65758B] text-[15px]"> We strive to provide a wide variety of products at competitive prices, ensuring quality and reliability. Our mission is to bring convenience and trust to online shopping, making it accessible to everyone. </p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                                <h2 className="text-[24px] font-semibold text-[#141414] mb-3">Our Vision</h2>
                                <p className="text-[#65758B] text-[15px]"> To be the most customer-friendly online marketplace where users can discover, explore, and purchase products effortlessly. We envision a platform where quality meets affordability, creating happiness with every order. </p>
                            </div>
                        </div>
                        <div className="flex-1 p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#141414] mb-6"> Why Choose ProductsHub? </h2>
                            <ul className="space-y-4 text-[#65758B] text-[15px] list-disc list-inside">
                                <li>Wide range of high-quality products across multiple categories.</li>
                                <li>Seamless and secure online shopping experience.</li>
                                <li>Competitive prices and exclusive offers.</li>
                                <li>Reliable and timely delivery, wherever you are.</li>
                                <li>Friendly customer support to assist with every order.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;