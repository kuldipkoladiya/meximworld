"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-4xl md:text-6xl font-bold text-white text-center"
                >
                    About <span className="text-[#0891b2]">Mexim World</span>
                </motion.h1>
            </section>

            {/* Company Story */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.img
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
                        alt="Our Story"
                        className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                    {/* Text */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0891b2]">
                            Our Journey
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At <span className="text-[#0891b2] font-semibold">Mexim World</span>,
                            we have built a legacy of trust, innovation, and global excellence.
                            From humble beginnings, we’ve grown into a worldwide network,
                            connecting markets with quality products and unmatched expertise.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Our mission is simple: to create lasting value for our clients and
                            partners while embracing sustainability, innovation, and integrity
                            in every step we take.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="bg-[#0891b2] py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 text-center md:text-left">
                    {/* Mission */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
                        <p className="text-white/90 leading-relaxed">
                            To deliver excellence in every product and service we provide,
                            ensuring customer satisfaction while fostering innovation and
                            responsibility towards society and the environment.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
                        <p className="text-white/90 leading-relaxed">
                            To be a global leader in import-export, connecting businesses
                            across continents and setting benchmarks for quality, integrity,
                            and innovation worldwide.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-12"
                    >
                        Meet Our <span className="text-[#0891b2]">Team</span>
                    </motion.h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {[1, 2, 3].map((member, i) => (
                            <motion.div
                                key={i}
                                className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`}
                                    alt="Team Member"
                                    className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-[#0891b2]"
                                />
                                <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
                                <p className="text-gray-500">CEO & Founder</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
