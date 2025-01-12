"use client"
import Image from "next/image";
import { Projects } from "@/data/Projects";
const Project = (props) => {
    return (
        <div className="border relative text-white bg-black p-5">
            <div className="h-24 p-2 bg-white overflow-hidden rounded-full flex aspect-square">
                <Image className="m-auto" src={props.image} height={100} width={100} alt={props.name} />
            </div>
            <div className="">
                <h1 className="text-xl font-bold mt-2">{props.name}</h1>
                <p className="text-xs">{props.description}</p>
            </div>
        </div>
    )
}
const ProjectPage = () => {
    return (
        <>
            <section className="min-h-screen">
                <div className="text-center py-10">
                    <h1 className="text-3xl font-bold">My Projects</h1>
                </div>
                <div className="grid grid-cols-4 mx-16 gap-5 max-md:mx-4 max-md:grid-cols-1">
                    {
                        Projects.map((item, index) => (
                            <Project key={index} {...item}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}
export default ProjectPage;