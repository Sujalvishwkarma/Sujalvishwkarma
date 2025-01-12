"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { PrimaryMenu } from "@/data/Menu"
import { FaBarsStaggered ,FaCross,FaXmark} from "react-icons/fa6";
import { usePathname } from "next/navigation"
const NavButton = props => {
    return (
        <li className="flex">
            <Link className="p-2 rounded-full max-md:bg-black max-md:text-white max-md:my-1" href={props.href}>{props.name}</Link>
        </li>
    )
}
const Topbar = () => {
    return (
        <>
            <nav className="p-2"></nav>
        </>
    )
}
const Navbar = () => {
    const [isMenuActive, SetMenuActive] = useState(false);
    return (
        <>
            <nav className="mx-16 max-md:relative max-md:mx-3 p-3 max-sm:p-1 flex justify-between items-center">
                <Link className="text-3xl max-md:text-xl max-sm:text-[1em] font-bold p-3" href="/">Sujal Vishwkarma</Link>
                <ul className={`flex ${isMenuActive ? 'max-md:block' : 'max-md:hidden'} max-md:border-2 max-md:rounded-2xl max-md:absolute max-md:flex-col max-md:top-full max-md:bg-white max-md:z-50 max-md:p-5 max-md:left-0 max-md:right-0`}>
                    {
                        PrimaryMenu.map((item, index) => (
                            <NavButton key={index} id={index} {...item} />
                        ))
                    }
                </ul>
                <ul className="flex items-center gap-5 max-md:gap-2">
                    <li className="flex"><Link className="p-2 max-md:text-xs max-sm:text-[.6em] text-nowrap rounded-full" href="HireMe">Hire Me</Link></li>
                    <li className="flex"><Link className="p-2 max-md:text-xs max-sm:text-[.6em] text-nowrap px-3 border rounded-full text-white dark:text-black bg-black dark:bg-white" href="">Download CV</Link></li>
                    <li className="hidden max-md:block"><button onClick={() => SetMenuActive(!isMenuActive)} className="p-2"> {isMenuActive ? <FaXmark size={18}/> : <FaBarsStaggered size={18} />}</button></li>
                </ul>
            </nav>
        </>
    )
}
const Header = ({ absolute, className }) => {
    const pathname = usePathname();
    const ispathnameactive = false
    return (
        <div className={`${absolute && 'absolute w-full z-50'} ${className} ${ispathnameactive && 'text-white'}`}>
            <Topbar />
            <Navbar />
        </div>
    )
}
export default Header;