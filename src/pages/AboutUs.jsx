import React from 'react';
import { BiCake } from 'react-icons/bi';
// Ensure you have react-icons installed
import { MdCelebration } from 'react-icons/md';

import bear from '../assets/images/bear.png';
import chris from '../assets/images/chris.webp';
import max from '../assets/images/max.webp';
// Another example icon
import Avatar from '../components/Avatar';
import LazyImage from '../components/LazyImage';

const imageDimension = "140";


export default function AboutUs() {
    return (
        <main className="p-4 md:p-8 mx-auto max-w-screen-2xl transition-all duration-150 min-h-screen flex flex-col justify-center">
            <div className="space-y-8 mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                    <h2 className="text-secondary text-xl md:text-3xl mt-2 md:mt-4">Our Story: From Missed Birthdays to Bear</h2>
                </div>

                <div className="text-left pb-2 ">
                    <div className='float-right relative'>
                        <LazyImage src={chris} alt="Chris" className=" w-[200px] h-[200px] md:w-[240px] md:h-[240px]  object-cover float-left m-3 mb-9" />
                        <p className='absolute bottom-0 right-3 text-secondary drop-shadow-lg font-Pacifico text-2xl'> Chris Upchurch</p>

                    </div>
                    <p className="prose prose-lg mx-auto md:mx-0 ">
                        Bear wasn’t born overnight. It all started with a simple, yet familiar problem: forgetting important birthdays and special events for loved ones. This was a recurring theme for Chris, who, as the eldest of five, found himself missing out on too many of these pivotal moments. In 2023, he decided to find a solution, not just for himself, but for everyone facing the same challenge.

                    </p>
                </div>
                <div class="divider divider-accent"></div>


                <div className="text-left">
                    <div className='float-right relative'>
                        <LazyImage src={max} alt="Max" className=" w-[200px] h-[200px] md:w-[240px] md:h-[240px]  object-cover float-left m-3 mb-9" />
                        <p className='absolute bottom-0 right-3 text-secondary drop-shadow-lg font-Pacifico text-2xl'> Max Pugh</p>
                    </div>
                    <p className="prose prose-lg mx-auto md:mx-0">
                        Chris’s initial journey wasn’t smooth sailing. He explored no-code platforms and various software development agencies. His search for a technical partner led him to Max, a fellow St. Louis native with shared roots that traced back to the same high school and stretched out to colleges in Los Angeles. Fresh out of his degree in Computer Science ands eager to leverage what he's learned working with companies like Netflix, Max was ready to take on a new challenge.
                    </p>
                </div>
                <div class="divider divider-accent "></div>

                <div className='flex flex-col justify-center align-middle content-center'>
                    <p className="prose prose-lg mx-auto md:mx-0 text-left">
                        Their connection over LinkedIn was a stroke of fate - two individuals with similar journeys, converging to solve a common challenge.
                        A few meetings at a local coffee shop solidified their connection, and Max and Chris decided to join forces. Together, Chris, with his vision and previous startup experience, and Max, with his technical expertise, embarked on the mission to build Bear.
                    </p>
                    <LazyImage src={bear} alt="Bear" className=" w-[140px] h-[200px] md:w-[200] md:h-[270] drop-shadow-xl object-cover float-left mb-3 mx-auto" />
                    <p className="prose prose-lg mx-auto md:mx-0 text-center text-secondary ">

                        To them, Bear represents more than just an app; it’s a solution designed not only to remind but to enhance how we celebrate and cherish the people in our lives. We believe that remembering the important moments shouldn’t be a burden, and with Bear, it won’t be.
                    </p>
                </div>

                <h1 className="prose text-4xl font-Pacifico text-center py-8">
                    We’re excited to share Bear with you!
                </h1>
            </div>
        </main>
    );
}
