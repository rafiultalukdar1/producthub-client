'use client';

import axios from 'axios';
import { Eye, Tag } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LatestProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://producthub-server-pi.vercel.app/latest-products')
            .then(res => setProducts(res.data))
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <>
            <div className='py-[55px] lg:py-[85px] bg-[#FBFCFC]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] sm:text-[35px] lg:text-[48px] font-bold text-[#1F2937] leading-[1.2]'>Latest Products</h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] max-w-[550px] mx-auto text-center'>Explore fresh arrivals curated just for you.</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                        {products.map(product => (
                            <div key={product._id} className='bg-white rounded-lg shadow hover:shadow-lg transition'>
                                <img src={product.imageUrl} alt={product.title} className="w-full h-[300px] object-cover rounded-t-lg"/>
                                <div className='pt-3 px-4 pb-4'>
                                    <p className='inline-flex items-center gap-1 py-0.5 px-2 bg-[#E7F8F2] text-[12px] text-[#10B77F] font-medium rounded-full'><Tag size={12} /><span>{product.category}</span></p>
                                    <h2 className='pt-2 text-[20px] font-semibold'>{product.title}</h2>
                                    <p className='text-[#6D7873] text-[15px] py-1.5 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'>{product.description}</p>
                                    <h4 className='text-[20px] font-semibold text-[#10B77F] pt-1'>$ {product.price}</h4>

                                    {/* <button className='py-1.5 w-full bg-[#E15C43] hover:bg-[#1F1F1F] transition rounded mt-3 text-white text-[17px] font-medium text-center cursor-pointer flex items-center justify-center gap-1.5'><Eye size={18} /><span>View Details</span></button> */}
                                    <Link href={`/products-details/${product._id}`}>
                                        <button className='py-1.5 w-full bg-[#E15C43] hover:bg-[#1F1F1F] transition rounded mt-3 text-white text-[17px] font-medium text-center cursor-pointer flex items-center justify-center gap-1.5'>
                                            <Eye size={18} />
                                            <span>View Details</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center'>
                        <Link href="/product" className='bg-[#E15C43] hover:bg-[#1F1F1F] mt-10 inline-block text-white text-[17px] font-medium py-2 px-7 rounded-md text-center'>See All Products</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestProducts;