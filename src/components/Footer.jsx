import { Facebook, Instagram, Mail, MapPin, PhoneCall, ShoppingBag, Twitter} from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-[#FBFCFB] shadow-[0_-3px_6px_rgba(0,0,0,0.1)]'>
                <div className='container'>
                    <div className='py-[35px] grid grid-cols-12 gap-5 gap-y-[30px] border-b border-[#E15C43]'>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-4 max-w-[320px]'>
                        <button className='flex items-center gap-1.5 text-[20px] sm:text-[22px] font-bold text-[#E15C43]'><ShoppingBag /><span>ProductHub</span></button>
                        <p className='text-[18px] text-black pt-5'>ProductHub brings you a curated selection of quality products designed to elevate your everyday lifestyle.</p>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-3'>
                        <h4 className='text-[21px] text-black font-semibold pb-[15px]'>Quick Links</h4>
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[18px] text-[#141414] font-medium'>Services</li>
                            <li className='text-[18px] text-[#141414] font-medium'>Contact Us</li>
                            <li className='text-[18px] text-[#141414] font-medium'>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-3'>
                        <h4 className='text-[21px] text-black font-semibold pb-[15px]'>Contact Us</h4>
                        <ul className='flex flex-col gap-3'>
                            <li className='text-[18px] text-[#141414] font-medium flex items-center gap-[7px]'><Mail /><span>info@producthub.com</span></li>
                            <li className='text-[18px] text-[#141414] font-medium flex items-center gap-[7px]'><PhoneCall /><span>+880 1XXX-XXXXXX</span></li>
                            <li className='text-[18px] text-[#141414] font-medium flex items-center gap-[7px]'><MapPin /><span>Dhaka, Bangladesh</span></li>
                        </ul>
                    </div>
                    <div className='col-span-12 sm:col-span-6 lg:col-span-2'>
                        <h4 className='text-[21px] text-black font-semibold pb-[15px]'>Follow Us</h4>
                        <ul className='flex items-center gap-6'>
                            <li className='text-[#E15C43] hover:text-[#069251] duration-300 cursor-pointer'><Instagram size={30} /></li>
                            <li className='text-[#E15C43] hover:text-[#069251] duration-300 cursor-pointer'><Facebook size={30} /></li>
                            <li className='text-[#E15C43] hover:text-[#069251] duration-300 cursor-pointer'><Twitter size={28} /></li>
                        </ul>
                    </div>
                    </div>
                    <div className='py-7 text-center'>
                        <p className='text-[#141414] text-[16px] font-medium'>© 2025 ProductHub. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;