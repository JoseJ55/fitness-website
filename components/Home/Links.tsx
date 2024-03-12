import Image from "next/image"

export default function Links() {
  return (
    <div className='h-screen bg-custom-background w-full flex justify-center items-center'>
      <div className='w-full h-full relative'>
        <div className='absolute top-0 left-0 h-full w-1/2 bg-white flex justify-center items-center'>
          <div className='relative w-full h-full z-10'>
            {/* <div class="triangle"></div>
              .triangle {
                width: 150px;
                aspect-ratio: 1;
                clip-path: polygon(0 0,100% 0,0 100%);
                background: linear-gradient(45deg,#FA6900,#C02942);
              } 
              */}
            <div 
              className='
                absolute 
                top-0 
                left-0 
                w-full 
                h-full 
                z-20 
                mask mask-triangle-1
                '
                // clip-path:polygon(0 0,100% 0,0 100%) overflow-hidden
            >
              <Image 
                layout='fill'
                objectFit='cover'
                src='/assets/the-nix-company-jZfX-w2fa9E-unsplash.jpg' 
                alt='shop background' />
            </div>

            <p className='z-30'>Shop</p>
          </div>
        </div>

        <div>
          <div></div>
          <p>Trainers</p>
        </div>

        <div>
          <div></div>
          <p>Members</p>
        </div>
      </div>
    </div>
  )
}