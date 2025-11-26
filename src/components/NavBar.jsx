"use client";
import {ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {

    const pathname = usePathname();

    const links = <>
        <Link href="/" className={pathname === "/" ? "active-link" : ""}>Home</Link>
        <Link href="/product" className={pathname === "/product" ? "active-link" : ""}>All Products</Link>
        <Link href="/about" className={pathname === "/about" ? "active-link" : ""}>About</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active-link" : ""}>Contact</Link>
    </>

    return (
        <>
            <div className='sticky top-0 z-99 py-2.5 bg-[#F8F8F8] shadow-sm'>
                <div className='container'>
                    <div className='navbar p-0'>
                        <div className='navbar-start'>
                            <div className='dropdown'>
                                <div tabIndex={0} role='button' className='lg:hidden cursor-pointer mr-3.5'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-10' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /> </svg>
                                </div>
                                <nav tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-2 mt-3 w-52 p-2 shadow px-5 py-3 space-y-1.5 font-semibold text-[#141414]">
                                    {links}
                                </nav>
                            </div>
                            <Link href="/" className='flex items-center gap-1.5 text-[20px] sm:text-[22px] font-bold text-[#219E64]'><ShoppingBag /><span>ProductHub</span></Link>
                        </div>
                        <div className='navbar-center hidden lg:flex'>
                            <nav className='flex items-center gap-[22px] font-semibold text-[#141414]'>
                                {links}
                            </nav>
                        </div>
                        <div className='navbar-end'>
                            <div className="flex items-center gap-3">
                                <Link href="/login"><button className={`py-1.5 px-5 rounded-lg text-[18px] font-semibold cursor-pointer border ${pathname === "/login" ? "bg-[#219E64] text-white border-[#219E64]" : "bg-white text-[#219E64] border-[#219E64]"}`}>Login</button></Link>
                                <Link href="/register" className='hidden sm:block'><button className={`py-1.5 px-5 rounded-lg text-[18px] font-semibold cursor-pointer border ${pathname === "/register" ? "bg-[#219E64] text-white border-[#219E64]" : "bg-white text-[#219E64] border-[#219E64]"}`}>Register</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;