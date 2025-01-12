import Link from "next/link"
const Footer = () => {
    return (
        <footer className="bg-black text-white py-5">
            <div className="mx-16 max-md:mx-5">
                <div className="text-center text-yellow-300">
                    <h1 className="text-2xl">Lets connect me to create something amazing</h1>
                </div>
                <div className="grid my-3 grid-cols-3 max-md:grid-cols-1">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="text-3xl">Sujal Vishwkarma</h1>
                            <h5 className="text-sm">MERN Stack & Cross Platform App Developer</h5>
                        </div>
                    </div>
                    <div className="p-5"></div>
                    <div className="p-5">
                        <div className="grid">
                            <label htmlFor="">Subscribe me</label>
                            <input type="text" placeholder="Email Address" className="p-3 rounded-full bg-gray-800" />
                        </div>
                    </div>
                </div>
                <div className="text-slate-400 flex max-md:flex-col justify-between">
                    <p>Design and Developed By <Link className="text-white" href="">Sujal Vishwkarma</Link></p>
                    <p>Last Updated On : <span className="text-white">27 Sep 2024</span></p>
                </div>
            </div>
        </footer>
    )
}
export default Footer