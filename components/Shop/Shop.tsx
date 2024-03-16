import Image from "next/image";

interface product {
    id: number,
    type: string,
    image: string,
    desc: string
}

const Product = ({ product }: { product: product}) => {
    const { type, image, desc } = product;

    return (
        <div className={`
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
    const products = [
        {
            id: 1,
            type: 'long',
            image: '/assets/shop/7a186b32-af69-4466-bfab-b8c76642242a.a04c7b0900bed6660199ff53bc26f39f.jpeg',
            desc: 'protein bars'
        },
        {
            id: 2,
            type: 'tall',
            image: '/assets/shop/61c0oV0ar1L._AC_SX466_.jpg',
            desc: 'creatine powder'
        },
        {
            id: 3,
            type: 'tall',
            image: '/assets/shop/61u-qC6Z-mL._AC_SL1500_.jpg',
            desc: 'protein powder'
        },
        {
            id: 4,
            type: 'default',
            image: '/assets/shop/61Oi8E1n-nL.jpg',
            desc: 'micronized creatine'
        },
        {
            id: 5,
            type: 'default',
            image: '/assets/shop/71auZO+BmwL._AC_SL1500_.jpg',
            desc: 'gold standard pre-workout'
        },
        {
            id: 6,
            type: 'default',
            image: '/assets/shop/044188.jpg',
            desc: 'woke af pre-workout'
        }
    ]

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