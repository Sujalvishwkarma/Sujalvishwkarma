"use client"
import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'
const BreadCumb = () => {
    const pathname = usePathname();
    return (
        <div className="text-center">
            <motion.h1 
            whileHover={{scale:1.5}}
            className="text-2xl">{pathname.substring(1)}</motion.h1>
        </div>
    )
}

export default BreadCumb