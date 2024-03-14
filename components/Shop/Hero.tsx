function Hero() {
  return (
    <div className='w-full h-96 py-72 bg-custom-background flex justify-center items-center relative'>
        <div className='
            text-custom-main 
            text-7xl 
            font-bold 
            absolute 
            top-1/2 
            left-80
            -translate-x-1/2 
            -translate-y-1/2
            -rotate-45
        '>FITNESS</div>
        <div className='
            text-custom-main 
            text-7xl 
            font-bold 
            absolute 
            top-1/2 
            right-80 
            -translate-x-1/2 
            -translate-y-1/2
            rotate-45
        '>GYM</div>

        <p className='text-custom-main text-2xl font-bold w-1/4 text-center item-center'>Shop from our inventory to help your journey</p>
    </div>
  )
}

export default Hero