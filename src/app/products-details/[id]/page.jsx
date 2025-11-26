"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, ShoppingCart, Tag } from "lucide-react";
import { toast } from "react-toastify";

const ProductsDetails = () => {

    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/products-details/${id}`)
                .then(res => setProduct(res.data))
                .catch(err => console.log(err));
        }
    }, [id]);

    if (!product) {
        return <div className='min-h-screen flex justify-center items-center'>
                <span className="loading loading-bars loading-xl"></span>
            </div>;
    }

    const handleAddToCart = () => {
        toast.success(`${product.title} added to cart!`);
    };

    return (
        <div className='py-[60px] lg:py-[95px]'>
            <div className='container'>
                <div className="max-w-[890px] mx-auto">
                    <Link href='/product' className="flex items-center gap-1.5 text-[16px] font-medium text-[#65758B]"><ArrowLeft size={20}/><span>Back to Products</span></Link>

                    <div>
                        <img src={product.imageUrl} alt={product.title} className="w-full h-[310px] sm:h-[390px] md:h-[470px] shadow-sm object-cover rounded-lg md:rounded-2xl mt-5 md:mt-[35px]"/>
                        <p className='inline-flex items-center gap-1.5 py-1.5 px-4 bg-[#E7F8F2] text-[15px] text-[#10B77F] font-medium rounded-full mt-5'><Tag size={15} /><span>{product.category}</span></p>
                        <h2 className='text-[#141414] text-[24px] sm:text-[28px] md:text-[36px] font-bold mt-5'>{product.title}</h2>
                        <p className="text-[#65758B] text-[15px] pt-4">{product.description}</p>
                        <h3 className="text-[32px] font-bold text-[#10B77F] pt-3 pb-5">$ {product.price}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                            <div className="p-3 sm:p-5 border border-[#E1E7EF] rounded-2xl">
                                <div className="grid grid-cols-1 mt-4 gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#E7F8F2] w-11 h-11 rounded-full flex items-center justify-center">
                                            <Calendar size={20} className="text-[#219E64]" />
                                        </div>
                                        <h4 className="text-[18px] font-semibold text-[#141414]">
                                            {new Date(product.date).toLocaleDateString("en-CA")}
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-[#E7F8F2] w-11 h-11 rounded-full flex items-center justify-center">
                                            <MapPin size={20} className="text-[#219E64]" />
                                        </div>
                                        <h4 className="text-[18px] font-semibold text-[#141414]">
                                            {product.location}
                                        </h4>
                                    </div>
                                </div>
                                <button onClick={handleAddToCart} className="mt-7 py-1.5 w-full bg-[#219E64] hover:bg-[#0c7e49] transition rounded text-white text-[17px] font-medium text-center cursor-pointer flex items-center justify-center gap-2.5"><ShoppingCart size={16}/>Add to cart</button>
                            </div>

                            <div className="p-3 sm:p-5 border border-[#E1E7EF] rounded-2xl">
                                <h4 className="text-[#141414] text-[18px] md:text-[20px] font-semibold">Organized By</h4>
                                <div className="flex items-center gap-3 mt-3">
                                    <div>
                                        <img src={product.organizer_photo} alt={product.organizer_name} className="h-12 w-12 rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-[#141414] text-[18px] font-semibold">{product.organizer_name} </h4>
                                        <p className="text-[15px] text-[#65758B]">{product.email || product.organizer_email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
