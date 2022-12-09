import React from "react";
import { useState, useEffect } from "react";


const Countdown = () => {
    const release: any = new Date("Jun 1, 2023");

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            const now = new Date().getTime();


            const distance = release - now;


            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(
                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            );
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="min-h-[100vh] flex ">
            <div className="m-auto px-[30px] justify-center flex">

                <div className="text-center items-center grid gap-[1.2rem] text-white">

                    <div className="grid gap-[0.3rem]">
                        <h2 className="text-xl CountDown_">Luanched Soon</h2>
                        <h2 className="text-xl CountDown_">June 1, 2023</h2>
                        <h1 className="text-5xl 640max:text-3xl CountDown_">TWELVE A WEBSITE</h1>
                    </div>

                    <div className="grid grid-cols-5 items-center text-3xl 640max:text-xl 1024max:pr-[24px]">

                        <p className="grid CountDown_">
                            <span>
                                {days}
                            </span>
                            <span>
                                DAYS
                            </span>
                        </p>

                        <p>
                            :
                        </p>

                        <p className="grid CountDown_">
                            <span>
                                {hours}
                            </span>
                            <span>
                                HOURS
                            </span>
                        </p>

                        <p>
                            :
                        </p>

                        <p className="grid CountDown_">
                            <span>
                                {minutes}
                            </span>
                            <span>
                                MINUTES
                            </span>
                        </p>

                    </div>


                    <p className="grid CountDown_ text-3xl 640max:text-xl 1024max:pr-[24px]">
                        <span>
                            {seconds}
                        </span>
                        <span>
                            SECONDS
                        </span>
                    </p>


                </div>

            </div>
        </div>
    );
};

export default Countdown;
