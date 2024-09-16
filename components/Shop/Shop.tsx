'use client';
import Image from "next/image";

import { useAppSelector, useAppDispatch } from '@/lib/hooks';

import { select_product } from "@/lib/features/shop/shopSlice";

interface product {
    id: number;
    type: string;
    image: string;
    desc: string;
    name: string;
    price: number;
    rating: number;
    stock: number;
    bought: number;
}

const Product = ({ product }: { product: product}) => {
    const { type, image, desc } = product;

    const dispatch = useAppDispatch();

    const handleSelect = () => {
        dispatch(select_product(product));
    }

    return (
        <div onClick={handleSelect} className={`
            ${type === 'long' ? 'col-span-2' : type === 'tall' ? 'row-span-2' : 'col-span-1'}
            relative 
            min-h-32 sm:min-h-40 md:min-h-48 lg:min-h-64 xl:min-h-72 
            h-full
            clip-top-triangle
            transition-all
            duration-500
            ease-in-out
            grayscale
            hover:grayscale-0
            hover:cursor-pointer
            hover:scale-105
        `}>
            <Image
                layout='fill'
                objectFit='cover'
                src={image}
                alt={desc}/>
        </div>
    );
};

function Shop() {

    const products = useAppSelector((state) => state.shop.products);

    return (
        <div className='w-full min-h-96 bg-custom-background flex justify-center items-center py-32'>
            <div className='
                w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 2xl:w-5/12
                grid 
                grid-cols-3 
                gap-6 sm:gap-8
            '>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Shop