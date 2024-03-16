import Image from "next/image";

function Hero() {
  return (
    <div className='bg-custom-background w-full h-screen relative overflow-hidden'>
        <video 
            // className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 grayscale' 
            className='absolute top-0 left-0 w-full h-full object-cover grayscale' 
            autoPlay 
            loop 
            muted 
            preload='none' 
        >
            <source src='/videos/production_id_4367637 (1080p).mp4' type='video/mp4' />
            Your browser does not support video tag.
        </video>

        <div 
            className='
                flex 
                justify-center
                items-center
                text-custom-main 
                w-fit 
                z-20 
                absolute 
                top-1/2 
                left-1/2 
                -translate-y-1/2 
                -translate-x-1/2 z-0
                gap-5
            '
        >
            <div className='w-fit relative pt-[100%] w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16'>
                <Image 
                    layout="fill"
                    objectFit="contain"
                    src='/assets/logo.png' 
                    alt='fitness logo' 
                />
            </div>
            <p className='
                font-sans 
                text-3xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
            '>Fitness 101</p>
        </div>
    </div>
  )
}

export default Hero