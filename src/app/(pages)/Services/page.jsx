"use client"
import { motion } from "framer-motion";
const Services = () => {
    return (
        <>
        <div className="">

        </div>
        <div className="grid grid-cols-3 px-[10%] gap-5">
            <motion.div whileHover={{scale:.95}} transition={{ type:'spring', stiffness: 800, damping: 17 }} className="border p-5">
                <motion.h1 className="text-2xl">Web Development</motion.h1>
                <motion.p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptas ad ea nesciunt numquam accusantium dolor molestiae vel magni excepturi? </motion.p>

            </motion.div>
            <motion.div className="border p-5">
                <motion.h1 className="text-2xl">App Development</motion.h1>
                <motion.p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptas ad ea nesciunt numquam accusantium dolor molestiae vel magni excepturi? </motion.p>

            </motion.div>
            <motion.div className="border p-5">
                <motion.h1 className="text-2xl">Web Development</motion.h1>
                <motion.p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptas ad ea nesciunt numquam accusantium dolor molestiae vel magni excepturi? </motion.p>

            </motion.div>
        </div>
        </>
    )
}
export default Services ;