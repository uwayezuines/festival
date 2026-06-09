'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                            <span className="text-black font-black text-lg">F</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-white font-black text-lg leading-none block">FESTICO</span>
                            <span className="text-slate-500 text-xs">Festival International</span>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden md:flex items-center gap-1">
                        <a
                            href="https://www.facebook.com/Festico237"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all text-sm font-medium flex items-center gap-2"
                        >
                            <span>📘</span> Facebook
                        </a>
                        <a
                            href="mailto:festico237@gmail.com"
                            className="px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all text-sm font-medium flex items-center gap-2"
                        >
                            <span>✉️</span> Contact
                        </a>
                        <a
                            href="tel:+237677867557"
                            className="ml-2 bg-amber-400 hover:bg-amber-300 text-black font-bold px-4 py-2 rounded-xl transition-all text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20"
                        >
                            <span>📞</span> Nous appeler
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-all"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden border-t border-slate-800 bg-[#09090b] px-4 py-4 space-y-2">
                    <a
                        href="https://www.facebook.com/Festico237"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span>📘</span> Facebook
                    </a>
                    <a
                        href="mailto:festico237@gmail.com"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 transition-all"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span>✉️</span> Contact par email
                    </a>
                    <a
                        href="tel:+237677867557"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-400/10 text-amber-400 font-bold border border-amber-400/20 hover:bg-amber-400 hover:text-black transition-all"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span>📞</span> (+237) 677 86 75 57
                    </a>
                </div>
            )}
        </header>
    );
}
