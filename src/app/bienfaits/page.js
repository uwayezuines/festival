
const BENTO_ITEMS = [
    {
        icon: "😌",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> est l’un des remèdes les plus efficace, économique et facile à administrer contre le stress.
            </span>
        ),
        color: "from-sky-600/20 to-blue-800/10 border-sky-500/30",
        size: "md:col-span-1",
    },
    {
        icon: "💪",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LES EFFETS POSITIFS DU RIRE</strong> sur le système immunitaire peuvent renforcer la résistance des personnes souffrant du SIDA et du CANCER.
            </span>
        ),
        color: "from-rose-600/20 to-pink-800/10 border-rose-500/30",
        size: "md:col-span-2",
    },
    {
        icon: "❤️",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> assure une bonne oxygénation du sang, favorise la circulation sanguine et est également un puissant relaxant musculaire ; l’oxygénation du sang favorise la circulation sanguine et est également un puissant relaxant musculaire.
            </span>
        ),
        color: "from-emerald-600/20 to-green-800/10 border-emerald-500/30",
        size: "md:col-span-3",
    },
    {
        icon: "🛡️",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> parce qu’il renforce le système immunitaire, est précieux, surtout pour les personnes vulnérables.
            </span>
        ),
        color: "from-teal-600/20 to-cyan-800/10 border-teal-500/30",
        size: "md:col-span-1",
    },
    {
        icon: "💊",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> provoque la sécrétion d’endorphines dans le corps. Les propriétés antalgiques et ces hormones réduisent immédiatement la douleur.
            </span>
        ),
        color: "from-amber-600/20 to-yellow-800/10 border-amber-500/30",
        size: "md:col-span-2",
    },
    {
        icon: "🧬",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> contribue à accroître le taux d’anticorps ; au terme d’une thérapie par le rire, il y a un accroissement d’anticorps (Immunoglobuline A) dans les muqueuses du nez et des voies respiratoires.
            </span>
        ),
        color: "from-indigo-600/20 to-purple-800/10 border-indigo-500/30",
        size: "md:col-span-2",
    },
    {
        icon: "🧠",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> combat la timidité, augmente la confiance en soi et amène une vision positive des choses.
            </span>
        ),
        color: "from-violet-600/20 to-purple-800/10 border-violet-500/30",
        size: "md:col-span-1",
    },
    {
        icon: "🫀",
        description: (
            <span>
                <strong className="text-white font-black text-xl block mb-2">LE RIRE</strong> réduit la tension artérielle. Il est indispensable pour la santé cardiaque.
            </span>
        ),
        color: "from-red-600/20 to-rose-800/10 border-red-500/30",
        size: "md:col-span-3",
    },
];

export default function BienfaitsPage() {
    return (
        <div className="min-h-screen bg-[#09090b] py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* EMOJI QUI RIT DE TAILLE MOYENNE */}
                <div className="mt-12 text-center text-5xl animate-bounce">
                    😂
                </div>

                {/* TITRE & BADGE */}
                <div className="text-center mb-16 w-full">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-wide mb-4">
                        Les Vertus Du <span className="text-amber-400">Rire</span>
                    </h1>
                </div>

                {/* GRILLE BENTO AVEC TEXTE DIRECT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto w-full">
                    {BENTO_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`${item.size} bg-gradient-to-br ${item.color} border rounded-3xl p-8 flex flex-col gap-4 hover:scale-[1.01] transition-transform duration-300 group`}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors mb-2">
                                <span className="text-4xl">{item.icon}</span>
                            </div>
                            <p className="text-slate-300 text-base leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
