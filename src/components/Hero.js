"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative h-[90vh] w-full bg-gradient-to-b from-white via-[#f8fafc] to-[#eef2f7] overflow-hidden flex items-center justify-center">
            {/* Floating subtle pill shapes */}
            <motion.div
                className="absolute top-10 left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-32 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                animate={{ y: [0, -40, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Trusted <span className="text-cyan-600">Pharma Export</span> Partner
                </h1>
                <p className="mt-6 text-gray-600 text-lg md:text-xl">
                    Delivering reliable, high-quality pharmaceutical products worldwide —
                    building healthier futures with trust and excellence.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <button className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium shadow-md transition">
                        Explore Products
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-cyan-600 text-cyan-600 hover:bg-cyan-50 transition">
                        Contact Us
                    </button>
                </div>

                {/* Hero Image (Clean pill/DNA image) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mt-12 w-[280px] md:w-[400px]"
                >
                    <Image
                        src="/images/pharma-hero.png" // replace with your pill/DNA/product image
                        alt="Pharma Global"
                        width={500}
                        height={500}
                        className="object-contain drop-shadow-xl"
                    />
                </motion.div>
            </div>
        </main>
    );
}
