import { terminal } from 'virtual:terminal'
import { motion } from "framer-motion"
export default function ScrollTriggeredContainer({ children, className}) {
    return (
        <motion.div className='max-w-md '
            initial={{ x: -100 }}
            whileInView={{ x: 200 }}
            transition={{ ease: 'easeInOut', duration: .7 }}
        >
            {children}
        </motion.div>
    )
}
