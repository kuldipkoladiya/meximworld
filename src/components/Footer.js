"use client";
import {Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-blue-950 text-white pt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-teal-400">Mexim World</h2>
                    <p className="mt-4 text-gray-300 leading-relaxed">
                        Trusted global partner in pharmaceutical import and export.
                        Delivering quality products with trust & reliability worldwide.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-teal-400 mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="/products" className="hover:text-teal-400 transition">Products</a></li>
                        <li><a href="/about" className="hover:text-teal-400 transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-teal-400 transition">Contact Us</a></li>
                        <li><a href="/blog" className="hover:text-teal-400 transition">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold text-teal-400 mb-4">Contact</h2>
                    <p className="flex items-center gap-2 text-gray-300"><MapPin size={18} /> Surat, India</p>
                    <p className="flex items-center gap-2 text-gray-300 mt-2"><Mail size={18} /> meximworld@gmail.com</p>
                    <p className="flex items-center gap-2 text-gray-300 mt-2"><Phone size={18} /> +91 96241 68506</p>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-semibold text-teal-400 mb-4">Follow Us</h2>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/meximworld?igsh=MWI1bWNhc3VhN2lwYQ%3D%3D&utm_source=qr " className="p-2 bg-blue-900 rounded-full hover:bg-teal-500 transition">
                            <Instagram size={20} />
                        </a>
                        <a href="https://x.com/meximworld?s=21" className="p-2 bg-blue-900 rounded-full hover:bg-teal-500 transition">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/mexim-world-a95663381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " className="p-2 bg-blue-900 rounded-full hover:bg-teal-500 transition">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-blue-800 py-4 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} <span className="text-teal-400 font-semibold">Mexim World</span>. All Rights Reserved.
            </div>
        </footer>
    );
}
