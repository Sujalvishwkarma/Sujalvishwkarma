"use client"
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}