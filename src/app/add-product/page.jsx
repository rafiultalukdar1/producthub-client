"use client";

import useAuth from '@/contexts/useAuth';
import React from 'react';
import { toast } from 'react-toastify';

const AddPage = () => {

    const { user } = useAuth();

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productData = {
            title: form.title.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            category: form.category.value,
            stock: parseInt(form.stock.value),
            imageUrl: form.imageUrl.value,
            date: new Date().toISOString(),
            location: form.location.value,
            organizer_name: user?.displayName || "",
            organizer_email: user?.email || "",
            organizer_photo: user?.photoURL || "",
        };
        const res = await fetch("http://localhost:5000/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        });
        const data = await res.json();
        if(res.ok){
            toast.success("Product created successfully!");
            form.reset();
        } else {
            toast.error("Failed to create product.");
        }
    };


    return (
        <>
            <div className='py-[60px] lg:py-[95px]'>
                <div className='container'>
                    <h2 className='text-center text-[28px] sm:text-[35px] lg:text-[48px] font-bold text-[#1F2937] leading-[1.2]'>Add New Product</h2>
                    <p className='text-[16px] lg:text-[18px] text-[#4B5563] text-center'>Fill in the details below to add a new product to your catalog</p>

                    <div className='max-w-[750px] mx-auto py-7 px-5 border border-[#CCCCCC] rounded-2xl mt-5 lg:mt-8'>
                        <form onSubmit={handleCreateProduct} className="space-y-3">
                            <input type="text" name="title" placeholder="Product Title" className="form-input" required />
                            <textarea name="description" placeholder="Description" className="form-input h-24" required></textarea>
                            <input type="number" name="price" placeholder="Price" className="form-input" required />
                            <input type="text" name="category" placeholder="Category" className="form-input" required />
                            <input type="number" name="stock" placeholder="Stock" className="form-input" required />
                            <input type="text" name="imageUrl" placeholder="Image URL" className="form-input" required />
                            <input type="text" name="location" placeholder="Location" className="form-input" required />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" name="organizer_name" value={user?.displayName || ''} readOnly className="form-input bg-gray-100" />
                                <input type="email" name="organizer_email" value={user?.email || ''} readOnly className="form-input bg-gray-100" />
                            </div>
                            <input type="text" name="organizer_photo" value={user?.photoURL || ''} readOnly hidden />
                            <button type="submit" className="w-full bg-[#219E64] hover:bg-[#1b7f52] text-white font-semibold py-2.5 rounded-lg transition cursor-pointer">Create Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPage;