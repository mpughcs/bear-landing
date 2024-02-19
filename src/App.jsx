import { useState, useEffect } from 'react'
import './App.css'

import { motion } from "framer-motion"
import { LuAlarmClock } from "react-icons/lu";
import { BiBot } from "react-icons/bi";
import NavBar from './components/Navbar';
import { FaBell } from "react-icons/fa6";
import Footer from './components/Footer';
import ResponsiveCard from './components/ResponsiveCard';
import { themeChange } from 'theme-change';



import splash_image from './assets/images/deviceframes.png';
import user from './assets/images/user.svg';
import cal from './assets/images/graphics/cal.svg';
import gift from './assets/images/graphics/gifts.svg';
import account from './assets/images/graphics/account.svg';
const entryTransition = .8;
const staggerTransition = .2;

function App() {

  // const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  // const [activeTheme, setActiveTheme] = useState('light');s

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: entryTransition + .1, // Delay the animations of the children by 0.5 seconds  
        staggerChildren: staggerTransition, // Stagger the animations of the children by 0.1 seconds
        duration: 1.5,
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
      duration: 2,
    },
  };

  useEffect(() => {
    themeChange('bear');
  }, [])





const externalImageUrl = 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

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
            transition={{ ease: 'easeInOut', duration: entryTransition }
            }
          >
            <h1 className='font-Poppins text-6xl'>Gift with ease</h1>
            <h1 className='font-Poppins text-6xl'>Gift with <span className='font-Pacifico text-secondary'>Bear</span></h1>
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
                <p className='font-Poppins text-lg '>Set reminders for important dates</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'
              >
                <BiBot className='text-4xl ' />

                <p className='font-Poppins text-lg '>Smart gift suggestions</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'
              >
                <LuAlarmClock className='text-4xl ' />
                <p className='font-Poppins text-lg '>Send thoughtful gifts on time</p>
              </motion.li>

            </motion.ul>

            <div className='flex gap-4 mt-10'>
              <button className='btn btn-primary'>Get Started</button>
              <button className='btn btn-ghost'>Learn More</button>
            </div>
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
        <div className='flex flex-col gap-7 max-w-[1300px] mx-auto'>
          <h1 className='font-Poppins text-4xl text-center'>How it works</h1>
          <div className="flex gap-10 flex-wrap justify-center">
            <ResponsiveCard header="Create Account" className=' ' img={
              <div>
                <img src={account} className='w-50 object-cover height-[500px]' />
              </div>
            } >
              <p className='text-xl '>Accounts are free and easy to create. Sign up with your email or google  account.</p>
            </ResponsiveCard>
            <ResponsiveCard header="Add Events" className='' img={
              <div>
                <img src={cal} className='w-50 object-cover height-[90%] pt-16' />
              </div>
            } >
              <p className='text-xl'>Add important dates and events. Get notified when the date is near.</p>

            </ResponsiveCard>
            <ResponsiveCard header="Browse Suggestions" className=''>
              <img src={gift} className='w-50 object-cover height-[90%] pb-6' />
              <p className='text-xl'>Get suggestions for gifts based on the event and the person's interests.</p>


            </ResponsiveCard>

            {/* user svg here */}




          </div>
        </div>



      </section>
      {/* <div className="flex w-full">
        <div className="grid h-fit flex-grow card bg-base-300 w-min rounded-box place-items-center ">
          <img src={phone} className=' right-0 top-0  h-[400px]' />





        </div>
        <div className="divider divider-horizontal">OR</div>

        <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">

        </div>
      </div> */}
      <Footer></Footer>




    </main>
  )
}

export default App
