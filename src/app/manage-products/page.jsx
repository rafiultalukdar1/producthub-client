"use client";

import useAuth from '@/contexts/useAuth';
import { Calendar, Delete, Eye, MapPin, Tag, Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManagePage = () => {
    const { user, loading } = useAuth();
    const [products, setProducts] = useState([]);
    const router = useRouter();

    // Fetch products
    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://producthub-server-pi.vercel.app/products-by-user?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [user]);

    // Protected Route
    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    if (loading || (!user && loading === false)) {
        return <div className='min-h-screen flex justify-center items-center'>
                <span className="loading loading-bars loading-xl"></span>
            </div>;
    }


    // Delete Handler
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This product will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, Delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://producthub-server-pi.vercel.app/products/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if (data.message === "Product deleted successfully") {
                        setProducts(prev => prev.filter(p => p._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Product has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    return (
        <>
            <div className='py-[60px] lg:py-[95px]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] sm:text-[35px] lg:text-[48px] font-bold text-[#1F2937] leading-[1.2]'>
                        Manage Products
                    </h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] text-center'>
                        View, edit, and manage all your products in one place
                    </p>

                    <div className='max-w-[890px] mx-auto mt-[30px] md:mt-[45px] space-y-7'>
                        {
                            products.map(product => (
                                <div key={product._id} className='flex flex-col md:flex-row border border-[#E1E7EF] rounded-lg lg:rounded-2xl p-4 md:pr-7 lg:items-center gap-5'>
                                    <div className='lg:w-[38%]'>
                                        <img src={product.imageUrl} alt={product.title} className="rounded-lg lg:rounded-2xl h-[280px] w-full md:w-[300px] object-cover shadow-sm"/>
                                    </div>
                                    <div className='lg:w-[62%]'>
                                        <p className='inline-flex items-center gap-1.5 py-1.5 px-4 bg-[#E7F8F2] text-[15px] text-[#10B77F] font-medium rounded-full mt-5'><Tag size={15} /><span>{product.category}</span></p>
                                        <h2 className='text-[20px] md:text-[22px] font-bold text-[#141414] pt-3'>{product.title}</h2>
                                        <p className='text-[#6D7873] text-[15px] py-1.5 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]'>{product.description}</p>
                                        <div className='flex flex-col gap-2.5 mt-2'>
                                            <div className="flex items-center gap-3">
                                                <div className="bg-[#E7F8F2] w-9 h-9 rounded-full flex items-center justify-center">
                                                    <Calendar size={18} className="text-[#219E64]" />
                                                </div>
                                                <h4 className="text-[18px] font-semibold text-[#141414]">
                                                    {new Date(product.date).toLocaleDateString("en-CA")}
                                                </h4>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="bg-[#E7F8F2] w-9 h-9 rounded-full flex items-center justify-center">
                                                    <MapPin size={18} className="text-[#219E64]" />
                                                </div>
                                                <h4 className="text-[18px] font-semibold text-[#141414]">
                                                    {product.location}
                                                </h4>
                                            </div>
                                        </div>

                                        <div className='mt-4 pt-4 border-t border-[#E1E7EF] w-full flex justify-between items-center'>
                                            <div className='hidden sm:block'></div>
                                            <div className='flex items-center gap-2.5'>
                                                <Link href={`/products-details/${product._id}`}>
                                                    <button className='flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-[#141414] font-medium bg-gray-100 transition cursor-pointer'>
                                                        <Eye size={18} /><span>View Details</span>
                                                    </button>
                                                </Link>
                                                <button onClick={() => handleDelete(product._id)} className='flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-medium transition cursor-pointer'>
                                                    <Trash size={16} /><span>Delete</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            products.length === 0 && (
                                <p className="text-center text-gray-500">You have not created any products yet.</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManagePage;
