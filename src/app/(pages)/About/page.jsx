import { WhatiDo, WhyChooseMe } from "@/components/UISections";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="text-center py-10 ">
        <h1 className="text-3xl font-bold">About me</h1>
      </div>
      <div className="flex mx-16 max-md:mx-5 max-md:flex-col">
        <div className="w-1/3 max-md:w-full flex">
          <Image
            className="m-auto"
            src="/images/sujal.png"
            height={300}
            width={300}
            alt="sujal Vishwkarma"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl max-md:text-center max-md:text-xl">
            Hi I am Sujal Vishwkarma,
          </h1>
          <p className="text-slate-500 max-md:text-justify">
            a 19-year-old tech enthusiast and aspiring software developer with a
            strong foundation in both business and computer applications. I'm
            currently pursuing a dual degree: B.Com from Vikram University,
            Ujjain, and BCA from Manipal University, Jaipur. This unique
            combination of business and technology allows me to approach
            problem-solving from a holistic perspective, blending financial
            insight with technical expertise. I currently work at Sahyog
            Associates, where I manage a variety of responsibilities, including
            taxation, web development, cybersecurity, and account management
            services. This role has provided me with hands-on experience in
            tackling real-world challenges and developing solutions that have a
            tangible impact on businesses. My true passion lies in creating
            digital experiences that make a difference. Whether it's building
            intuitive mobile apps using React Native or designing modern,
            responsive websites with React.js and Next.js, I am committed to
            pushing the boundaries of technology to deliver solutions that are
            not only functional but also user-friendly. As I continue to grow in
            my career, I aim to merge my technical skills with my business
            knowledge, driving innovation in both fields. My ultimate goal is to
            create applications and platforms that solve problems while
            empowering people and businesses to thrive in the digital age.
          </p>
        </div>
      </div>

      <WhatiDo/>

      <WhyChooseMe/>
    </>
  );
};
export default About;
