import { EDITION_INFO, ACTIVITES } from '@/data/festicoData';

export default function Edition2026Page() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
            {/* HEADER */}
            <div className="text-center">
                <div className="inline-block mb-4 px-6 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-black tracking-widest uppercase">
                    🎭 14e Édition - 2026
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">FESTICO 2026</h1>
                <p className="text-amber-400 text-xl font-bold italic max-w-2xl mx-auto">
                    &ldquo;{EDITION_INFO.slogan}&rdquo;
                </p>
            </div>

            {/* FICHE D'IDENTITÉ */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#18181b] border-l-4 border-amber-400 p-8 rounded-r-3xl shadow-lg">
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">📅 Dates prévues</p>
                    <p className="text-white text-2xl font-black">{EDITION_INFO.dates}</p>
                </div>

                <div className="bg-[#18181b] border-l-4 border-emerald-400 p-8 rounded-r-3xl shadow-lg">
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">📍 Lieu</p>
                    <p className="text-white text-2xl font-black">{EDITION_INFO.lieu}</p>
                </div>

                <div className="bg-[#18181b] border-l-4 border-sky-400 p-8 rounded-r-3xl shadow-lg md:col-span-2">
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-3">🎟 Affluence attendue</p>
                    <div className="flex items-center gap-6">
                        <span className="text-6xl text-sky-400">👥</span>
                        <p className="text-white text-4xl font-black">{EDITION_INFO.affluence}</p>
                    </div>
                </div>

                <div className="bg-[#18181b] border-l-4 border-violet-400 p-8 rounded-r-3xl shadow-lg md:col-span-2">
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-3">🎯 Thème Principal</p>
                    <p className="text-white text-2xl md:text-3xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                        {EDITION_INFO.theme}
                    </p>
                </div>
            </div>

            {/* ACTIVITES PREVUES */}
            <div>
                <h2 className="text-3xl font-black text-white mb-10 text-center">Au Programme</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {ACTIVITES.map((a, i) => (
                        <div key={i} className="flex items-center gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition-transform group">
                            <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-400/20 transition-colors">
                                <span className="text-4xl">{a.icon}</span>
                            </div>
                            <p className="text-slate-200 font-bold text-lg">{a.titre}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div className="text-center pt-10 border-t border-slate-800 mt-10">
                <p className="text-slate-400 mb-6">Restez connectés, le programme détaillé sera dévoilé prochainement.</p>
                <a href="/contacts" className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-colors">
                    Nous contacter pour des infos
                </a>
            </div>
        </div>
    );
}
