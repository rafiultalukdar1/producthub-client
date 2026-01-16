"use client";

import useAuth from '@/contexts/useAuth';
import axios from 'axios';
import { Eye, Tag } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const {loading} = useAuth();

    useEffect(() => {
        axios.get('https://producthub-server-pi.vercel.app/products')
            .then(res => setProducts(res.data))
            .catch(err => {
                console.log(err)
            });
    }, []);

    // spiner
    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    // Filtered products based on search and category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            <div className='py-[55px] lg:py-[85px] bg-[#FBFCFC]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] sm:text-[35px] lg:text-[48px] font-bold text-[#1F2937] leading-[1.2]'>All Products</h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] max-w-[550px] mx-auto text-center'>Explore all available items across our entire store.</p>
                    {/* Search & Filter */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
                        <input
                            type="text"
                            placeholder="Search events by name..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="form-input max-w-[400px]" />
                        <select
                            value={selectedCategory}
                            onChange={e => setSelectedCategory(e.target.value)}
                            className="form-input max-w-[400px]">
                            <option value="">All Event Types</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Audio">Audio</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Computer">Computer</option>
                            <option value="Wearables">Wearables</option>
                            <option value="Home">Home</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div key={product._id} className='bg-white rounded-lg shadow hover:shadow-lg transition'>
                                    <img src={product.imageUrl} alt={product.title} className="w-full h-[300px] object-cover rounded-t-lg"/>
                                    <div className='pt-3 px-4 pb-4'>
                                        <p className='inline-flex items-center gap-1 py-0.5 px-2 bg-[#E7F8F2] text-[12px] text-[#10B77F] font-medium rounded-full'><Tag size={12} /><span>{product.category}</span></p>
                                        <h2 className='pt-2 text-[20px] font-semibold'>{product.title}</h2>
                                        <p className='text-[#6D7873] text-[15px] pt-1.5 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'>{product.description}</p>
                                        <h4 className='text-[20px] font-semibold text-[#10B77F] pt-1'>$ {product.price}</h4>
                                        <Link href={`/products-details/${product._id}`}>
                                            <button className='py-1.5 w-full bg-[#E15C43] hover:bg-[#1F1F1F] transition rounded mt-3 text-white text-[17px] font-medium text-center cursor-pointer flex items-center justify-center gap-1.5'>
                                                <Eye size={18} />
                                                <span>View Details</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='col-span-full text-center text-[#6D7873] text-[16px]'>No products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;