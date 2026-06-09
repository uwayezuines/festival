'use client';

import { ARGUMENTS_PARTENARIATS } from '@/data/festicoData';

export default function PartenairesPage() {
    const logos = [
        { name: "Ministère des Arts", icon: "🏛️", color: "from-blue-500/20 to-transparent" },
        { name: "Fondation Canal+", icon: "📺", color: "from-green-500/20 to-transparent" },
        { name: "Institut Français", icon: "🇫🇷", color: "from-red-500/20 to-transparent" },
        { name: "MTN Cameroon", icon: "🟡", color: "from-yellow-500/20 to-transparent" },
        { name: "Orange Cameroun", icon: "🟠", color: "from-orange-500/20 to-transparent" },
        { name: "CRTV", icon: "📡", color: "from-sky-500/20 to-transparent" },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
            {/* HEADER */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Devenez <span className="text-amber-400">Partenaire</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Associez l'image de votre entreprise à l'événement de divertissement numéro 1 en Afrique centrale.
                </p>
            </div>

            {/* POURQUOI NOUS REJOINDRE - ACCORDION STYLE VISUALS */}
            <div>
                <h2 className="text-3xl font-black text-white mb-8 text-center">Pourquoi s'associer au FESTICO ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ARGUMENTS_PARTENARIATS.map((arg, i) => (
                        <div key={i} className="group relative bg-[#18181b] border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/80 hover:border-amber-400/50 transition-all overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 bg-amber-400 h-0 group-hover:h-full transition-all duration-300"></div>
                            <div className="text-4xl text-amber-400/20 group-hover:text-amber-400 transition-colors font-black mb-4">0{i + 1}</div>
                            <p className="text-slate-300 text-lg font-medium relative z-10">{arg}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* LES 6 PARTENAIRES MAJEURS */}
            <div>
                <h2 className="text-3xl font-black text-white mb-10 text-center">Ils nous font confiance</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {logos.map((logo, i) => (
                        <div key={i} className={`bg-gradient-to-br ${logo.color} border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform cursor-pointer group`}>
                            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{logo.icon}</span>
                            <p className="text-slate-200 font-bold text-lg">{logo.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-20 bg-gradient-to-br from-amber-400/20 to-orange-500/10 border border-amber-400/30 rounded-3xl p-12 text-center">
                <h3 className="text-3xl font-black text-white mb-4">Prêt à nous rejoindre ?</h3>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Contactez notre équipe de sponsoring pour découvrir nos différents packs et opportunités de visibilité lors de cette 14e édition.
                </p>
                <a href="/contacts" className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 px-8 rounded-full transition-colors">
                    Nous contacter
                </a>
            </div>
        </div>
    );
}
