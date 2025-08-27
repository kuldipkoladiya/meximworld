"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About Us" },
        { href: "/global", label: "Global Presence" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact Us" },
    ];

    return (
        <nav className="bg-gradient-to-r from-blue-900 to-cyan-700 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    {/* Desktop Logo */}
                    <Image
                        src="/images/logo.svg"
                        alt="Mexim World Logo"
                        width={180}   // Increased size
                        height={60}
                        className="hidden md:block h-12 w-auto" // larger height
                        priority
                    />
                    {/* Mobile Logo */}
                    <Image
                        src="/images/logo.svg"
                        alt="Mexim World Mobile Logo"
                        width={150}
                        height={50}
                        className="block md:hidden h-10 w-auto" // larger height
                        priority
                    />
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 font-medium text-white">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:text-[#0891b2] transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <ul className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block hover:text-blue-700"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
