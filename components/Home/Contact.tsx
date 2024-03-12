function Contact() {
  return (
    <div className='flex justify-center items-center p-32 bg-custom-background w-full'>
        <div className='w-4/12 flex flex-col justify-start items-start gap-7'>
            <div className='w-full flex flex-col gap-2'>
                <p className='text-custom-main text-xl'>
                    Stay in touch
                </p>

                <p className='text-custom-main'>
                    Join our a new letter to stay in touch with our activity.
                </p>
            </div>

            <div className='w-full flex flex-col gap-2 justify-start items-start'>
                <input 
                    className='w-full p-3'
                    type='text' 
                    placeholder='Email' />

                <input 
                    className='
                        bg-custom-main
                        px-2
                        py-1
                        text-sm
                    '
                    type='submit' />
            </div>
        </div>
    </div>
  )
}

export default Contact