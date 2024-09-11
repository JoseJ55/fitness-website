import React, { useState } from 'react';

interface Form {
    name: string;
    phone: string;
    email: string;
}

function CalendarForm({ selectedDate, setSelectedDate }: { selectedDate: string; setSelectedDate: React.Dispatch<React.SetStateAction<any>>; }) {
    const [form, setForm] = useState<Form>({ name: '', phone: '', email: '' });
    const [showError, setShowError] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [fade, setFade] = useState<boolean>(false);

    const handleCancel = () => {
        setSelectedDate('');
        setShowError(false);
        setForm({ name: '', phone: '', email: '' });
    }

    const handleSubmit = () => {
        if (form.name === '' || form.phone === '' || form.email === '') {
            setShowError(true);
            return;
        } else {
            setShowError(false);
        }

        setFade(true);
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    }

    const updateForm = (type : string, value : string | null ) => {
        const newForm = {
            ...form,
            [type] : value
        }

        setForm(newForm);
    };

    if (submitted) {
        const splitDate = selectedDate.split(', ');

        return (
            <div className={`
                w-full md:w-3/4
                flex
                flex-col
                gap-3
                justify-center
                items-center
                transition-all
                duration-500
                ease-in-out
                ${!fade ? 'opacity-0' : 'opacity-100'}
            `}>
                <p className='
                    text-custom-main
                    text-lg
                '>Session Booked</p>
                <p className='
                    text-custom-main
                '>{splitDate[1]}-{splitDate[2]}-{splitDate[3]} at {splitDate[4]}{parseInt(splitDate[4]) < 5 ? 'PM' : 'AM'}</p>
                <p className='
                    text-custom-main
                    text-center
                '>Thank you for booking a session with us. Please provide your email and phone number on the day you requested.</p>
                <p className='
                    text-custom-main
                '>You will receive a confirmation email shortly.</p>
            </div>
        ) 
    } else {
        return (
            <div className={`
                w-full xl:w-3/4
                flex
                flex-col
                gap-3
                justify-center
                items-center
                transition-all
                duration-1000
                ease-in-out
                ${fade ? 'opacity-0' : 'opacity-100'}
            `}>
                <div className='
                    w-full
                    flex
                    gap-3
                '>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        onChange={(e) => updateForm('name', e.target.value)}
                        className='
                            w-full
                            rounded
                            bg-custom-background
                            text-custom-main
                            border-custom-main
                            border-2
                            px-2
                            py-1
                        '
                    />
                    <input 
                        type='text' 
                        placeholder='Phone Number' 
                        onChange={(e) => updateForm('phone', e.target.value)}
                        className='
                            w-full
                            rounded
                            bg-custom-background
                            text-custom-main
                            border-custom-main
                            border-2
                            px-2
                            py-1
                        '
                    />
                </div>
    
                <input 
                    type='email' 
                    placeholder='Email' 
                    onChange={(e) => updateForm('email', e.target.value)}
                    className='
                        w-full
                        rounded
                        bg-custom-background
                        text-custom-main
                        border-custom-main
                        border-2
                        px-2
                        py-1
                    '
                />
    
                <div className='
                    w-full
                    flex
                    gap-3
                '>
                    <input 
                        type='button' 
                        value='Cancel' 
                        onClick={handleCancel} 
                        className='
                            text-custom-main
                            md:text-lg
                            hover:cursor-pointer
                            hover:opacity-70
                        '
                    />
                    <input 
                        type='submit' 
                        value='Confirm' 
                        onClick={handleSubmit}
                        className='
                            text-custom-main
                            md:text-lg
                            hover:cursor-pointer
                            hover:opacity-70
                        '
                    />
                </div>
    
                <div className='
                    w-full
                    text-custom-main
                '>
                    <p>{showError ? 'Please fill in form' : ''}</p>
                </div>
            </div>
        );
    };
};

export default CalendarForm;