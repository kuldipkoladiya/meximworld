"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GlobalPresence() {
    const router = useRouter();

    return (
        <section className="w-full bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[45vh] flex items-center justify-center"
            >
                <Image
                    src="/images/global-hero.jpg" // 👉 place your image in public/images/global-hero.jpg
                    alt="Global Presence"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0891b2]/30" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Our <span className="text-yellow-300">Global Presence</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                        Connecting businesses worldwide with{" "}
                        <span className="text-yellow-200">trust & reliability</span>.
                    </p>
                </div>
            </motion.div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { number: "28+", label: "Countries Served" },
                    { number: "100+", label: "Global Clients" },
                    { number: "25+", label: "Years Experience" },
                    { number: "100%", label: "Quality Assurance" },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
                    >
                        <h2 className="text-4xl font-bold text-[#0891b2]">{stat.number}</h2>
                        <p className="text-gray-700 mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Closing CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-[#0891b2] text-white py-20 px-6"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-bold">
                        Connecting Businesses Worldwide
                    </h3>
                    <p className="mt-4 text-lg md:text-xl text-teal-100">
                        From India to USA, Europe, Middle East, and Asia – we deliver
                        excellence with trust and reliability.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push("/contact")}
                        className="mt-8 px-8 py-4 bg-white text-[#0891b2] font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}
