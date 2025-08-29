// src/app/products/page.jsx
import ProductsClient from "../../components/ProductsClient";

export const metadata = {
    title: "Products - MeximWorld",
    description: "Browse our products",
};

export default function ProductsPage() {
    // server component just renders the client UI
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-extrabold mb-6">Products</h1>
                <ProductsClient />
            </div>
        </main>
    );
}
