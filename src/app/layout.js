import "../assets/css/globals.css";
import { Poppin } from "@/assets/fonts/font";
import Head from "next/head";

export const metadata = {
  title: "Sujal Vishwkarma",
  description: "MERN Stack and Cross Platform App Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${Poppin.className} transition-all duration-200 antialiased dark:bg-black dark:text-white`}>
    

        {children}
      </body>
    </html>
  );
}
