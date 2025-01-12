"use client"
import Image from "next/image";
import { Experience } from "@/data/Experience";
const ExperienceBox = (props) => {
    return (
        <div className="border-2 max-md:flex-col bg-white border-black flex items-center gap-5 p-5 my-5">
            <div className="h-32  flex  aspect-square">
                <Image className="m-auto" height={200} width={200} src={props.image} alt={props.company} />
            </div>
            <div className="">
                <h1 className="text-2xl font-bold">{props.company}</h1>
                <h5 className="text-slate-500">{props.designation}</h5>
                <h5>{props.period}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
const ExperiencePage = () => {
    return (
        <>
            <section className="min-h-screen max-md:pt-20 flex bg-amber-50 flex-col justify-center">
                <div className="text-center">
                    <h1 className="text-3xl">Experience</h1>
                </div>
                <div className="grid grid-cols-2 mx-16 max-md:mx-5 max-md:grid-cols-1 gap-5">
                    {Experience.map((item, index) => (
                        <ExperienceBox key={index} {...item} />
                    ))}
                </div>
            </section>
        </>
    )
}
export default ExperiencePage;