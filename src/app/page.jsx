"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { WhatiDo, WhyChooseMe } from "@/components/UISections";

export default function Home() {
  const [title, setTitle] = useState("");

  const textArray = useMemo(
    () => [
      "Sujal Vishwkarma",
      "Full Stack Developer",
      "Graphic Designer",
      "Cross Platform Developer",
    ],
    []
  );

  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const pauseDuration = 1000; // Pause before deleting
  const switchDuration = 500; // Pause before typing the next title

  useEffect(() => {
    let charIndex = 0;
    let arrayIndex = 0;
    let currentTitle = "";
    let isDeleting = false;

    const typeTitle = () => {
      if (arrayIndex < textArray.length) {
        if (!isDeleting) {
          if (charIndex < textArray[arrayIndex].length) {
            currentTitle += textArray[arrayIndex][charIndex];
            charIndex++;
            setTitle(currentTitle);
            setTimeout(typeTitle, typingSpeed);
          } else {
            isDeleting = true;
            setTimeout(typeTitle, pauseDuration);
          }
        } else {
          if (charIndex > 0) {
            currentTitle = currentTitle.slice(0, -1);
            charIndex--;
            setTitle(currentTitle);
            setTimeout(typeTitle, deletingSpeed);
          } else {
            isDeleting = false;
            arrayIndex++;
            setTimeout(typeTitle, switchDuration);
          }
        }
      } else {
        arrayIndex = 0;
        setTimeout(typeTitle, switchDuration);
      }
    };
    typeTitle();
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen flex relative dark:bg-black bg-stone-50">
        <div className="grid z-20 grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse w-full my-auto mx-16 max-md:mx-5">
          <motion.div
            className="p-5 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-md:text-center">
              <h4 className="text-2xl">Hello Everyone</h4>
              <h1 className="text-4xl max-md:text-xl my-2">
                I am <br className="hidden max-md:block" />
                <motion.span
                  className="font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  {title}
                </motion.span>
              </h1>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis quod, eligendi vitae quos corporis quo! Iste beatae
                vero amet iure!
              </p>
              <div className="flex max-md:justify-center mt-5 gap-5">
                <motion.button
                  className="shadow-lg p-2 border px-4 border-black rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Hire me
                </motion.button>
                <motion.button
                  className="bg-black p-2 border px-4 border-black rounded-full text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Download CV
                </motion.button>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-5 flex relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-2/3 m-auto aspect-square relative">
              <motion.img
                initial={{ rotate: "-90deg", scale: 0 }}
                animate={{ rotate: "20deg", scale: 1 }}
                transition={{ duration: 3 }}
                className="absolute h-16 top-0 left-0"
                src="https://th.bing.com/th/id/R.b15b960e1cafb15e83d78f73e5f1ab34?rik=U1y8cnVL4ZZzTw&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f62a74de8223343fbc2207d01.png&ehk=sAQOtT8poBQgOmOVB3%2bFv%2bQuxqgT%2btonU1Asl73i2T8%3d&risl=&pid=ImgRaw&r=0"
              />
              <motion.img
                initial={{ rotate: "-90deg", scale: 0 }}
                animate={{ rotate: "20deg", scale: 1 ,translateX:150}}
                transition={{ duration: 3 }}
                className="absolute h-16 top-0 left-0"
                src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-css-framework-customizable-coding-lang-pack-logos-icons-7577995.png"
              />
              <motion.img
                initial={{ rotate: "-90deg", scale: 0 }}
                animate={{ rotate: "20deg", scale: 1 ,translateX:90}}
                transition={{ duration: 3 }}
                className="absolute h-16 top-0 left-0"
                src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
              />
              <Image
                src="/images/sujal.png"
                alt="Sujal Vishwkarma"
                height={500}
                width={500}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <WhatiDo/>

      <WhyChooseMe/>
      <Footer />
    </>
  );
}
