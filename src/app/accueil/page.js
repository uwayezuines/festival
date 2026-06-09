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
                        <a href="/Dossier_de_presentation_FESTICO_2026.pdf" download className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-full border border-slate-700 transition-colors shadow-lg hover:shadow-amber-500/20">
                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            Télécharger le Dossier de Présentation (PDF)
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}
