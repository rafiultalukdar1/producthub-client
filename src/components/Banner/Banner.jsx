import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="py-[90px] lg:py-[145px] bg-linear-to-r from-[#038b3e] to-[#2bad64]">
                <div className='container'>
                    <h2 className='text-[32px] sm:text-[38px] md:text-[46px] lg:text-[65px] font-extrabold text-white text-center leading-[1.2]'>Build Your Product Empire</h2>
                    <p className='text-[18px] md:text-[20px] text-center font-medium text-white max-w-[620px] mx-auto'>Manage, showcase, and sell your products with our powerful platform. Create stunning product listings, track inventory, and grow your business effortlessly.</p>
                    <div className='flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-5 mt-8'>
                        <Link href="/product"><button className='bg-[#2694c0] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#1b83ac] transition justify-center cursor-pointer'><span>Browse Products</span> <ArrowRight /></button></Link>
                        <Link href="/add-product"><button className='border border-white text-white bg-[#ffffff2f] px-6 py-3 rounded-lg hover:bg-white hover:text-[#219E64] transition font-medium cursor-pointer'>Add Your Product</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;