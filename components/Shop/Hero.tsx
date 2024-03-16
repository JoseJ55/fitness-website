function Hero() {
  return (
    <div className='w-full h-96 py-72 bg-custom-background flex justify-center items-center relative overflow-hidden'>
        <div className='
            text-custom-main 
            text-6xl sm:text-7xl 
            font-bold 
            absolute 
            top-1/4 md:top-1/2 
            left-72 sm:left-3/4 lg:left-72 2xl:left-2/3
            -translate-x-1/2 
            -translate-y-1/2
            -rotate-45
            opacity-50
        '>FITNESS</div>
        <div className='
            text-custom-main 
            text-6xl sm:text-7xl 
            font-bold 
            absolute 
            top-3/4 sm:top-1/2 
            right-40 sm:right-2/4 lg:right-32 2xl:right-2/3
            -translate-x-1/2 
            -translate-y-1/2
            -rotate-45
            opacity-50
        '>GYM</div>

        <p className='
          text-custom-main 
          text-2xl 
          font-bold 
          w-3/4 sm:w-1/4 
          text-center 
          item-center
        '>Shop from our inventory to help your journey</p>
    </div>
  )
}

export default Hero