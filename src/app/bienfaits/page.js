import { BIENFAITS } from '@/data/festicoData';

export default function BienfaitsPage() {
    return (
        <div className="min-h-screen bg-white text-black py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* TITRE */}
                <h1 className="text-center text-4xl md:text-5xl font-black text-[#8B0000] mb-20 uppercase tracking-widest border-b-2 border-red-900 pb-4 inline-block relative left-1/2 -translate-x-1/2">
                    Les Vertus Du Rire
                </h1>

                <div className="relative flex flex-col items-center justify-center min-h-[600px]">

                    {/* IMAGE CENTRALE (Émoji souriant représentatif) */}
                    <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-[#0B5C66] rounded-t-[100px] rounded-b-[40px] flex items-center justify-center shadow-lg border-b-[8px] border-[#084A52] mb-10 md:mb-0">
                        <span className="text-[100px] md:text-[130px] leading-none mb-8">😂</span>
                    </div>

                    {/* LIGNES ET TEXTES AUTOUR (Desktop: Absolute, Mobile: Grid) */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:absolute md:inset-0 md:-z-10">

                        {/* Ligne 1 - Gauche */}
                        <div className="md:absolute md:top-[10%] md:left-[5%] max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                            <span className="font-black text-[#8B0000]">LE RIRE</span> combat la timidité, augmente la confiance en soi et amène une vision positive des choses.
                        </div>

                        {/* Ligne 1 - Droite */}
                        <div className="md:absolute md:top-[10%] md:right-[5%] max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                            <span className="font-black text-[#8B0000]">LE RIRE</span> parce qu'il renforce le système immunitaire, est précieux, surtout pour les personnes vulnérables.
                        </div>

                        {/* Ligne 2 - Gauche */}
                        <div className="md:absolute md:top-[40%] md:left-[0%] max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                            <span className="font-black text-[#8B0000]">LES EFFETS POSITIFS DU RIRE</span> sur le système immunitaire peuvent renforcer la résistance des personnes souffrant du SIDA et du CANCER.
                        </div>

                        {/* Ligne 2 - Droite */}
                        <div className="md:absolute md:top-[40%] md:right-[0%] max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                            <span className="font-black text-[#8B0000]">LE RIRE</span> provoque la sécrétion d'endorphines dans le corps. Les propriétés antalgiques de ces hormones réduisent immédiatement la douleur.
                        </div>

                        {/* Ligne 3 - Gauche */}
                        <div className="md:absolute md:bottom-[15%] md:left-[5%] max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                            <span className="font-black text-[#8B0000]">LE RIRE</span> assure une bonne oxygénation du sang, favorise la circulation sanguine et est également un puissant relaxant musculaire.
                        </div>

                        {/* Ligne 3 - Droite */}
                        <div className="md:absolute md:bottom-[15%] md:right-[5%] max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                            <span className="font-black text-[#8B0000]">LE RIRE</span> contribue à accroître le taux d'anticorps dans les muqueuses du nez et des voies respiratoires.
                        </div>

                        {/* Bas Centre */}
                        <div className="col-span-1 md:col-span-2 flex justify-center md:absolute md:bottom-[-5%] md:left-1/2 md:-translate-x-1/2">
                            <div className="max-w-xs text-sm border-l-4 border-[#8B0000] pl-4">
                                <span className="font-black text-[#8B0000]">LE RIRE</span> réduit la tension artérielle. Il est indispensable pour la santé cardiaque.
                            </div>
                        </div>

                    </div>

                    <div className="absolute bottom-[-80px] bg-[#8B0000] text-white font-bold w-10 h-10 flex items-center justify-center shadow-lg">
                        9
                    </div>
                </div>

            </div>
        </div>
    );
}
