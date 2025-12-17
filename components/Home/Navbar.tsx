'use client';
import * as React from "react"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils"
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/#profile", label: "About" },
        { href: "/#experience", label: "Experience" },
        { href: "/#projects", label: "Projects" },
        { href: "/gallery", label: "Gallery" },
        { href: "/Curriculum_Vitae_Daniel_Achigbue.pdf", label: "Resume", isDownload: true },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4"
            >
                <div
                    className="w-full max-w-5xl bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl relative"
                >

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full bg-white/10 p-1.5 border border-white/10 overflow-hidden group-hover:bg-white/20 transition-colors">
                            <Image
                                src="/eagle-logo.png"
                                alt="GGE Logo"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                        <span className="text-white font-bold tracking-wider text-sm hidden sm:block">GGE</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.isDownload ? "_blank" : undefined}
                                rel={link.isDownload ? "noopener noreferrer" : undefined}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all flex items-center gap-2",
                                    link.isDownload && "text-emerald-400 hover:text-emerald-300"
                                )}
                            >
                                {link.label}
                                {link.isDownload && <Download size={14} />}
                            </Link>
                        ))}
                    </div>

                    {/* Right Action */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/talk"
                            className="bg-white text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors shadow-lg shadow-white/5"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:hidden"
                    >
                        <ul className="flex flex-col items-center gap-8 w-full max-w-sm">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        target={link.isDownload ? "_blank" : undefined}
                                        rel={link.isDownload ? "noopener noreferrer" : undefined}
                                        className={cn(
                                            "block w-full py-3 text-2xl font-bold text-white hover:text-emerald-400 transition-colors border-b border-white/10 flex items-center justify-center gap-3",
                                            link.isDownload && "text-emerald-400"
                                        )}
                                    >
                                        {link.label}
                                        {link.isDownload && <Download size={20} />}
                                    </Link>

                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="w-full mt-4"
                            >
                                <Link
                                    href="/talk"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full py-4 text-center text-lg font-bold text-black bg-white rounded-xl shadow-xl active:scale-95 transition-transform"
                                >
                                    Contact Us
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;