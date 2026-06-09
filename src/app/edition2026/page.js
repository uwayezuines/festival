'use client';

import { EDITION_INFO, ACTIVITES } from '@/data/festicoData';

// Images assigned to specific sections to "fill the zones"
const HERO_PHOTO = "/14 édition/IMG-20260604-WA0052.jpg";
const MISS_PHOTO = "/14 édition/IMG-20260609-WA0047.jpg";

const ID_PHOTOS = [
    "/14 édition/IMG-20260609-WA0060.jpg",
    "/14 édition/IMG-20260609-WA0061.jpg",
    "/14 édition/IMG-20260609-WA0063.jpg",
    "/14 édition/IMG-20260609-WA0068.jpg",
];

const ACT_PHOTOS = [
    "/14 édition/IMG-20260609-WA0104.jpg",
    "/14 édition/IMG-20260609-WA0105.jpg",
    "/14 édition/IMG-20260609-WA0106.jpg",
    "/14 édition/IMG-20260609-WA0107.jpg",
    "/14 édition/IMG-20260609-WA0108.jpg",
    "/14 édition/IMG-20260609-WA0109.jpg",
];

export default function Edition2026Page() {
    return (
        <div className="min-h-screen bg-[#09090b]">

            {/* HERO SECTION avec Image en fond */}
            <div className="relative h-[60vh] flex flex-col items-center justify-center border-b border-amber-900/40">
                <div className="absolute inset-0 z-0">
                    <img src={HERO_PHOTO} className="w-full h-full object-cover opacity-30" alt="Festico Cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <div className="inline-block mb-4 px-6 py-2 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 font-black tracking-widest uppercase text-sm backdrop-blur-sm">
                        Focus Intégral 2026
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
                        La 14e Édition
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium italic">
                        &ldquo;{EDITION_INFO.slogan}&rdquo;
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20 space-y-32">

                {/* SECTION : FICHE D'IDENTITÉ */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 bg-amber-400"></span>
                        Fiche d'Identité
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* DATES */}
                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 aspect-[2/1] md:aspect-auto">
                            <img src={ID_PHOTOS[0]} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" alt="Dates" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2">Période</p>
                                <p className="text-3xl font-black text-white">{EDITION_INFO.dates}</p>
                            </div>
                        </div>

                        {/* LIEU */}
                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 aspect-[2/1] md:aspect-auto">
                            <img src={ID_PHOTOS[1]} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105" alt="Lieu" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2">Emplacement</p>
                                <p className="text-2xl font-black text-white">{EDITION_INFO.lieu}</p>
                            </div>
                        </div>

                        {/* AFFLUENCE */}
                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 p-8 flex items-end aspect-[2/1] md:aspect-auto">
                            <img src={ID_PHOTOS[2]} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" alt="Affluence" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-transparent"></div>
                            <div className="relative z-10 w-full flex justify-between items-end">
                                <div>
                                    <p className="text-sky-400 font-bold uppercase tracking-widest text-sm mb-2">Affluence Attendue</p>
                                    <p className="text-4xl font-black text-white">{EDITION_INFO.affluence}</p>
                                </div>
                                <span className="text-6xl opacity-50">👥</span>
                            </div>
                        </div>

                        {/* THEME */}
                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 aspect-[2/1] md:aspect-auto">
                            <img src={ID_PHOTOS[3]} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" alt="Theme" />
                            <div className="absolute inset-0 bg-black/70"></div>
                            <div className="absolute inset-0 flex flex-col justify-center px-8 text-center">
                                <p className="text-violet-400 font-bold uppercase tracking-widest text-sm mb-4">Thème Officiel 2026</p>
                                <p className="text-2xl font-black text-white leading-snug">
                                    "{EDITION_INFO.theme}"
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SECTION : ACTIVITÉS PRÉVUES */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-12 flex items-center justify-end gap-4 text-right">
                        Au Programme
                        <span className="w-12 h-1 bg-amber-400"></span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {ACTIVITES.map((act, i) => (
                            <div key={i} className="group relative h-72 rounded-3xl overflow-hidden border border-slate-800 shadow-xl cursor-default">
                                <img
                                    src={ACT_PHOTOS[i] || ACT_PHOTOS[0]}
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                                    alt={act.titre}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent"></div>

                                <div className="absolute inset-0 flex flex-col justify-end p-6 group-hover:-translate-y-4 transition-transform duration-500">
                                    <span className="text-5xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity bg-black/40 w-fit p-3 rounded-2xl backdrop-blur-md border border-slate-700">
                                        {act.icon}
                                    </span>
                                    <h3 className="text-xl font-black text-white leading-tight">
                                        {act.titre}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOCUS MISS FESTICO */}
                <div className="relative overflow-hidden rounded-[40px] border border-amber-500/30 bg-black shadow-2xl">
                    <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-gradient-to-r from-amber-900/90 to-transparent z-10"></div>
                        <img src={MISS_PHOTO} className="w-full h-full object-cover opacity-60" alt="Miss Festico" />
                    </div>

                    <div className="relative z-20 w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center min-h-[400px]">
                        <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-4 block">Événement Phare</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Compétition Miss FESTICO 2026</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10">
                            L'élection de l'ambassadrice de la beauté, de l'humour et de la bienveillance. Ne manquez pas le grand couronnement lors des soirées de gala.
                        </p>
                        <div>
                            <a href="/contacts" className="bg-amber-400 hover:bg-amber-300 text-black font-black py-4 px-8 rounded-full transition-colors inline-block">
                                S'inscrire à la compétition
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
