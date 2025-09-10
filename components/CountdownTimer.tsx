import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: Record<string, number> = {};

        if (difference > 0) {
            timeLeft = {
                días: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // Set an interval to update the countdown every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]); // Rerun effect only if targetDate changes

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval as keyof typeof timeLeft] && interval !== 'segundos' && Object.keys(timerComponents).length === 0) {
            return;
        }

        timerComponents.push(
            <span key={interval} className="text-center">
                <span className="text-lg font-bold">{timeLeft[interval as keyof typeof timeLeft]}</span>
                <span className="text-xs uppercase">{interval}</span>
            </span>
        );
    });

    return (
        <div className="bg-brand-red/80 text-white text-sm font-bold uppercase tracking-wider p-2 rounded-t-md mb-4">
            <div className="flex justify-around items-center">
                <span className="mr-2">La oferta termina en:</span>
                {timerComponents.length ? (
                    <div className="flex gap-3">{timerComponents}</div>
                ) : (
                    <span>¡La oferta ha terminado!</span>
                )}
            </div>
        </div>
    );
};

export default CountdownTimer;
