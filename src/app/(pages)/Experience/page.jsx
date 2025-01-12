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


            Here's a structured example for your "Experience" page. You can customize it further based on your roles, achievements, and skills. The page will include your professional experience, skills, and the technologies you're familiar with. 

### Experience Page Content:

---

## **Experience**

### **Sahyog Associates**  
*Financial Services & Real Estate Business*  
**Role:** Taxation & Marketing Specialist | Web Development | Social Media Manager  
**Duration:** June 2020 - Present | *5+ years*  
**Location:** Mahidpur, India  

#### **Key Responsibilities:**
- **Taxation & Accounts Management:**
  - Manage taxation and accounting for the company, including filing returns, managing ledgers, and preparing financial statements.
  - Use MS Excel to track income, expenses, partner capital, and generate reports.
  - Assist in tax planning and ensure compliance with all relevant regulations.

- **Web Development:**
  - Built and maintain the company’s website and internal tools using HTML, CSS, JavaScript, and WordPress.
  - Collaborated with teams to design user-friendly websites that meet business objectives.
  - Integrated third-party tools like Google Analytics, social media feeds, and business data analysis tools.

- **Marketing & Social Media Management:**
  - Created and managed Instagram posts, advertisements, and other social media campaigns to increase brand visibility.
  - Enhanced customer engagement through creative content and digital marketing strategies.
  - Designed promotional materials and visual content for digital platforms.

#### **Technologies & Skills:**
- **Web Development:** HTML, CSS, JavaScript, React.js, Next.js, WordPress
- **Design Tools:** Canva, Photoshop
- **Marketing Tools:** Google Analytics, Instagram, Facebook Ads
- **Database Management:** MS Excel

---

### **Freelance Web Developer & Designer**  
**Role:** Full Stack Developer | Graphic Designer  
**Duration:** 2019 - Present  
**Location:** Remote

#### **Key Responsibilities:**
- **Web Development & Design:**
  - Designed and developed custom websites for clients, focusing on responsive design and user experience.
  - Utilized technologies such as React.js, Next.js, and Tailwind CSS to build fast and scalable web applications.
  - Worked with clients to understand their needs and delivered tailored solutions, including e-commerce websites and portfolio sites.

- **Graphic Design:**
  - Created custom logos, branding materials, and website visuals for small businesses and startups.
  - Collaborated with clients to understand their vision and deliver designs that fit their brand identity.
  
#### **Technologies & Skills:**
- **Web Development:** React.js, Next.js, Tailwind CSS, Node.js, Express
- **Design Tools:** Figma, Photoshop, Illustrator
- **Version Control:** Git, GitHub

---

### **Education**

#### **Bachelor of Computer Applications (BCA)**  
*Manipal University, Jaipur*  
**Duration:** 2023 - Present  

#### **Bachelor of Commerce (B.Com)**  
*Vikram University, Ujjain*  
**Duration:** 2023 - Present  

---

### **Certifications**
- **SQL Bronze Badge** - HackerRank  
- **Full Stack Web Development** - [Add Course Provider]  
- **React Native Fundamentals** - [Add Course Provider]

---

### **Volunteer Experience**

#### **Tech Community Contributor**  
*Online | 2022 - Present*  
- Contribute to open-source projects and write tutorials on web development and mobile application development.
- Mentor new developers and share insights on platforms like GitHub and Stack Overflow.

---

### **Achievements**
- Increased client engagement by 30% through social media campaigns and content creation at Sahyog Associates.
- Developed 10+ websites for small businesses with a focus on user experience and performance.
- Recognized for innovative solutions and proactive problem-solving in web development and digital marketing.

---

### **Skills Summary**
- **Front-End Development:** React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS, NativeWind
- **Back-End Development:** Node.js, Express, Firebase, MySQL, MongoDB
- **Design Tools:** Figma, Canva, Photoshop, Illustrator
- **Version Control:** Git, GitHub
- **Other:** SEO, Social Media Marketing, Content Creation, Database Management, Digital Marketing

---

This structure provides a clear overview of your work experience, achievements, skills, and technologies, showcasing your capabilities in both web development and other areas like marketing and design. You can further personalize it by adding specific achievements or additional sections like a portfolio or projects you’ve worked on.
        </>
    )
}
export default ExperiencePage;