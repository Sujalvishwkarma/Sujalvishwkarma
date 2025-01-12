import Image from "next/image"
import BlogBox from "@/components/BlogBox"
const Blog = () => {
    const blogs = [
        {name: "blog"},
        {name: "blog"},
        {name: "blog"},
        {name: "blog"},
        {name: "blog"},
            ] ;
    return (
        <>
            <div className="border text-white mx-16 max-md:mx-5 max-md:flex-col-reverse flex justify-between items-center rounded-xl bg-black p-5">
                <div className="w-1/3 max-md:w-full">
                    <h1 className="text-3xl max-md:text-lg max-md:text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, adipisci?</h1>
                </div>
                <Image src="/images/blog.gif" height={300} width={300} alt="" />
            </div>
            <div className="mx-16 max-md:mx-5 p-5 max-md:px-0">
                <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-5">
                    {blogs.map((item,index)=>(
                        <BlogBox key={index} {...item}/>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Blog
