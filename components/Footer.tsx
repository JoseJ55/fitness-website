import Image from "next/image"

function Footer() {
  return (
    <div className='flex justify-center items-center p-24 bg-custom-background'>
        <div className='w-1/2 flex justify-center items-start gap-10'>
            <div className='w-3/12 flex flex-col justify-start items-center'>
                <Image
                    width={50}
                    height={50}
                    src={'/assets/logo.png'}
                    alt='website logo of mountains'/>
                <p className='text-custom-main text-lg'>
                    Fitness 101
                </p>
            </div>

            <div className='w-6/12 flex flex-col justify-start items-start gap-2'>
                <p className='text-custom-main text-lg'>Make sure to follow us</p>

                <div className='w-full flex justify-start items-center gap-2'>
                    <Image
                        width={35}
                        height={35}
                        src={'/icons/icons8-facebook-48.png'}
                        alt='facebook link' />
                    <Image
                        width={35}
                        height={35}
                        src={'/icons/icons8-instagram-48.png'}
                        alt='instagram link' />
                    <Image
                        width={35}
                        height={35}
                        src={'/icons/icons8-twitter-circled-48.png'}
                        alt='twitter link' />
                </div>

                <p className='text-custom-main'>
                    email@email.com
                </p>
                
                <p className='text-custom-main'>
                    1-234-567-8910
                </p>

                <p className='text-custom-main'>
                    12345 address st, random CA
                </p>
            </div>

            <div className='w-2/12 flex flex-col justify-start items-start gap-2'>
                <a className='w-full text-custom-main'>About</a>
                <a className='w-full text-custom-main'>Trainers</a>
                <a className='w-full text-custom-main'>Shop</a>
                <a className='w-full text-custom-main'>Join</a>
            </div>
        </div>
    </div>
  )
}

export default Footer