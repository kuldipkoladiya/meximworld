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

// Simple checkmark icon
const FeatureIcon = () => (
    <svg className="h-6 w-6 flex-shrink-0 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Make the page component async
export default async function ProductDetailPage({ params }) {
    // await params if needed (here params is already ready, so just destructure)
    const id = params.id;

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
            <main className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8 bg-white rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                    <p className="mt-2 text-gray-600">The product you are looking for does not exist.</p>
                    <Link href="/products">
                        <span className="mt-4 inline-block text-teal-500 hover:text-teal-600 font-semibold">
                            &larr; Back to all products
                        </span>
                    </Link>
                </div>
            </main>
        );
    }

    const productPrice = product.price || "Contact for Price";

    return (
        <main className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
                    <div className="flex h-full items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-[500px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col h-full">
                        <div>
                            <div className="flex items-center justify-between">
                                {product.category && (
                                    <span className="inline-block bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                                        {product.category}
                                    </span>
                                )}
                                {product.sku && (
                                    <span className="text-sm font-medium text-gray-500">
                                        SKU: {product.sku}
                                    </span>
                                )}
                            </div>
                            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                {product.name}
                            </h1>
                            {product.attributes && Object.keys(product.attributes).length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-gray-900">Key Features</h3>
                                    <ul role="list" className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                        {["BRAND NAME", "CONTAIN", "PACK", "BOX PACK", "MRP", "SR.NO"].map((key) => (
                                            product.attributes[key] ? (
                                                <li key={key} className="flex items-start">
                                                    <FeatureIcon />
                                                    <div className="ml-3">
                                                        <p className="font-semibold text-gray-800">{key}</p>
                                                        <p className="mt-1 text-sm text-gray-600">{product.attributes[key]}</p>
                                                    </div>
                                                </li>
                                            ) : null
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                        <div className="flex-grow"></div>
                        <div className="mt-10">
                            <Link href="/contact" className="mt-4 block w-full">
                                <button className="flex w-full items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all">
                                    Enquiry Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900">Description :</h3>
                    <p className="mt-2 text-base leading-relaxed text-gray-700 text-justify sm:text-left">
                        {product.description || product.shortDescription || "No description available."}
                    </p>
                </div>
            </div>
        </main>
    );
}
