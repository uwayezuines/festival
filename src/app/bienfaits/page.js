'use client';

import { BIENFAITS } from '@/data/festicoData';
import { useState } from 'react';

export default function BienfaitsPage() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Explications supplémentaires pour rendre la page plus détaillée
    const details = [
        "Une bonne dose d'humour modifie la chimie de notre cerveau, libérant de la dopamine et favorisant un état d'esprit orienté vers les solutions plutôt que les problèmes.",
        "Rire pendant quelques minutes réduit drastiquement le cortisol (hormone du stress). C'est pour cela qu'une comédie est souvent la meilleure thérapie après une rude journée.",
        "Des études montrent que le rire augmente le nombre de cellules NK (Natural Killers) qui ciblent les tumeurs et virus. L'impact psychologique positif soutient la résilience physique.",
        "La contraction des muscles faciaux et la respiration accélérée lors d'un fou rire libèrent des endorphines, les anti-douleurs naturels de notre corps.",
        "Le rire s'apparente à un massage interne : il détend le diaphragme, aide les poumons à évacuer l'air vicié et permet de relâcher les tensions musculaires chroniques.",
        "Faire l'expérience d'un grand éclat de rire fait travailler le cœur. Cela améliore l'élasticité des vaisseaux sanguins et protège contre les problèmes cardiovasculaires.",
        "Le système respiratoire entier bénéficie du rire. Il nettoie les voies, et l'augmentation des anticorps dans la sphère ORL prévient les grippes et rhumes."
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Les Super-Pouvoirs du <span className="text-amber-400">Rire</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Le FESTICO n'est pas qu'un simple festival, c'est une véritable clinique de la bonne humeur. Découvrez ce qu'une thérapie par le rire fait à votre corps et à votre esprit !
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {BIENFAITS.map((b, i) => (
                    <div
                        key={i}
                        className="group relative h-72 perspective-1000"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className={`w-full h-full transition-all duration-500 preserve-3d absolute inset-0 ${hoveredIndex === i ? 'rotate-y-180' : ''}`}>

                            {/* Recto */}
                            <div className={`absolute inset-0 backface-hidden flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-gradient-to-br ${b.color} border border-slate-700/50 shadow-2xl`}>
                                <span className="text-6xl mb-6 bg-black/20 p-4 rounded-full inline-block">{b.icon}</span>
                                <h3 className="font-black text-white text-2xl mb-2">{b.titre}</h3>
                                <p className="text-amber-400 font-medium text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Survolez pour lire la suite ⟳</p>
                            </div>

                            {/* Verso */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col text-center p-8 rounded-3xl bg-slate-900 border border-amber-400/30 overflow-y-auto">
                                <span className="text-3xl mb-2">{b.icon}</span>
                                <h3 className="font-bold text-amber-400 text-lg mb-4">{b.titre}</h3>
                                <p className="text-white font-medium mb-4">{b.description}</p>
                                <div className="h-px w-full bg-slate-800 mb-4"></div>
                                <p className="text-slate-400 text-sm leading-relaxed italic">
                                    {details[i]}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <blockquote className="text-2xl text-amber-400 font-black italic max-w-4xl mx-auto px-8 py-10 bg-[#18181b] rounded-3xl border border-slate-800 relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl">😂</span>
                    &quot;Le rire est la distance la plus courte entre deux individus, et le moyen le plus rapide d'aller mieux.&quot;
                </blockquote>
            </div>
        </div>
    );
}
