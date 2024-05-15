import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import React from 'react';
import { BiBot } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import axios from 'axios';


import chris from '../assets/images/chris.webp';
import splash_image from '../assets/images/deviceframes.webp';
import appstore from '../assets/images/appstore.png';
import account from '../assets/images/graphics/account.svg';
import cal from '../assets/images/graphics/cal.svg';
import gift from '../assets/images/graphics/gifts.svg';
import ResponsiveCard from '../components/ResponsiveCard';
import AdvertiserThumbnail from "../components/AdvertiserThumbnail";


const marqueeVariants = {
    animate: {
        x: [0, -1000], // Example value, adjust based on actual width
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Control speed
                ease: "linear"
            },
        },
    },
};

export default function Home(props) {

    const aboutSectionRef = React.useRef(null);
    const entryTransition = .58;
    const staggerTransition = 0.1;
    const [advertisers, setAdvertisers] = useState([]);



    const fetchAdvertisers = async () => {
        try {
            const response = await axios.get('https://us-central1-bearmvp-fa95e.cloudfunctions.net/getAdvertiserDataFromFirestore');
            setAdvertisers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchAdvertisers();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: .3, // Delay the animations of the children by 0.5 seconds  
                staggerChildren: staggerTransition, // Stagger the animations of the children by 0.1 seconds
            },
        },
    };
    const scrollVariants = {
        animate: {
            // x: [-100, 100],
            x: 100,
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10, // Adjust duration to control speed
                    ease: "linear"
                }
            }
        }
    };
    const renderAdvertisers = () => {
        // Duplicate the list of advertisers for seamless looping
        const allAdvertisers = [...advertisers, ...advertisers];
        return (
            <motion.div className="flex "
                variants={marqueeVariants}
                initial="start"
                animate="animate"
            >
                {allAdvertisers.map((advertiser, index) => (
                    <AdvertiserThumbnail key={index} advertiser={advertiser} />
                ))}
            </motion.div>
        );
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        transition: {
            ease: 'easeInOut',
        },
    };

    const handleLearnMore = () => {
        // scroll to about section
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleAboutPressed = () => {
        if (window.location.pathname === '') {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/';
        }
    }

    const handlePressBeta = () => {
        const result = window.confirm('Would you like to join the beta?');
        if (result) {
            window.location.href = 'https://testflight.apple.com/join/HptGm8EQ';
        } else {
            console.log('Cancel Pressed');
        }
    }




    return (
        <main className="overflow-hidden duration-20 transition-all select-none">



            <header>
                {/* add icon and title to page */}
                <title>Bear</title>


            </header>
            <section className="px-[2rem] mx-auto max-w-screen-2xl">

                <div className='flex flex-col sm:flex-row justify-center align-middle '>
                    <motion.div className='max-w-md pb-[140px] flex flex-col pt-[2rem] sm:gap-8 sm:pb-0 z-[1] drop-shadow-md'
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: entryTransition }}
                    >
                        <h1 className='font-Poppins '>Gift with ease,</h1>
                        <h1 className='font-Poppins '>gift with <span className='font-Pacifico text-secondary'>Bear</span></h1>

                        {/* TODO: Make it more around the gift giving experience, less about the event plannign aspect of the app.  */}

                        {/* <p className='font-Poppins mb-5'> Never miss a moment to show you care, gifting made easy with Bear.</p> */}
                        {/* <p className='font-Poppins mb-5'>Gift with grace, every time, every occasion.</p> */}


                        <motion.ul
                            className='flex flex-col gap-4 pl-1 text-primary '
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.li
                                variants={itemVariants}
                                className='flex flex-row items-center gap-2'>
                                <FaBell className='text-2xl sm:text-4xl' />
                                <p className='font-Poppins  '><span className="text-info">Set reminders</span> for important dates</p>
                            </motion.li>

                            <motion.li
                                variants={itemVariants}
                                className='flex flex-row items-center gap-2'
                            >
                                <BiBot className='text-2xl sm:text-4xl ' />

                                <p className='font-Poppins '><span className="text-info">AI-driven</span> gift suggestions</p>
                            </motion.li>

                            <motion.li
                                variants={itemVariants}
                                className='flex flex-row items-center gap-2'
                            >
                                <LuAlarmClock className='text-2xl sm:text-4xl ' />
                                <p className='font-Poppins  '><span className="text-info">Thoughtful gifts</span> from top retailers</p>
                            </motion.li>

                        </motion.ul>

                        <motion.div className='flex flex-col gap-4 ml-5 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .7, duration: 1.5 }}



                        >
                            <h1 className=' font-Pacifico  my-6'> Now in Beta!</h1>
                            <div className='flex '>
                                <button onClick={handlePressBeta} className='btn btn-primary'> Join The Beta</button>
                                <button onClick={handleLearnMore} className='btn btn-ghost'>Learn More</button>
                            </div>
                        </motion.div>







                    </motion.div>

                    {/* <div className='max-w-[40%] flex-1'>
                        <p>{advertisers.data}</p>
                        </div> */}

                    <div className='max-w-[40%] flex-1'>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: .8 }}
                            transition={{ ease: 'easeIn', duration: entryTransition }}
                            className='opacity-20 relative sm:static w-full h-full'
                        >
                            <div className='z-0'>
                                {/* <LazyImage src={splash_image} alt='splash' className='drop-shadow-xl min-w-[500px] absolute sm:static bottom-0 left-[80%] mx-auto opacity-25 sm:opacity-100 ' /> */}
                                <img src={splash_image} className='drop-shadow-xl min-w-[500px] absolute max-w-[500px] sm:static bottom-0 left-[80%] mx-auto opacity-25 sm:opacity-100 overflow-visible' />
                                <img src={appstore} className='object-cover w-[150px] my-5 absolute bottom-[200px] invisible sm:visible left-[70%]' />

                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* how it works */}
            <section className=' px-5 h-fit ' >
                {/* <div className='flex flex-col gap-7 max-w-[1300px] mx-auto py-12'> */}
                <div className="">
                    <h1 className='font-Poppins text-2xl sm:py-5'>Our Partners:</h1>
                    {renderAdvertisers()}
                </div>

            </section>
            <section className='bg-base-200 p-5 h-fit' ref={aboutSectionRef}>
                <div className='flex flex-col gap-7 max-w-[1300px] mx-auto py-12'>
                    <h1 className='font-Poppins text-4xl text-center'>How it works</h1>
                    <div className="flex gap-10 flex-wrap justify-center">
                        <ResponsiveCard header="Create Account" className=' ' img={<div>
                            <img src={account} className='w-50 object-cover height-[500px]' />
                        </div>}>
                            <p className='text-xl '>Accounts are free and easy to create. Sign up with your email or google  account.</p>
                        </ResponsiveCard>
                        <ResponsiveCard header="Add Events" className='' img={<div>
                            <img src={cal} className='w-50 object-cover height-[90%] pt-16' />
                        </div>}>
                            <p className='text-xl'>Add important dates and events. Get notified when the date is near.</p>

                        </ResponsiveCard>
                        <ResponsiveCard header="AI Gift Suggestions" className=''>
                            <img src={gift} className='w-50 object-cover height-[90%] pb-6' />
                            <p className='text-xl'>Get suggestions for gifts based on the event and the person's interests.</p>
                        </ResponsiveCard>

                        {/* user svg here */}




                    </div>
                </div>



            </section>
            <section className="w-full
        h-content
       
        px-24
        pt-8
        relative
        overflow-hidden
        
        // z-10

        bg-[url('./assets/images/BearXmas.jpg')]
        bg-cover
        bg-no-repeat
        bg-center
        before:content-['']
        before:absolute
        before:inset-0
        before:block
        before:bg-gradient-to-tl
        before:from-primary
        before:to-secondary
        before:z-[-5]
        before:transform
        before:scale-150
        before:filter
        before:blur-2xl
        before:opacity-75
        max-w-[1500px]
        mx-auto
        before:md:opacity-50

        
        
        " >
                <div className='max-w-[1000px] h-[600px] md:h-[800px] gap-12 mx-auto flex  y-10 justify-center'>

                    <div className='flex flex-col max-w-[900px] self-center text-base-100 basis-[300-px] min-w-[400px] mx-auto items-center'>


                        <p className=' text-center text-slate-100 drop-shadow-xl prose text-md md:text-2xl  max-w-[70%]'>
                        Bear transforms the art of gift-giving into a seamless, joyful experience. Designed for anyone who values thoughtful gestures, Bear is your ultimate mobile companion for picking the perfect gift for every occasion. 
                        </p>
                        <div className='flex gap-4  mt-7 pb-10  '>
                            <button className='btn btn-secondary' onClick={props.handleGetNotified}>Get Notified</button>
                            {/* <button className='btn btn-ghost'>Contact Us</button> */}
                        </div>

                    </div>
                </div>
            </section>
            <section>

            </section>




        </main >
    );
}