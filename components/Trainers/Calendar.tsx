import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Calendar({ selectedDate, setSelectedDate }: { selectedDate: string; setSelectedDate: React.Dispatch<React.SetStateAction<any>>; }) {
    const [availableDates, setAvailableDates] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const nextSevenDays = () => {
        let dates = [];

        for (let i=1; i < 8; i++) {
            dates.push(moment().add(i, 'days').format('ddd, DD, MM, YYYY'))
        }

        return dates;
    }

    useEffect(() => {
        const week = nextSevenDays();
        setAvailableDates(week);

        setLoading(false);
    }, []);

    if (loading) (
        <div>
            loading
        </div>
    )

    return (
        <div className='
            w-11/12 
            flex 
            justify-between
            gap-4
        '>
            {availableDates.map((date, index) => (
                <CalendarColumn key={index} date={date} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            ))}
        </div>
    );
};

interface hours {
    hour: number;
    available: boolean;
}

function CalendarColumn({ date, selectedDate, setSelectedDate }: { date : string; selectedDate: string; setSelectedDate: React.Dispatch<React.SetStateAction<any>>; }) {
    const splitDate = date.split(',');

    const [times, setTimes] = useState<hours[]>([]);
    const [selected, setSelected] = useState<number>(0);
    
    useEffect(() => {
        let hours : hours[] = []

        for (let i=0; i<8; i++) {
            let available = Math.floor(Math.random() * 2);
            let hour: hours = {
                hour: 0,
                available: false
            };

            hour.hour = i > 3 ? i - 3 : i + 9;
            hour.available = available == 1 ? true : false;

            hours.push(hour);
        }

        setTimes([...hours])
    }, []);

    useEffect(() => {
        const splitDateTime = selectedDate.split(', ');
        
        if (splitDateTime[0] === splitDate[0]) {
            setSelected(parseInt(splitDateTime[4]));
        } else {
            setSelected(0);
        }
    }, [selectedDate, splitDate]);

    const handlePress = (time: hours) => {
        setSelected(time.hour);
        setSelectedDate(`${date}, ${time.hour}`);
    }

    return (
        <div className='
            w-1/12
            flex
            flex-col
            items-center
        '>
            <h3 className='
                text-custom-main
                md:lg
            '>
                {splitDate[0]}
            </h3>

            <div className='
                w-full
                flex
                flex-col
                justify-center
                items-center
                text-center
                gap-3
            '>
                {times.map((time) => (
                    <input 
                        type='button' 
                        key={time.hour} 
                        value={time.hour} 
                        disabled={!time.available}
                        onClick={() => handlePress(time)}
                        className={`
                            w-full
                            rounded-lg
                            ${selected === time.hour ? 'bg-custom-main' : 'bg-custom-background'}
                            ${time.available ? selected === time.hour ? 'text-black' : 'text-custom-main' : 'text-zinc-600'}
                            border-2
                            ${time.available ? selected === time.hour ? 'text-black' : 'border-custom-main' : 'border-zinc-600'}
                            hover:cursor-pointer
                            hover:opacity-70
                        `}
                    />
                ))}
            </div>
        </div>
    )
}

export default Calendar;