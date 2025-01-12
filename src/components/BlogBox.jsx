import Link from "next/link"
const BlogBox = () => {
    return (
      <Link href="/Blog/2" className=" rounded-lg overflow-hidden border">
        <div className="h-24 w-full bg-black"></div>
        <div className="p-2">
            <h1 className="text-lg font-bold">Lorem Ipsum Donor Imet</h1>
            <p className="text-sm text-pretty">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum enim debitis minima necessitatibus ut itaque iste facilis magnam molestiae libero?</p>
        </div>
      </Link>
    )
}
export default BlogBox