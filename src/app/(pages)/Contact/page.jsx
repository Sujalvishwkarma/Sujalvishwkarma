
import { Input, TextArea } from "@/components/Input"
import Image from "next/image"
import BreadCumb from "@/components/BreadCumb"
const Contact = () => {
    return (
        <>
        <BreadCumb/>
            <div className="grid grid-cols-2 max-md:flex max-md:flex-col-reverse my-10 mx-16 max-md:mx-5">
                <div className="p-5 max-md:p-0">
                    <div className="grid w-3/4 max-md:w-full border-2 border-black p-5 mx-auto">
                        <h1 className="bg-black text-2xl text-white text-center mb-5 p-2">Lets Connect</h1>
                        <div className="flex gap-2">
                            <Input name={"First Name"} />
                            <Input name={"Last Name"} />
                        </div>
                        <Input name={"Phone"} />
                        <Input name={"Email"} />
                        <TextArea />
                        <button className="p-3 bg-emerald-950 text-white mt-3">Submit</button>
                    </div>
                </div>
                <div className="p-5 flex">
                    <Image className="m-auto" src="/images/contact.gif" height={500} width={500} alt="" />
                </div>
            </div>

        </>
    )
}
export default Contact