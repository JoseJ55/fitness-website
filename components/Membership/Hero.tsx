import Image from "next/image"

function Hero() {
  return (
    <div className='w-full h-96 flex justify-center items-center relative bg-custom-background overflow-hidden'>
        <div className='w-full h-full absolute top-0 left-0 z-10 bg-white opacity-55'>
            <Image
                layout='fill'
                objectFit='cover'
                placeholder='empty'
                priority
                src='/assets/samuel-girven-fqMu99l8sqo-unsplash.jpg'
                alt='membership banner background' />
        </div>

        {/* <p className='text-custom-main text-4xl z-20 -translate-x-1/3 w-1/4 font-bold'>Become a Member and start your journey</p> */}
    </div>
  )
}

export default Hero;