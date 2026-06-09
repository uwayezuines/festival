import { ARGUMENTS_PARTENARIATS } from '@/data/festicoData';

// Alternating bubble colors like the reference image
const BUBBLE_COLORS = [
    'bg-[#d4b896] text-[#1a0a00]',       // tan/beige
    'bg-[#c4a882] text-[#1a0a00]',       // slightly darker beige
    'bg-[#9e9e9e] text-[#111]',          // gray
    'bg-[#c4a882] text-[#1a0a00]',       // tan
    'bg-[#d4b896] text-[#1a0a00]',       // beige
    'bg-[#9e9e9e] text-[#111]',          // gray
    'bg-[#9e9e9e] text-[#111]',          // gray
    'bg-[#d4b896] text-[#1a0a00]',       // beige
    'bg-[#c4a882] text-[#1a0a00]',       // tan
    'bg-[#9e9e9e] text-[#111]',          // gray
    'bg-[#d4b896] text-[#1a0a00]',       // beige
    'bg-[#c4a882] text-[#1a0a00]',       // tan
];

const LOGOS = [
    { name: "Ministère des Arts & de la Culture", icon: "🏛️", bg: "from-blue-800/40 to-blue-900/20" },
    { name: "Fondation Canal+", icon: "📺", bg: "from-green-800/40 to-green-900/20" },
    { name: "Institut Français", icon: "🇫🇷", bg: "from-red-800/40 to-red-900/20" },
    { name: "MTN Cameroon", icon: "🟡", bg: "from-yellow-700/40 to-yellow-900/20" },
    { name: "Orange Cameroun", icon: "🟠", bg: "from-orange-700/40 to-orange-900/20" },
    { name: "TV5 Monde", icon: "📡", bg: "from-sky-800/40 to-sky-900/20" },
];

export default function PartenairesPage() {
    return (
        <div className="min-h-screen bg-[#09090b]">
            {/* HEADER */}
            <div className="relative overflow-hidden bg-gradient-to-b from-[#1a0a00] to-[#09090b] pt-16 pb-12 px-4 border-b border-amber-900/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,83,9,0.15)_0%,_transparent_70%)]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black text-amber-400 mb-4 uppercase tracking-wider drop-shadow-[0_2px_20px_rgba(245,158,11,0.5)]">
                        Pourquoi Devenir Partenaire ?
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Associez votre image à l&apos;événement culturel et humoristique numéro 1 d&apos;Afrique centrale.
                    </p>
                </div>
            </div>

            {/* BUBBLES GRID */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {ARGUMENTS_PARTENARIATS.map((arg, i) => (
                        <div
                            key={i}
                            className={`${BUBBLE_COLORS[i % BUBBLE_COLORS.length]} rounded-2xl px-8 py-6 text-base font-medium leading-relaxed shadow-md`}
                        >
                            {arg}
                        </div>
                    ))}
                </div>

                {/* PARTENAIRES LOGOS */}
                <div className="mt-24">
                    <h2 className="text-center text-3xl font-black text-white mb-12 uppercase tracking-wider">
                        Ils nous <span className="text-amber-400">font confiance</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {LOGOS.map((logo, i) => (
                            <div key={i} className={`bg-gradient-to-br ${logo.bg} border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:scale-105 hover:border-amber-400/30 transition-all group cursor-pointer`}>
                                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{logo.icon}</span>
                                <p className="text-slate-200 font-bold text-base leading-snug">{logo.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 bg-gradient-to-br from-amber-400/15 to-orange-500/5 border border-amber-400/25 rounded-3xl p-12 text-center">
                    <h3 className="text-3xl font-black text-white mb-4">Rejoignez l&apos;aventure FESTICO 2026 !</h3>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto text-lg">
                        Contactez notre équipe pour découvrir nos packs de partenariat et opportunités de visibilité.
                    </p>
                    <a href="/contacts" className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black py-3 px-10 rounded-full transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-1 hover:shadow-amber-500/40">
                        Devenir Partenaire →
                    </a>
                </div>
            </div>
        </div>
    );
}
