'use client';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import Image from 'next/image';

import { remove_from_cart, show_cart } from '@/lib/features/shop/shopSlice';

function Cart() {
    const { cart, showCart } = useAppSelector((state) => state.shop);

    const dispatch = useAppDispatch();

    const [total, setTotal] = useState(0);
    const [extend, setExtend] = useState(false);
    const [empty, setEmpty] = useState(true);

    useEffect(() => {
        if (cart.length > 0) setEmpty(false);
        else setEmpty(true);

        let amount = 0;
        cart.map((item) => {
            amount += item.price * item.amount;
        })
        setTotal(amount);
    }, [cart]);

    const handleExtend = () => {
        if (showCart) {
            dispatch(show_cart(false));
        } else {
            dispatch(show_cart(true));
        }
    }

    const handleRemove = (id: number) => {
        dispatch(remove_from_cart(id));
    }

    return (
        <div className={`
            w-screen sm:w-96
            h-screen
            bg-custom-background
            fixed
            right-0
            top-0
            z-[300]
            border-l-2
            border-custom-main
            py-5
            flex
            flex-col
            transition-all
            ease-in-out
            duration-500
            ${showCart ? 'translate-x-0' : 'translate-x-full'}
        `}>
            <div className='
                w-full
                h-2/12
                mb-5
            '>
                <p 
                    onClick={handleExtend}
                    className={`
                        w-fit
                        text-custom-main
                        text-3xl
                        mb-5
                        px-5
                        transition-all
                        ease-in-out
                        duration-500
                        bg-custom-background
                        border-custom-main
                        rounded
                        hover:cursor-pointer
                        ${showCart ? 'rotate-180 translate-x-0 translate-y-0 border-0' : 'rotate-0 -translate-x-3/4 translate-y-full border-2'}
                    `}><IoIosArrowBack /></p>

                <p className={`
                    text-white
                    w-full
                    px-5
                    text-xl
                `}>Your Cart</p>
            </div>

            {!empty ? <div className='
                w-full
                flex-1
                overflow-y-auto
                scroll
            '>
                {cart.map((item) => (
                    <div className='
                        w-full
                        h-64
                        flex
                        justify-center sm:justify-start
                        items-start
                        px-3
                        py-2
                        gap-3
                        border-b-2
                        border-custom-accent
                    '>
                        <div className={`
                            w-1/3 sm:w-2/5
                            h-full
                            relative
                        `}>
                            <Image 
                                layout='fill'
                                objectFit='cover'
                                src={`${item?.image}`} 
                                style={{
                                    objectFit: 'contain'
                                }}
                                alt='product image' />
                        </div>

                        <div className='
                            w-2/5 sm:w-1/2
                            h-full
                            text-white
                            text-xl
                        '>
                            <p className='mb-3'>{item?.name}</p>
                            <p className='text-base'>Amount: {item?.amount}</p>
                            <p className='text-base'>Price: ${item?.price / 100}</p>
                            <input 
                                type='button' 
                                value='Remove'
                                onClick={() => handleRemove(item?.id)}
                                className='
                                    text-base
                                    border-2
                                    border-custom-main
                                    w-full
                                    rounded
                                    mt-2
                                    hover:cursor-pointer
                                    hover:opacity-80
                                ' />
                        </div>
                    </div>
                ))}
            </div> :
            <div className='
                w-full
                flex-1
                px-10
                py-8
            '>
                <p className='
                    text-white
                    text-lg
                    text-center
                '>There doesn't seem to be anything in your cart</p>
            </div>}

            <div className='
                w-full
                h-2/12
                text-white
                px-5
                flex
                flex-col
                gap-3
            '>
                <p>Subtotal: ${(total / 100).toFixed(2) ?? 0}</p>
                <p>Tax: ${((total * 1.1 / 100) - (total / 100)).toFixed(2) ?? 0}</p>
                <p>Total: ${(total * 1.1 / 100).toFixed(2) ?? 0}</p>

                <input 
                    type='button' 
                    value='Checkout'
                    onClick={() => alert('This is a template and currently does not take personal info.')}
                    className='
                        border-2
                        border-custom-main
                        rounded
                        mt-5
                        hover:cursor-pointer 
                        hover:opacity-70
                    '/>
            </div>
        </div>
    )
}

export default Cart