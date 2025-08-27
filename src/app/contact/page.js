"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#0891b2] to-[#067a93] text-white py-20 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-5xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Let’s Connect
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100"
                    >
                        Reach out to us for global trade, partnerships, or any inquiries.
                        We’re here to build bridges across borders.
                    </motion.p>
                </div>
                {/* Floating circles animation */}
                <div className="absolute inset-0 opacity-20">
                    <div className="w-72 h-72 bg-white rounded-full absolute -top-10 -left-10 animate-pulse"></div>
                    <div className="w-96 h-96 bg-white rounded-full absolute -bottom-20 -right-20 animate-ping"></div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <h2 className="text-3xl font-bold text-[#0891b2]">Get in Touch</h2>
                    <p className="text-gray-600">
                        Have questions or want to start a business discussion?
                        Contact us and our team will respond quickly.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <MapPin className="w-6 h-6 text-[#0891b2]" />
                            <span>123 Pharma Street, Ahmedabad, India</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="w-6 h-6 text-[#0891b2]" />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="w-6 h-6 text-[#0891b2]" />
                            <span>contact@meximworld.com</span>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-8 rounded-2xl shadow-lg"
                >
                    <h2 className="text-2xl font-semibold text-[#0891b2] mb-6">
                        Send Us a Message
                    </h2>
                    <form className="space-y-4">
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                        />
                        <motion.input
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                        />
                        <motion.textarea
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            placeholder="Your Message"
                            rows="5"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0891b2]"
                        ></motion.textarea>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-[#0891b2] text-white font-semibold py-3 rounded-lg hover:bg-[#067a93] transition"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            {/* Map */}
            <section className="w-full h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789!2d72.571362!3d23.022505"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
}
