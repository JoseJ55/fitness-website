import Image from "next/image";

interface offers {
    id: number
    image: string,
    title: string,
    desc: string,
};

function OfferCard({ item }: { item: offers}) {
    return (
        <div className={`w-full flex justify-between items-start gap-5 ${item.id % 2 == 0 ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className='w-2/4 h-full relative overflow-hidden'>
                <Image 
                    width={500}
                    height={500}
                    src={item.image}
                    alt='gym photo for the equipment' />
            </div>

            <div className='w-2/4 flex flex-col justify-start items-start gap-6 py-5'>
                <p className='text-custom-main text-lg'>{item.title}</p>
                <p className='text-custom-main'>{item.desc}</p>
            </div>
        </div>
    );
};

export default function Offer() {
    const offers = [
        {
            id: 1,
            title: 'State-of-the-Art Facilities',
            desc: 'Our gym boasts state-of-the-art equipment and versatile spaces for cardio, strength training, and functional workouts.',
            image: '/assets/risen-wang-20jX9b35r_M-unsplash.jpg'
        },
        {
            id: 2,
            title: 'Group Fitness Classes',
            desc: 'Join our dynamic group fitness sessions led by certified instructors, catering to various fitness levels and interests.',
            image: '/assets/bruce-mars-y0SMHt74yqc-unsplash.jpg'
        },
        {
            id: 3,
            title: 'Personal Training',
            desc: 'Achieve your goals faster with personalized training plans from our experienced coaches.',
            image: '/assets/wade-austin-ellis-sf0qE4XehbI-unsplash.jpg'
        },
        {
            id: 4,
            title: 'Specialized Programs',
            desc: 'Explore specialized workshops and programs targeting specific fitness goals and interests.',
            image: '/assets/geert-pieters-3RnkZpDqsEI-unsplash.jpg'
        }
    ];

    return (
        <div className='w-full bg-custom-background flex justify-center items-center'>
            <div className='w-8/12 flex flex-col justify-center items-center gap-6'>
                <p className='text-custom-main text-2xl'>What We Offer</p>

                <div className='w-full flex flex-col justify-center items-center gap-20'>
                    {offers.map((item, index) => (
                        <OfferCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};