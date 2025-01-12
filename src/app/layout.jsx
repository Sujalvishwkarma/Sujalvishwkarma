import "../assets/css/globals.css";
import { Poppin } from "@/assets/fonts/font";

export const metadata = {
  title: "Sujal Vishwkarma",
  description: `I am a passionate and dedicated Full Stack Developer, Graphic Designer, and Cross-Platform Developer. With a strong foundation in web development, mobile app development, and design, I bring a holistic approach to creating innovative solutions.
   My mission is to create seamless, intuitive, and impactful experiences for users while continuously learning and growing in the ever-evolving tech landscape.In addition to my technical expertise, I am also the founder of AnantVritti, a part-time startup that 
   I launched with a vision to provide innovative B2B SaaS solutions and comprehensive web & app development services. Operating with zero employees and self-funded, AnantVritti is a venture driven by my passion for technology and problem-solving.Despite the startup being in its early stages, 
   AnantVritti is built on a foundation of dedication, continuous improvement, and a deep commitment to delivering value to clients. With no external funding or large team, I focus on developing solutions through hands-on practice and real-world experience. This approach allows me to offer customized, scalable solutions while continuously learning and refining my skills to stay ahead in the tech industry.
   Whether it's crafting interactive websites or designing mobile applications, my goal is always to create well-crafted, innovative digital solutions that make a difference.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Poppin.className} relative transition-all duration-200 antialiased dark:bg-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
