"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Speakers", href: "#speakers" },
    { name: "Schedule", href: "#schedule" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 12);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
                    : "bg-transparent"
                }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-3 text-white transition-opacity hover:opacity-90"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black font-bold shadow-lg">
                        G
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-medium text-white/70">Google Developer Student Club</p>
                        <p className="text-base font-semibold tracking-wide">GDSC ANU</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a
                        href="#register"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-white/90"
                    >
                        Register Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10 md:hidden"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#register"
                        className="relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                    >
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] opacity-90 blur-[0.5px]"></span>

                        <span className="relative rounded-full bg-black px-5 py-2.5">
                            Register Now
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}