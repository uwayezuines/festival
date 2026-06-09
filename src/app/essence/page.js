'use client';

import { useState } from 'react';
import { ESSENCE_ITEMS } from '@/data/festicoData';

export default function EssencePage() {
    const [open, setOpen] = useState(0);

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    L&apos;Essence du <span className="text-amber-400">FESTICO</span>
                </h1>
                <p className="text-slate-400 text-lg">Ce qui fait l&apos;unicité de notre festival depuis 14 éditions.</p>
            </div>

            <div className="space-y-4">
                {ESSENCE_ITEMS.map((item, i) => (
                    <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'bg-amber-400/5 border-amber-400/30 shadow-lg shadow-amber-500/10' : 'bg-slate-900/50 border-slate-800'}`}>
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="font-black text-white text-xl tracking-wider">{item.question}</span>
                            </div>
                            <span className={`text-amber-400 text-2xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
                        </button>
                        <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className="px-6 pb-6 pt-2 text-slate-300 text-lg leading-relaxed border-t border-slate-800/50 mt-4 mx-6">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
