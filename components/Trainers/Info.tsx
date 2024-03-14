function Info() {
    return (
        <div className='w-full h-96 flex justify-center items-center relative py-64 bg-custom-background'>
            <div className='
                absolute 
                top-0 
                left-0 
                h-full 
                w-1/4
                z-10
                bg-custom-main
                opacity-60
                clip-pad-top-triangle
            '></div>
            <div className='
                absolute 
                bottom-0 
                right-0 
                h-full 
                w-1/4
                z-10
                bg-custom-main
                opacity-60
                clip-pad-bottom-triangle
            '></div>

            <div className='w-2/6 z-30 flex flex-col justify-start items-start gap-3'>
                <p className='text-custom-main text-xl w-fit -translate-x-1/2'>Join Us</p>
                <p className='text-custom-main'>Whether you&apos;re a beginner looking to kickstart your fitness journey or a seasoned athlete aiming to reach new heights, our trainers are here to support you every step of the way. With personalized training programs tailored to your unique needs and goals, you&apos;ll receive the attention and expertise you deserve to succeed.</p>
            </div>
        </div>
    )
}

export default Info