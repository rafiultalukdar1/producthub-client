"use client";

import useAuth from '@/contexts/useAuth';
import {ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NavBar = () => {

    const { user, logOut } = useAuth();
    const [openProfile, setOpenProfile] = useState(false);

    // Log Out
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("You logged out successfully!");
            })
            .catch(error => {
                toast.error(error.message);
            });
    };



    const pathname = usePathname();
    const links = <>
        <Link href="/" className={pathname === "/" ? "active-link" : ""}>Home</Link>
        <Link href="/product" className={pathname === "/product" ? "active-link" : ""}>All Products</Link>
        <Link href="/about" className={pathname === "/about" ? "active-link" : ""}>About</Link>
        <Link href="/contact" className={pathname === "/contact" ? "active-link" : ""}>Contact</Link>
    </>

    const privetLinks = <>
        <Link href="/add-product" className={pathname === "/add-product" ? "active-link" : ""}>Add Product</Link>
        <Link href="/manage-products" className={pathname === "/manage-products" ? "active-link" : ""}>Manage Products</Link>
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
                            {
                                user ? ( 
                                <div className="relative">
                                    <img src={user?.photoURL ?? user?.reloadUserInfo?.photoURL ?? "/default-profile.png" } alt="Profile" className="w-11 h-11 object-cover rounded-full cursor-pointer" onClick={()=> setOpenProfile(!openProfile)} /> {openProfile && ( <div className="absolute right-0 mt-2 w-[255px] bg-white rounded shadow-lg p-4 flex flex-col gap-2 z-50">
                                        <span className="font-medium text-[#141414] text-[16px]">Name: {user?.displayName}</span>
                                        <span className="text-sm text-gray-600">Email: {user?.email}</span>
                                        <div onClick={() => setOpenProfile(false)} className='flex flex-col gap-2 py-1 text-[18px] font-semibold text-[#141414]'>
                                            {privetLinks}
                                        </div>
                                        <button onClick={() => { setOpenProfile(false); handleLogOut(); }} className="mt-2 py-1.5 px-3 bg-[#219E64] text-white rounded hover:bg-[#1b7d4f] transition cursor-pointer">Logout</button>
                                    </div> )}
                                </div>
                            ) : ( 
                                <div className="flex items-center gap-3">
                                    <Link href="/login"><button className={`py-1.5 px-5 rounded-lg text-[18px] font-semibold cursor-pointer border ${ pathname==="/login" ? "bg-[#219E64] text-white border-[#219E64]" : "bg-white text-[#219E64] border-[#219E64]" }`}> Login</button></Link>
                                    <Link href="/register" className="hidden sm:block"><button className={`py-1.5 px-5 rounded-lg text-[18px] font-semibold cursor-pointer border ${ pathname==="/register" ? "bg-[#219E64] text-white border-[#219E64]" : "bg-white text-[#219E64] border-[#219E64]" }`}>Register</button></Link>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;