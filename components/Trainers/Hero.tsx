import Image from "next/image"

function Hero() {
  return (
    <div className='
      w-full 
      h-96
      bg-custom-background 
      relative 
      flex 
      justify-center 
      items-center 
      py-80 sm:py-72 2xl:py-96
      overflow-hidden
    '>
      <div className='w-full h-full absolute top-0 left-0 z-10'>
        <Image
          layout='fill'
          objectFit='cover'
          placeholder='empty'
          priority
          src={'/assets/trainers/jonathan-borba-R0y_bEUjiOM-unsplash.jpg'}
          alt='background image for the header about a trainer helping someone' />
      </div>

      <div className='w-full h-full absolute top-0 left-0 z-20 bg-black opacity-65'></div>

      <p className='
        z-30 
        text-custom-main 
        text-3xl 
        text-center
        font-bold 
        w-1/2 sm:w-1/4 
        sm:-translate-x-1/2
      '>
        Let&apos;s embark on this journey together
      </p>
    </div>
  )
}

export default Hero