import { TEXTE_ACCUEIL } from '@/data/festicoData';

export default function AccueilPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm tracking-widest uppercase">
                    🎭 Le Contexte
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                    À propos du <span className="text-amber-400">FESTICO</span>
                </h1>
                <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] border border-slate-800 rounded-3xl p-8 md:p-12 text-slate-300 text-lg leading-relaxed whitespace-pre-line text-justify shadow-2xl">
                    {TEXTE_ACCUEIL}

                    <div className="mt-10 text-center">
                        <a href="/presentation-festico.pdf" download className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-full border border-slate-700 transition-colors">
                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Télécharger le Dossier de Présentation (PDF)
                        </a>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                    { nb: '14ème', label: 'Édition' },
                    { nb: '12 000', label: 'Visiteurs attendus' },
                    { nb: '2026', label: 'Yaoundé' },
                    { nb: '5 jours', label: "D'événements intensifs" },
                ].map(s => (
                    <div key={s.label} className="bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/20 rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-default">
                        <p className="text-3xl font-black text-amber-400">{s.nb}</p>
                        <p className="text-slate-400 text-sm mt-2">{s.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
