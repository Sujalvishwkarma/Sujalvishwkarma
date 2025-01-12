"use client"
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathname = usePathname();
    const ischange = pathname == "/Experience" ;
    return (
        <>
            <Header absolute={ischange} />
            <main className={`min-h-screen`}>
                {children}
            </main>
            <Footer />
        </>
    )
}