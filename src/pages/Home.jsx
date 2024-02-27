import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import React from 'react';
import { BiBot } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import chris from '../assets/images/chris.webp';
import splash_image from '../assets/images/deviceframes.webp';
import account from '../assets/images/graphics/account.svg';
import cal from '../assets/images/graphics/cal.svg';
import gift from '../assets/images/graphics/gifts.svg';
import max from '../assets/images/max.webp';
import phone from '../assets/images/phone.webp'
import Avatar from "../components/Avatar";
import Footer from '../components/Footer';
import LazyImage from '../components/LazyImage';
import ResponsiveCard from '../components/ResponsiveCard';

export default function Home(props) {

    const aboutSectionRef = React.useRef(null);
    const entryTransition = .58;
    const staggerTransition = 0.1;


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

    // Variants for each list item
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




    return (
        <main className="overflow-hidden duration-20 transition-all select-none">


            {/* contact modal */}
            {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

                <div className="modal-box prose">
                    <h2 className="">Contact Us</h2>
                    <p className="">Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="flex flex-col gap-5">
                        <div>
                            <label htmlFor="email" className="">Your email</label>
                            <input type="email" id="email" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="firstname" className="">Your first name</label>
                            <input type="fname" id="fname" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Jane" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="">Subject</label>
                            <input type="text" id="subject" className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>

                        </div>

                        <button type="submit" className=" btn">Send message</button>
                        <div method="dialog">
                            <button className="btn w-full">Close</button>
                        </div>


                    </form>

                </div>
            </dialog> */}




            <header>
                {/* add icon and title to page */}
                <title>Bear</title>


            </header>
            <section className="px-[2rem] pb-[2rem] mx-auto max-w-screen-2xl">

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
                        <p className='font-Poppins mb-5'>Gift with grace, every time, every occasion.</p>


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
                                <p className='font-Poppins  '><span className="text-info">Thoughtful gifts</span> on time, every time</p>
                            </motion.li>

                        </motion.ul>

                        <motion.div className='flex flex-col gap-4 ml-5 '
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .7, duration: 1.5 }}



                        >
                            <h1 className=' font-Pacifico  my-6'>Coming soon...</h1>
                            <div className='flex '>
                                <button onClick={props.handleGetNotified} className='btn btn-primary'>Get Notified</button>
                                <button onClick={handleLearnMore} className='btn btn-ghost'>Learn More</button>
                            </div>
                        </motion.div>







                    </motion.div>

                    <div className='max-w-[40%] flex-1'>
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: .8 }}
                            transition={{ ease: 'easeIn', duration: entryTransition }}
                            className='opacity-20 relative sm:static w-full h-full'
                        >
                            <div className='z-0'>
                                {/* <LazyImage src={splash_image} alt='splash' className='drop-shadow-xl min-w-[500px] absolute sm:static bottom-0 left-[80%] mx-auto opacity-25 sm:opacity-100 ' /> */}
                                <img src={splash_image} className='drop-shadow-xl min-w-[500px] absolute sm:static bottom-0 left-[80%] mx-auto opacity-25 sm:opacity-100 ' />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* how it works */}
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

        bg-[url('./assets/images/confetti.webp')]
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
        before:opacity-50
        

        
        
        " >
                <div className='max-w-[1000px] justify-center gap-12 mx-auto flex  py-10 '>


                    <div className='mx-auto'>
                        <LazyImage src={phone} alt='phone' className="drop-shadow-xl min-w-[250px] max-w-[300px] mx-auto hidden sm:block " />
                    </div>


                    <div className='flex flex-col max-w-[500px] self-center text-base-100 basis-[300-px] min-w-[400px]'>

                        <h1 className='text-primary-content my-5 '>Note from the developers</h1>
                        <div className="flex gap-5 my-5">
                            <Avatar src={chris} className={"self-end rounded-full"} />
                            <Avatar src={max} className={"self-end rounded-full"} />
                        </div>
                        <p className='text-left text-slate-100 max-w-[80%] prose '>
                            Designed for the thoughtful, the forgetful, and those who just want to make someone's day. Bear is the perfect tool to help you remember important dates and send thoughtful gifts on time.
                            We are working hard to bring you the best experience possible. Sign up to get notified when we launch.
                        </p>
                        <div className='flex gap-4 justify-start mt-7'>
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