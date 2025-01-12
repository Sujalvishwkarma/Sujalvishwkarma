import Link from "next/link";

export const Button = ({title,href,style,dark}) => {
    return (
        <Link className={`px-4 py-2 hover:scale-95 duration-300 border rounded-full shadow-xl ${dark ? 'bg-black text-white' : 'bg-white text-black'}`} href={href ? href : ""}>{title}</Link>
    )
}