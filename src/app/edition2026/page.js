'use client';

import { useState } from 'react';

// All photos from the '14 édition' folder in /public
const EDITION_PHOTOS = [
    "/14 édition/IMG-20260604-WA0052.jpg",
    "/14 édition/IMG-20260609-WA0047.jpg",
    "/14 édition/IMG-20260609-WA0060.jpg",
    "/14 édition/IMG-20260609-WA0061.jpg",
    "/14 édition/IMG-20260609-WA0063.jpg",
    "/14 édition/IMG-20260609-WA0068.jpg",
    "/14 édition/IMG-20260609-WA0104.jpg",
    "/14 édition/IMG-20260609-WA0105.jpg",
    "/14 édition/IMG-20260609-WA0106.jpg",
    "/14 édition/IMG-20260609-WA0107.jpg",
    "/14 édition/IMG-20260609-WA0108.jpg",
    "/14 édition/IMG-20260609-WA0109.jpg",
    "/14 édition/IMG-20260609-WA0111.jpg",
    "/14 édition/IMG-20260609-WA0112.jpg",
];

export default function Edition2026Page() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + EDITION_PHOTOS.length) % EDITION_PHOTOS.length);
    const next = () => setCurrent((c) => (c + 1) % EDITION_PHOTOS.length);

    return (
        <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-4">

            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-5xl font-black text-amber-400 uppercase tracking-widest mb-4">
                    La 14e Édition
                </h1>
                <p className="text-slate-400 text-lg">Parcourez notre dossier de présentation officiel ⬇️</p>
            </div>

            {/* DOCUMENT VIEWER */}
            <div className="relative w-full max-w-4xl bg-black border-4 border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10">

                <div className="aspect-[3/4] md:aspect-[16/9] relative flex items-center justify-center">
                    <img
                        src={EDITION_PHOTOS[current]}
                        alt={`Slide ${current + 1}`}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* NAVIGATION CONTROLS */}
                <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center bg-gradient-to-r from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <button onClick={prev} className="bg-amber-400 hover:bg-amber-300 text-black p-3 rounded-full text-2xl shadow-lg transition-transform hover:scale-110">
                        ←
                    </button>
                </div>

                <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center bg-gradient-to-l from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                    <button onClick={next} className="bg-amber-400 hover:bg-amber-300 text-black p-3 rounded-full text-2xl shadow-lg transition-transform hover:scale-110">
                        →
                    </button>
                </div>

                {/* PAGINATION BOTTOM BAR */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-2 rounded-full border border-slate-700 text-amber-400 font-bold whitespace-nowrap">
                    Slide {current + 1} / {EDITION_PHOTOS.length}
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl">
                {EDITION_PHOTOS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-14 h-14 md:w-20 md:h-20 rounded-xl border-2 overflow-hidden transition-all ${current === i ? 'border-amber-400 opacity-100 scale-110' : 'border-slate-800 opacity-50 hover:opacity-80'}`}
                    >
                        <img src={EDITION_PHOTOS[i]} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>

        </div>
    );
}
