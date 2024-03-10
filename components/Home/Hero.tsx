import Image from "next/image";

function Hero() {
  return (
    <div 
        className='bg-custom-background w-full h-screen relative overflow-hidden'>
        <video 
            className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 grayscale' 
            autoPlay 
            loop 
            muted 
            preload='none' 
            width='100%' 
            height='100%'
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
            <Image 
                width={60}
                height={60}
                src='/assets/logo.png' 
                alt='fitness logo' />
            <p className='font-sans text-6xl'>Fitness 101</p>
        </div>
    </div>
  )
}

export default Hero