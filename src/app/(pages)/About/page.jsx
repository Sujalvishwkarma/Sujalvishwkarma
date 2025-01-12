import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="text-center py-10 ">
                <h1 className="text-3xl font-bold">About me</h1>
            </div>
            <div className="flex mx-16 max-md:mx-5 max-md:flex-col">
                <div className="w-1/3 max-md:w-full flex">
                    <Image className="m-auto" src="/images/sujal.png" height={300} width={300} alt="sujal Vishwkarma"/>
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl max-md:text-center max-md:text-xl">Hi I am Sujal Vishwkarma,</h1>
                    <p className="text-slate-500 max-md:text-justify">A 19 year-old tech enthusiast and aspiring software developer with a strong foundation in both business and computer applications. Currently, I am pursuing a dual degree: B.Com from Vikram University, Ujjain, and BCA from Manipal University, Jaipur. This unique combination allows me to blend financial acumen with technical expertise, providing a comprehensive approach to problem-solving.
                        I am currently working at Sahyog Associates, where I handle diverse responsibilities, including taxation, web development, cyber security, and account management services. My role here has given me hands-on experience in managing real-world challenges and developing solutions that impact businesses on multiple levels.
                        My true passion lies in creating digital experiences that make a difference. Whether it's building intuitive mobile apps with React Native or crafting modern, responsive websites using React.js and Next.js, I am dedicated to pushing the boundaries of technology to deliver user-friendly solutions.
                        As I continue to grow in my career, I aim to merge my technical skills with my business knowledge, driving innovation in both fields. My ultimate goal is to create applications and platforms that not only solve problems but also empower people and businesses to thrive in the digital age.</p>
                </div>
            </div>
        </>
    )
}
export default About;