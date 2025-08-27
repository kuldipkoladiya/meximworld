"use client";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Pharmaceutical Tablets",
        description: "High-quality generic & branded medicines exported worldwide.",
        image: "https://source.unsplash.com/600x400/?medicine,tablets",
    },
    {
        id: 2,
        name: "Medical Equipment",
        description: "Trusted hospital-grade equipment and surgical instruments.",
        image: "https://source.unsplash.com/600x400/?medical,equipment",
    },
    {
        id: 3,
        name: "Nutritional Supplements",
        description: "Vitamins, proteins, and health boosters for global supply.",
        image: "https://source.unsplash.com/600x400/?supplements,health",
    },
    {
        id: 4,
        name: "Cosmetic Products",
        description: "Premium skincare & personal care products for export.",
        image: "https://source.unsplash.com/600x400/?cosmetics,skincare",
    },
    {
        id: 5,
        name: "Vaccines & Injections",
        description: "Cold-chain maintained vaccines and injectable medicines.",
        image: "https://source.unsplash.com/600x400/?vaccine,injection",
    },
    {
        id: 6,
        name: "Hospital Supplies",
        description: "Masks, gloves, syringes, and essential hospital disposables.",
        image: "https://source.unsplash.com/600x400/?hospital,supplies",
    },
];

export default function Products() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] flex items-center justify-center text-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://source.unsplash.com/1600x600/?pharmacy,healthcare"
                        alt="Pharma background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#0891b2]/80"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-white px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-3 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Discover our wide range of high-quality pharmaceutical and healthcare
                        products exported worldwide.
                    </motion.p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                    >
                        <div className="h-48 bg-gray-200">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-[#0891b2]">
                                {product.name}
                            </h2>
                            <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
                            <button className="mt-4 bg-[#0891b2] text-white px-4 py-2 rounded-lg hover:bg-[#067a93] transition">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
