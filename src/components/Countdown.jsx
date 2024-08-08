import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const totalSeconds = Math.floor(difference / 1000);
            const hours = Math.floor((totalSeconds / 3600) % 24);
            const minutes = Math.floor((totalSeconds / 60) % 60);
            const seconds = totalSeconds % 60;

            timeLeft = {
                days: days < 10 ? `${days}` : days,
                hours: hours < 10 ? `0${hours}` : hours,
                minutes: minutes < 10 ? `0${minutes}` : minutes,
                seconds: seconds < 10 ? `0${seconds}` : seconds
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const { hours = '00', minutes = '00', seconds = '00', days ='00'} = timeLeft;

    return (
        <div style={{ fontSize: '36px', fontFamily: 'monospace', paddingBottom:24}}>
            {days} days {hours}:{minutes}:{seconds}
        </div>
    );
};

export default Countdown;
