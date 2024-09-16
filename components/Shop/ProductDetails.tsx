'use client';
import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { IoIosArrowBack } from 'react-icons/io';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { 
    update_show_product, 
    select_product,
    add_to_cart,
} from '@/lib/features/shop/shopSlice';

import Image from 'next/image';

function ProductDetails() {
    const { showProduct, selectedProduct } = useAppSelector((state) => state.shop);

    const dispatch = useAppDispatch();

    const [quantity, setQuantity] = useState(1);

    const handleClose = () => {
        dispatch(select_product(null));
        dispatch(update_show_product(false));
        setQuantity(1);
    }

    const handleAddToCart = () => {
        if (selectedProduct?.stock === 0) return;

        if (selectedProduct) {
            dispatch(add_to_cart({
                ...selectedProduct,
                amount: quantity
            }))
        }
    }

    return (
        <div className={`
            w-screen
            h-screen
            fixed
            top-0
            transition-all
            ease-in-out
            duration-500
            ${showProduct ? 'translate-x-0' : 'translate-x-full'}
            z-[200]
        `}>
            <div className='
                w-full
                h-full
                relative
                flex
                flex-col
                justify-start
                items-center
                bg-custom-background
            '>
                <div onClick={handleClose} className='
                    w-full
                    h-16
                    flex
                    justify-start
                    items-center
                    px-10
                    text-white
                    text-3xl
                    hover:cursor-pointer
                '>
                    <IoIosArrowBack />
                </div>

                <div className='
                    w-4/5
                    h-full
                    flex
                    justify-between
                '>
                    <div className='
                        w-1/2
                        h-3/4
                        relative
                    '>
                        <Image 
                            layout='fill'
                            objectFit='cover'
                            src={`${selectedProduct?.image}`} 
                            alt='product image' />
                    </div>

                    <div className='
                        w-5/12
                        flex
                        flex-col
                        justify-start
                        items-start
                        py-5
                    '>
                        <p className='
                            w-full
                            text-custom-main
                            text-2xl
                        '>{selectedProduct?.name}</p>

                        <p className='
                            w-full
                            text-white
                            flex
                            items-center
                            gap-2
                        '>
                            {selectedProduct?.rating && selectedProduct?.rating / 10} <CiStar className='text-xl text-custom-main' />
                        </p>

                        <p className='
                            text-white
                            w-full
                            text-xl
                            my-5
                        '>${selectedProduct?.price && selectedProduct?.price / 100}</p>

                        <p className='
                            w-full
                            text-custom-main
                        '>{selectedProduct?.stock && selectedProduct?.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>

                        <p className='
                            text-custom-accent
                            my-2
                        '>
                            Free Delivery
                        </p>

                        <div className='
                            w-full
                            flex
                            gap-3
                            mb-5
                        '>
                            <div className='
                                w-1/4
                                flex
                                gap-2
                            '>
                                <p className='text-white'>Quantity:</p>
                                <input 
                                    type='number'
                                    min='1'
                                    max='10'
                                    onChange={(e: any) => setQuantity(parseInt(e.target.value))}
                                    value={quantity}
                                    className='w-1/3 text-center rounded' 
                                    />
                            </div>
                            
                            <input 
                                type='button' 
                                value='Add to Cart' 
                                onClick={handleAddToCart}
                                className='
                                    w-3/5
                                    bg-custom-background
                                    text-custom-main
                                    hover:cursor-pointer
                                    border-2
                                    border-custom-main
                                    rounded
                                    hover:opacity-70
                                '/>
                        </div>

                        <p className='
                            w-full
                            text-white
                            text-sm
                        '>{selectedProduct?.bought} bought in the last year</p>

                        <div className='
                            w-full
                            border-[1px]
                            border-custom-main
                            my-10
                        '></div>

                        <div className='
                            w-full
                            flex
                            flex-col
                            gap-2
                        '>
                            <p className='
                                text-white
                            '>Details:</p>
                            <p className='
                                text-white
                                w-full
                            '>{selectedProduct?.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails;
