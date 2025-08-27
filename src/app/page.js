"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
};

export default function Home() {
    return (
        <main className="bg-white text-gray-900 overflow-hidden">
            {/* ================= HERO SECTION ================= */}
            <section className="flex items-center justify-center px-6 md:px-16 py-20 bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
                <div className="grid md:grid-cols-2 items-center gap-12 max-w-7xl w-full">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                            Innovating{" "}
                            <span className="text-teal-300">Healthcare</span> for a Better
                            Tomorrow
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200">
                            We deliver trusted pharmaceutical products worldwide with the
                            highest standards of quality, safety, and innovation. Your health,
                            our commitment.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/products"
                                className="px-6 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-blue-950 font-semibold shadow-lg transition"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-xl border border-white text-white hover:bg-white hover:text-blue-900 transition"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    {/* RIGHT IMAGE + FLOATING CARDS */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <Image
                            src="/images/globe-wire.jpg"
                            alt="Pharma Export"
                            width={480}
                            height={480}
                            className="rounded-2xl object-contain shadow-2xl"
                        />

                        {/* Floating Glass Cards */}
                        <motion.div
                            className="absolute top-10 -left-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl shadow-md"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <p className="text-blue-900 font-bold">100+ Countries Served</p>
                        </motion.div>

                        <motion.div
                            className="absolute bottom-10 -right-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl shadow-md"
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            <p className="text-cyan-700 font-bold">Trusted Quality</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <Image
                            src="/images/generated-image.png"
                            alt="About Mexim World"
                            width={500}
                            height={400}
                            className="rounded-xl shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            About Mexim World
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We specialize in global import and export of premium pharmaceutical
                            products. With robust supply chains and international partnerships,
                            we bring quality medicines, vaccines, and healthcare products to
                            communities worldwide.
                        </p>
                        <Link
                            href="/about"
                            className="bg-teal-400 text-blue-950 px-6 py-3 rounded-lg font-semibold shadow hover:bg-teal-300 transition"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-cyan-50">
                <motion.div
                    className="container mx-auto px-6 md:px-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold text-blue-900 mb-12">
                        Why Choose Mexim World?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Quality Assurance",
                                desc: "WHO-GMP certified products ensuring safety & effectiveness.",
                                icon: "💊",
                            },
                            {
                                title: "Global Reach",
                                desc: "Strong trade networks across 40+ countries worldwide.",
                                icon: "🌍",
                            },
                            {
                                title: "Trusted Logistics",
                                desc: "Efficient supply chain ensuring on-time delivery.",
                                icon: "🚚",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ================= PRODUCTS ================= */}
            <section className="py-20">
                <motion.div
                    className="container mx-auto px-6 md:px-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold text-blue-900 mb-12">
                        Our Key Products
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Medicines",
                                img: "/images/premium_photo-1723618881687-0826b6a5f12c.jpg",
                            },
                            {
                                name: "Vaccines",
                                img: "/images/mathurin-napoly-matnapo-qqyIX177sY0-unsplash.jpg",
                            },
                            {
                                name: "Medical Equipment",
                                img: "/images/kristine-wook-E1_RW3HIbUw-unsplash.jpg",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={400}
                                    height={250}
                                    className="w-full h-56 object-cover"
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-blue-900">
                                        {item.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ================= PARALLAX ================= */}
            <section
                className="relative h-[70vh] flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: "url('/images/pharma-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                }}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="bg-black/60 px-8 py-12 rounded-2xl max-w-3xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Excellence in Global Pharma Export
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200">
                        With cutting-edge facilities and decades of experience, we ensure
                        safe, reliable, and innovative healthcare solutions for the world.
                    </p>
                </motion.div>
            </section>

            {/* ================= CERTIFICATIONS ================= */}
            <section className="py-20 bg-blue-50">
                <motion.div
                    className="container mx-auto px-6 md:px-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Our Certifications
                    </h2>
                    <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
                        We are committed to maintaining the highest quality standards
                        globally. Our operations are backed by international certifications.
                    </p>
                    <div className="flex flex-wrap justify-center gap-10">
                        {["WHO-GMP", "ISO 9001:2015", "FDA Approved", "CE Certified"].map(
                            (cert, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    custom={i}
                                    className="bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition text-blue-900 font-semibold"
                                >
                                    {cert}
                                </motion.div>
                            )
                        )}
                    </div>
                </motion.div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="py-20">
                <motion.div
                    className="container mx-auto px-6 md:px-20 text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold text-blue-900 mb-12">
                        What Our Clients Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. A. Sharma",
                                text: "Mexim World has been our trusted partner for global medicine supply. Quality and delivery are always exceptional!",
                            },
                            {
                                name: "Pharma Distributor, Kenya",
                                text: "We rely on Mexim for vaccines and equipment – their service is unmatched in professionalism.",
                            },
                            {
                                name: "Hospital Group, UAE",
                                text: "The team ensures timely shipments and top-quality products. Truly world-class!",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <p className="text-gray-700 mb-4 italic">“{item.text}”</p>
                                <h4 className="font-semibold text-blue-900">{item.name}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ================= GLOBAL NETWORK ================= */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-700 text-white text-center">
                <motion.div
                    className="container mx-auto px-6 md:px-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl font-bold mb-6">Our Global Network</h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        With trade relations across Asia, Africa, Europe, and America, Mexim
                        World is at the forefront of global healthcare distribution.
                    </p>
                    <Image
                        src="/images/andrew-stutesman-l68Z6eF2peA-unsplash.jpg"
                        alt="Global Map"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-lg mx-auto"
                    />
                </motion.div>
            </section>

            {/* ================= CALL TO ACTION ================= */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-700 text-center text-white">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Partner With Mexim World
                    </h2>
                    <p className="text-lg mb-6 max-w-xl mx-auto">
                        Let’s build healthier communities together through strong
                        partnerships and reliable global pharma trade.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
