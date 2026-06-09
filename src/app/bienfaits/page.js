import { BIENFAITS } from '@/data/festicoData';

export default function BienfaitsPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* TITRE */}
                <h1 className="text-center text-4xl md:text-5xl font-black text-amber-400 mb-20 uppercase tracking-widest border-b-4 border-amber-900/50 pb-4 inline-block relative left-1/2 -translate-x-1/2 drop-shadow-md">
                    Les Vertus Du Rire
                </h1>

                <div className="relative flex flex-col items-center justify-center min-h-[600px]">

                    {/* IMAGE CENTRALE (Émoji souriant représentatif) */}
                    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-slate-900 rounded-t-[100px] rounded-b-[40px] flex items-center justify-center shadow-2xl border-b-[8px] border-amber-600 mb-10 md:mb-0">
                        <span className="text-[100px] md:text-[130px] leading-none mb-8">😂</span>
                    </div>

                    {/* LIGNES ET TEXTES AUTOUR (Desktop: Absolute, Mobile: Grid) */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:absolute md:inset-0 md:-z-10">

                        {/* Ligne 1 - Gauche */}
                        <div className="md:absolute md:top-[10%] md:left-[5%] max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                            <span className="font-black text-amber-500 block mb-1">LE RIRE</span>
                            <span className="text-slate-300">combat la timidité, augmente la confiance en soi et amène une vision positive des choses.</span>
                        </div>

                        {/* Ligne 1 - Droite */}
                        <div className="md:absolute md:top-[10%] md:right-[5%] max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                            <span className="font-black text-amber-500 block mb-1">LE RIRE</span>
                            <span className="text-slate-300">parce qu'il renforce le système immunitaire, est précieux, surtout pour les personnes vulnérables.</span>
                        </div>

                        {/* Ligne 2 - Gauche */}
                        <div className="md:absolute md:top-[40%] md:left-[0%] max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                            <span className="font-black text-amber-500 block mb-1">LES EFFETS POSITIFS DU RIRE</span>
                            <span className="text-slate-300">sur le système immunitaire peuvent renforcer la résistance des personnes souffrant du SIDA et du CANCER.</span>
                        </div>

                        {/* Ligne 2 - Droite */}
                        <div className="md:absolute md:top-[40%] md:right-[0%] max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                            <span className="font-black text-amber-500 block mb-1">LE RIRE</span>
                            <span className="text-slate-300">provoque la sécrétion d'endorphines dans le corps. Les propriétés antalgiques de ces hormones réduisent immédiatement la douleur.</span>
                        </div>

                        {/* Ligne 3 - Gauche */}
                        <div className="md:absolute md:bottom-[15%] md:left-[5%] max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                            <span className="font-black text-amber-500 block mb-1">LE RIRE</span>
                            <span className="text-slate-300">assure une bonne oxygénation du sang, favorise la circulation sanguine et est également un puissant relaxant musculaire.</span>
                        </div>

                        {/* Ligne 3 - Droite */}
                        <div className="md:absolute md:bottom-[15%] md:right-[5%] max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                            <span className="font-black text-amber-500 block mb-1">LE RIRE</span>
                            <span className="text-slate-300">contribue à accroître le taux d'anticorps dans les muqueuses du nez et des voies respiratoires.</span>
                        </div>

                        {/* Bas Centre */}
                        <div className="col-span-1 md:col-span-2 flex justify-center md:absolute md:bottom-[-5%] md:left-1/2 md:-translate-x-1/2">
                            <div className="max-w-xs text-sm border-l-4 border-amber-500 pl-4 bg-black/40 p-3 rounded-r-xl backdrop-blur-sm">
                                <span className="font-black text-amber-500 block mb-1">LE RIRE</span>
                                <span className="text-slate-300">réduit la tension artérielle. Il est indispensable pour la santé cardiaque.</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
