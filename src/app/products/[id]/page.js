// src/app/products/[id]/page.jsx
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function generateStaticParams() {
    const file = path.join(process.cwd(), "public", "products.json");
    if (!fs.existsSync(file)) return [];
    const raw = fs.readFileSync(file, "utf-8");
    const list = JSON.parse(raw);
    return list.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }) {
    const { id } = params;
    const file = path.join(process.cwd(), "public", "products.json");
    let product = null;

    if (fs.existsSync(file)) {
        try {
            const raw = fs.readFileSync(file, "utf-8");
            const list = JSON.parse(raw);
            product = list.find((x) => String(x.id) === String(id));
        } catch (err) {
            console.error(err);
        }
    }

    if (!product) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                    <p className="mt-2 text-gray-600">Maybe the product ID is wrong.</p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* IMAGE */}
                    <div className="bg-teal-50 rounded-2xl shadow-lg p-6 flex items-center justify-center">
                        <div className="w-full aspect-square flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* DETAILS */}
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                        {product.sku && (
                            <div className="text-sm text-gray-500 mt-2">
                                SKU: {product.sku}
                            </div>
                        )}

                        {/* Description */}
                        <div className="mt-6 border-l-4 border-teal-400 pl-4">
                            <h2 className="text-xl font-semibold text-teal-500">Description</h2>
                            <p className="mt-2 text-gray-700 leading-relaxed">
                                {product.description || product.shortDescription || "No description available."}
                            </p>
                        </div>

                        {/* Category */}
                        <div className="mt-6 border-l-4 border-teal-400 pl-4">
                            <h2 className="text-xl font-semibold text-teal-500">Category</h2>
                            <p className="mt-2 text-gray-700">{product.category || "Uncategorized"}</p>
                        </div>

                        {/* Attributes */}
                        {product.attributes && Object.keys(product.attributes).length > 0 && (
                            <div className="mt-6 border-l-4 border-teal-400 pl-4">
                                <h2 className="text-xl font-semibold text-teal-500">Specifications</h2>
                                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {Object.entries(product.attributes).map(([k, v]) => (
                                        <li
                                            key={k}
                                            className="text-sm text-gray-700 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:bg-teal-50 transition"
                                        >
                                            <span className="font-medium text-gray-900">{k}:</span> {v}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="mt-8">
                            <Link href="/contact">
                            <button className="px-6 py-3 bg-teal-400 text-white font-semibold rounded-lg shadow hover:bg-teal-500 transition">
                                Enquiry Now
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
