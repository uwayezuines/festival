'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TABS } from '@/data/festicoData';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 group">
                        <img src="/logo.png" alt="FESTICO Logo" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform" />
                        <div className="hidden sm:block">
                            <span className="text-white font-black text-xl leading-none block tracking-wide">FESTICO</span>
                            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Festival</span>
                        </div>
                    </Link>

                    {/* DESKTOP TABS */}
                    <nav className="hidden md:flex items-center gap-2">
                        {TABS.map(tab => {
                            const isActive = pathname === tab.href;
                            return (
                                <Link
                                    key={tab.id}
                                    href={tab.href}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${isActive
                                            ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20 scale-105'
                                            : 'text-slate-400 hover:text-white hover:bg-slate-900'
                                        }`}
                                >
                                    <span className="text-lg">{tab.emoji}</span>
                                    <span>{tab.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        className="md:hidden p-2 text-amber-400"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileOpen && (
                <div className="md:hidden bg-[#09090b] border-t border-slate-800 p-4 space-y-2 absolute w-full shadow-2xl">
                    {TABS.map(tab => {
                        const isActive = pathname === tab.href;
                        return (
                            <Link
                                key={tab.id}
                                href={tab.href}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-bold transition-all ${isActive ? 'bg-amber-400 text-black' : 'text-slate-300 hover:bg-slate-900'
                                    }`}
                            >
                                <span className="text-2xl">{tab.emoji}</span>
                                <span>{tab.label}</span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
