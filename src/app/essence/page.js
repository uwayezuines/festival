'use client';

import { useState } from 'react';
import { ESSENCE_ITEMS } from '@/data/festicoData';

export default function EssencePage() {
    // Correction ici : Retrait du typage TypeScript pour le fichier .js
    const [open, setOpen] = useState(0);

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">

            {/* EN-TÊTE SIMPLIFIÉ AVEC LES QUESTIONS DE MANIÈRE DIRECTE */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-2">
                    Quand ? Où ? Par qui ?
                </h1>
                <h2 className="text-2xl md:text-3xl font-black text-amber-400 uppercase tracking-widest">
                    Pourquoi ? Comment ?
                </h2>
            </div>

            {/* ACCORDÉON DYNAMIQUE */}
            <div className="space-y-4">
                {ESSENCE_ITEMS.map((item, i) => (
                    <div
                        key={i}
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open === i
                                ? 'bg-amber-400/5 border-amber-400/30 shadow-lg shadow-amber-500/10'
                                : 'bg-slate-900/50 border-slate-800'
                            }`}
                    >
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <span className="font-black text-white text-xl tracking-wider uppercase">
                                    {item.question}
                                </span>
                            </div>
                            <span className={`text-amber-400 text-2xl font-black transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                                +
                            </span>
                        </button>

                        <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className="px-6 pb-6 pt-4 text-slate-300 text-lg leading-relaxed border-t border-slate-800/50 mx-6">
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