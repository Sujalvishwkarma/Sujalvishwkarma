import { ImportantLinks, PrimaryMenu } from "@/data/Menu"
import Image from "next/image"
import { FaInstagram, FaFacebook, FaLinkedin, FaGoogle, FaXTwitter } from "react-icons/fa6"
import Link from "next/link"
import { motion } from "framer-motion"

const SocialIconSize = 22
const SocialLinks = [
    { icon: <FaInstagram size={SocialIconSize} />, name: "Instagram", href: "/" },
    { icon: <FaFacebook size={SocialIconSize} />, name: "Facebook", href: "/" },
    { icon: <FaLinkedin size={SocialIconSize} />, name: "Linkedin", href: "/" },
    { icon: <FaGoogle size={SocialIconSize} />, name: "Google", href: "/" },
    { icon: <FaXTwitter size={SocialIconSize} />, name: "TwitterX", href: "/" },
]

const FooterLink = (item) => {
    return (
        <motion.li
            whileHover={{ scaleX: 1.25 }}
            className="flex origin-left my-1 w-fit">
            <Link className="text-stone-400 text-sm" href={item.href}>{item.name}</Link>
        </motion.li>
    )
}
const Footer = () => {
    return (
        <footer className="bg-stone-950 text-white">
            <div className="mx-[5%] max-md:mx-5">
                <div className="grid my-3 grid-cols-4 max-md:grid-cols-1">
                    <div className="p-5">
                        <div className="">
                            <Image className="mx-auto" unoptimized height={100} width={100} src="/images/sujal.png" alt="" />
                            <h1 className="text-2xl">Sujal Vishwkarma</h1>
                            <h5 className="text-sm text-stone-400">MERN Stack & Cross Platform App Developer</h5>
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg underline">Menu</h2>
                        {
                            PrimaryMenu.map((item, index) => (
                                <FooterLink key={index} {...item} />
                            ))
                        }
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg underline">Important Links</h2>
                        {
                            ImportantLinks.map((item, index) => (
                                <FooterLink key={index} {...item} />
                            ))
                        }
                    </div>
                    <div className="p-5">
                        <form className="grid relative">
                            <label htmlFor="" className="text-xs">Subscribe me to stay tuned with me.</label>
                            <input type="email" name="email" placeholder="Email Address" className="p-3 mt-2 placeholder-stone-500 border border-stone-500 outline-none rounded bg-stone-800" />
                            <button className="text-xs absolute right-2 top-1/2 w-fit p-1 bg-stone-950 border border-stone-500 rounded shadow-lg">Subscribe</button>
                        </form>
                        <div className="grid mt-5">
                            <p className="text-xs">For More Information</p>
                            <Link href={'https://anantvritti.vercel.app/'} className="p-2 flex items-center justify-center rounded border border-stone-500 bg-black">
                                <Image src={'/images/anantvritti.webp'} height={50} width={50} alt="" />
                                AnantVritti
                            </Link>
                            <div className="grid grid-cols-5 mt-5">
                                {
                                    SocialLinks.map((item, index) => (
                                        <Link className="m-auto text-stone-500 hover:text-white" key={index} title={item.name} href={item.href}>{item.icon}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-stone-400 px-[5%] py-3 bg-stone-800 text-sm flex max-md:flex-col justify-between">
                <p>Design and Developed By <Link className="text-white" href="">Sujal Vishwkarma</Link></p>
                <p>Last Updated On : <span className="text-white">13 Jan 2025</span></p>
            </div>
        </footer>
    )
}
export default Footer