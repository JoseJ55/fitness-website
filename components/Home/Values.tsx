 interface value {
    title: string,
    desc: string,
 };

const ValueCard = ({ item }: { item: value }) => {
    const { title, desc } = item;

    return (
        <div 
            className='
                w-1/4 
                bg-custom-accent 
                flex 
                flex-col 
                justify-start 
                items-center 
                gap-5 
                p-9 
                min-h-80
                relative
            '
        >
            <div className='
                bg-custom-background
                absolute
                top-0
                left-0
                border-t-transparent
                border-l-transparent
                border-r-custom-accent
                border-b-custom-accent
                border-t-[40px]
                border-l-[40px]
                border-r-[40px]
                border-b-[40px]
            '></div>
            <div className='
                bg-custom-background
                absolute
                bottom-0
                right-0
                border-t-custom-accent
                border-l-custom-accent
                border-r-transparent
                border-b-transparent
                border-t-[40px]
                border-l-[40px]
                border-r-[40px]
                border-b-[40px]
            '></div>
            <p className='text-xl font-bold text-custom-main z-30'>{title}</p>
            <p className='text-base text-custom-main text-center z-30'>{desc}</p>
        </div>
    );
};

export default function Values() {
    const values = [
        {
            title: 'Integrity',
            desc: 'We believe in honesty, transparency, and ethical behavior in all aspects of our business. We uphold the highest standards of integrity in our interactions with customers, partners, and each other.'
        },
        {
            title: 'Empowerment',
            desc: 'We empower our members to take control of their fitness journey. We provide the tools, resources, and support needed to set and achieve personal goals, fostering a sense of confidence and empowerment.'
        },
        {
            title: 'Community',
            desc: 'We foster a supportive and inclusive community where everyone is welcome. We believe in the strength of unity and camaraderie, creating a positive and motivating environment for all our members.'
        }
    ];

    return (
        <div className='flex justify-center items-center bg-custom-background w-full py-52 relative'>
            <p 
                className='
                    absolute 
                    top-1/4 
                    left-1/2 
                    -translate-y-1/2 
                    -translate-x-1/2 
                    text-7xl
                    font-bold
                    text-custom-main
                    opacity-70
                    z-10
                '
            >
                Our Values
            </p>

            <div
                className='
                    z-20
                    w-2/3
                    flex
                    justify-between
                    items-center
                '
            >
                {values.map((item, index) => (
                    <ValueCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};