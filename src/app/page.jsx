"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { useState, useEffect,useMemo } from "react";
export default function Home() {
  
  const [title, setTitle] = useState('');
  
  const textArray = useMemo(() => [
    "Sujal Vishwkarma",
    "Full Stack Developer",
    "Graphic Designer",
    "Cross Platform Developer"
  ], []);

  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const pauseDuration = 1000; // Pause before deleting
  const switchDuration = 500; // Pause before typing the next title

  useEffect(() => {
    let charIndex = 0;
    let arrayIndex = 0;
    let currentTitle = '';
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

  },[]) ;
  return (
    <>
      <Header absolute />
      <section className="min-h-screen flex relative dark:bg-black bg-gray-100  ">
        <div className=" absolute opacity-50 dark:opacity-100 top-1/2 left-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square">
          <div className="relative w-full h-full animate-wiggle">
            <div className="h-1/4 shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 absolute aspect-square dark:bg-slate-900 bg-gray-100 rounded-full dark:shadow-slate-600"></div>
            <div className="h-2/3 shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 absolute aspect-square dark:bg-slate-900 bg-gray-100 rounded-full dark:shadow-slate-600"></div>
            <div className="h-full shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute aspect-square dark:bg-slate-900 bg-gray-100 rounded-full dark:shadow-slate-600"></div>
          </div>
        </div>
        <div className="grid z-20 grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse w-full my-auto mx-16 max-md:mx-5">
          <div className=" p-5 flex items-center">
            <div className="max-md:text-center">
              <h4 className="text-2xl">Hello Everyone</h4>
              <h1 className="text-4xl max-md:text-xl my-2">I am <br className="hidden max-md:block" /> <span className="font-bold">{title}</span></h1>
              <p className="text-slate-500 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quod, eligendi vitae quos corporis quo! Iste beatae vero amet iure!</p>
              <div className="flex max-md:justify-center mt-5 gap-5">
                <Button title={"Hire Me"} />
                <Button title={"Download CV"} dark={true} />
              </div>
            </div>
          </div>
          <div className="p-5 flex">
            <div className="w-2/3 m-auto aspect-square">
              <Image src="/images/sujal.png" alt="" height={500} width={500} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
