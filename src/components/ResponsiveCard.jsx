import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ResponsiveCard({ children, img, alt, header, className, ...rest }) {


    // Update isInView state based on whether the container is in view or not

    return (
        <motion.div className={"card lg:card items-center pt-5 bg-base-100 shadow-xl basis-[300px]  max-w-[420px] h-[500px] content-between " + className}
            viewport={{
                once: true,
                margin: '260px'
            }}
            // ref={ref}
            initial={{
                scale: 0,
            }}
            whileInView={{
                scale: 1, // Scale up only when in view
            }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}

        >
            <h1 className="card-title text-2xl">{header}</h1>
            <div className="card-body flex flex-col justify-around">

                <figure className=' my-auto'>{img}</figure>
                {/* {img} */}
                <div className="">
                    {children}
                </div>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div> */}
            </div>
        </motion.div>
    )
}