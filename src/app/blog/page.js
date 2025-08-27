"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const blogs = [
    {
        id: 1,
        title: "The Future of Import-Export in 2025",
        excerpt: "Discover how AI and digital platforms are reshaping global trade.",
        image: "/images/blog1.jpg",
        content: `Global trade is entering a new era where automation... (full content here)`
    },
    {
        id: 2,
        title: "India’s Growing Trade Influence",
        excerpt: "India is rapidly becoming a global commerce hub.",
        image: "/images/blog2.jpg",
        content: `India’s economic momentum and trade policies...`
    },
    {
        id: 2,
        title: "India’s Growing Trade Influence",
        excerpt: "India is rapidly becoming a global commerce hub.",
        image: "/images/blog3.jpg",
        content: `India’s economic momentum and trade policies...`
    },
    {
        id: 2,
        title: "India’s Growing Trade Influence",
        excerpt: "India is rapidly becoming a global commerce hub.",
        image: "/images/blog4.jpg",
        content: `India’s economic momentum and trade policies...`
    },

];

export default function Blog() {
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <section className="w-full bg-gray-50 text-gray-900">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[40vh] flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-[#0891b2]/40" />
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        Our <span className="text-yellow-300">Blog</span>
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
                        Stay updated with the latest trends in import-export and global trade.
                    </p>
                </div>
            </motion.div>

            {/* Blog Thumbnails */}
            <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog, i) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
                        onClick={() => setSelectedBlog(blog)}
                    >
                        <div className="relative w-full h-56">
                            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#0891b2]">{blog.title}</h3>
                            <p className="mt-3 text-gray-600">{blog.excerpt}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {selectedBlog && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedBlog(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={selectedBlog.image}
                                    alt={selectedBlog.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-[#0891b2]">{selectedBlog.title}</h2>
                                <p className="mt-4 text-gray-700">{selectedBlog.content}</p>
                                <button
                                    onClick={() => setSelectedBlog(null)}
                                    className="mt-6 px-6 py-3 bg-[#0891b2] text-white rounded-full shadow hover:bg-[#067a94] transition"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
