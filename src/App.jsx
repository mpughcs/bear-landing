import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { BiBot } from "react-icons/bi";
import { FaBell } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { themeChange } from 'theme-change';

import chris from './assets/images/chris.jpeg';
import splash_image from './assets/images/deviceframes.png';
import account from './assets/images/graphics/account.svg';
import cal from './assets/images/graphics/cal.svg';
import gift from './assets/images/graphics/gifts.svg';
import max from './assets/images/max.png';
import phone from './assets/images/phone.png'
import Avatar from "./components/Avatar";
import Footer from './components/Footer';
import LazyImage from './components/LazyImage';
import NavBar from './components/Navbar';
import ResponsiveCard from './components/ResponsiveCard';

import './App.css'

const entryTransition = .4;
const staggerTransition = .2;


function App() {

  // const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: entryTransition + .2, // Delay the animations of the children by 0.5 seconds  
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

  useEffect(() => {
    themeChange('bear');
  }, [])






  return (
    <main className="overflow-hidden duration-1000 transition-all ">
      <header>
        {/* add icon and title to page */}

      </header>
      <section className='p-[2rem]  mx-auto'>
        <NavBar />

        <div className='flex flex-col md:flex-row justify-center items-center '>
          <motion.div className='max-w-md pb-[140px] flex flex-col gap-4 pt-20 '
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: entryTransition }}
          >
            <h1 className='font-Poppins '>Gift with ease</h1>
            <h1 className='font-Poppins '>Gift with <span className='font-Pacifico text-secondary'>Bear</span></h1>
            <p className='font-Poppins text-xl'>Never miss a special occasion again. </p>

            <motion.ul
              className='flex flex-col gap-4 pl-6 text-primary'
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'>
                <FaBell className='text-4xl' />
                <p className='font-Poppins  '>Set reminders for important dates</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'
              >
                <BiBot className='text-4xl ' />

                <p className='font-Poppins '>Smart gift suggestions</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'
              >
                <LuAlarmClock className='text-4xl ' />
                <p className='font-Poppins  '>Send thoughtful gifts on time</p>
              </motion.li>

            </motion.ul>

            <motion.div className='flex flex-col gap-4 ml-5 '
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}



            >
              <h1 className=' font-Pacifico  my-6'>Coming soon...</h1>
              <div className='flex '>
                <button className='btn btn-primary'>Get Notified</button>
                <button className='btn btn-ghost'>Learn More</button>
              </div>
            </motion.div>







          </motion.div>
          <div className='max-w-[40%] flex-1'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: .8 }}
              transition={{ ease: 'easeIn', duration: entryTransition }}
              className='opacity-20 relative md:static w-full h-full'
            >
              <div className=''>
                <img src={splash_image} className='drop-shadow-xl min-w-[500px] absolute md:static bottom-0 left-10 mx-auto opacity-25 md:opacity-100' />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* how it works */}
      <section className='bg-base-200 p-5 h-fit'>
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

        bg-[url('./assets/images/confetti.jpg')]
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
            <LazyImage src={phone} alt='phone' className="drop-shadow-xl min-w-[250px] max-w-[300px] mx-auto hidden md:block "  />
          </div>
        

          <div className='flex flex-col max-w-[500px] self-center text-base-100 basis-[300-px] prose min-w-[400px]'>

            <h2 className='text-primary-content my-3'>Note from the developers</h2>
              <div className="flex gap-5">
                <Avatar src={chris} className={"self-end"} />
                <Avatar src={max} />
              </div>
            <p className='text-left text-neutral-content max-w-[300px]'>
              Designed for the thoughtful, the forgetful, and those who just want to make someone's day. Bear is the perfect tool to help you remember important dates and send thoughtful gifts on time.

              We are working hard to bring you the best experience possible. Sign up to get notified when we launch.
            </p>
            <div className='flex gap-4 justify-start'>
              <button className='btn btn-secondary'>Get Notified</button>
              <button className='btn btn-ghost'>Learn More</button>
              <button className='btn btn-ghost'>Contact Us</button>
            </div>

          </div>
        </div>
      </section>
      <Footer />




    </main >

  )
}

export default App
