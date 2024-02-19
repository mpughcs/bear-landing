import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function ScrollTriggeredPop({ children, className }) {
    const [isInView, setIsInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView();

    // Update isInView state based on whether the container is in view or not
    useEffect(() => {
        if (inView && !hasAnimated) {
            setIsInView(true);
            setHasAnimated(true);
        }
    }, [inView, hasAnimated]);

    return (
        <motion.div
            className={`${className}`}
            ref={ref}
            initial={{
                scale: 0,
            }}
            animate={{
                scale: isInView ? 1 : 0, // Scale up only when in view
            }}
            transition={{ ease: 'easeInOut', duration: 0.7 }}
        >
            {children}
        </motion.div>
    );
}
