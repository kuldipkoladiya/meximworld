"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function ProductCard({ product, index }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 transition-all"
        >
            <Link href={`/products/${product.id}`} className="block">
                {/* Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-gray-50">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-1">
                        {product.name}
                    </h3>
                    {product.category && (
                        <span className="mt-2 inline-block text-xs font-medium px-3 py-1 rounded-full border border-[#2dd4bf] text-gray-700">
                            {product.category}
                        </span>
                    )}
                </div>
            </Link>
        </motion.div>
    );
}

export default function ProductsClient() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("All products");
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function load() {
            try {
                const res = await fetch("/products.json", { cache: "no-store" });
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Failed to load products.json", err);
            }
        }
        load();
    }, []);

    const categories = useMemo(() => {
        const cats = Array.from(new Set(products.map((p) => p.category || "Uncategorized")));

        // your desired order
        const order = ["All products", "Tablet","Capsule", "Cream & Ointment", "Sachet"];

        // place categories according to order
        const sorted = order.filter((c) => cats.includes(c));

        // add any extra categories (not in order) at the end
        const extras = cats.filter((c) => !order.includes(c)).sort();

        return [...sorted, ...extras];
    }, [products]);

    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchCategory = category === "All products" || (p.category === category);
            const matchSearch =
                !search ||
                (p.name && p.name.toLowerCase().includes(search.toLowerCase()));
            return matchCategory && matchSearch;
        });
    }, [products, category, search]);

    return (
        <div className="px-4 md:px-10">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Our Products
                </h2>
                <div className="w-20 h-1 bg-[#2dd4bf] mx-auto mt-2 rounded-full"></div>
                <p className="mt-3 text-gray-600">Browse our curated collection</p>
            </div>

            {/* Search & Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <input
                    aria-label="Search products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="px-4 py-2 w-full md:w-72 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2dd4bf]"
                />

                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setCategory(c)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                                c === category
                                    ? "bg-[#2dd4bf] text-white border-[#2dd4bf] shadow-sm"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-[#2dd4bf]"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <AnimatePresence>
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {filtered.map((p, i) => (
                        <ProductCard key={`${p.id}-${i}`} product={p} index={i} />
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
