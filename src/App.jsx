import { useState } from 'react'
import './App.css'
import splash_image from './assets/images/deviceframes.png';
import { motion, useScroll, useAnimate, stagger } from "framer-motion"
import { LuAlarmClock } from "react-icons/lu";
import { BiBot } from "react-icons/bi";
import NavBar from './components/Navbar';
import { FaBell } from "react-icons/fa6";
import ScrollTriggeredContainer from './components/ScrollTriggeredContainer';
import { terminal } from 'virtual:terminal'


function App() {

  // const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: .8, // Delay the animations of the children by 0.5 seconds  
        staggerChildren: 0.4, // Stagger the animations of the children by 0.1 seconds
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


  return (
    <>
      <div className='p-[2rem] max-w-[1480px] mx-auto'>
        <NavBar></NavBar>


        <div className='flex flex-col md:flex-row justify-center items-center '>
          <motion.div className='max-w-md pb-[140px] flex flex-col gap-4 pt-20 '
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: .7 }
            }
          >
            <h1 className='font-Poppins text-6xl'>Gift with ease</h1>
            <h1 className='font-Poppins text-6xl'>Gift with <span className='font-Pacifico text-action2'>Bear</span></h1>
            <p className='font-Poppins text-xl'>Never miss a special occasion again. </p>

            <motion.ul
              className='flex flex-col gap-4 pl-6'
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'>
                <FaBell className='text-4xl text-primary' />
                <p className='font-Poppins text-lg text-primary'>Set reminders for important dates</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'
              >
                <BiBot className='text-4xl text-primary' />

                <p className='font-Poppins text-lg text-primary'>Smart gift suggestions</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className='flex flex-row items-center gap-2'
              >
                <LuAlarmClock className='text-4xl text-primary' />
                <p className='font-Poppins text-lg text-primary'>Send thoughtful gifts on time</p>
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
              transition={{ ease: 'easeIn', duration: .5 }}
            >
              <div className=''>
                <img src={splash_image} alt='react logo' className='drop-shadow-xl min-w-[500px]' />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      {/* how it works */}
      <div className='bg-action1 h-screen w-[100%]'>

      </div>





    </>
  )
}

export default App
