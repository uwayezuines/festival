export default function AccueilPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm tracking-widest uppercase">
                    📖 Contexte / Concept
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                    À propos du <span className="text-amber-400">FESTICO</span>
                </h1>
            </div>

            <div className="bg-gradient-to-br from-[#18181b] to-[#09090b] border border-slate-800 rounded-3xl p-8 md:p-12 text-slate-300 text-lg leading-relaxed shadow-2xl space-y-6 text-justify">
                <p>
                    Le Festival International des Images Comiques (FESTICO) a été mis sur pied par un groupe de jeunes philanthropes passionnés de la culture en général et du Cinéma en particulier. L'idée ici est de briser la frontière parfois artificielle qui sépare les professionnels du cinéma du reste des spectateurs, en offrant un évènement fédérateur autour du rire et de la bonne humeur, à la fois culturel, cinématographique, humanitaire et thérapeutique.
                </p>
                <p>
                    Nous sommes motivés par le fait qu'il a été scientifiquement prouvé que le rire regorge d'innombrables vertus ; il est un antistress, un antalgique et un excellent médicament. Raisons pour lesquels, les médecins et autres spécialistes recommandent environ 10 minutes de rire par jour. De manière générale, les festivals du monde entier font la part belle au drame mettant en avant la gravité plutôt que l'humour et la comédie pourtant reconnu(e)s comme vitaux pour la santé. Nous estimons que les festivals valorisant le genre humoristique devraient être autant valorisés. Cependant, il n'en existe que quelques cas dans le monde ; le FESTICO étant pour l'instant la seule plate-forme de ce genre en Afrique au sud du Sahara.
                </p>
                <p>
                    Vu les crises que traverse le monde (conflits, injustices, épidémies, catastrophes naturelles…), l'humain doit être placé au centre des préoccupations communes. Se rassembler pour partager des moments de légèreté et de joie est de plus en plus vital ; ce qui justifie l'importance de la mission que s'est assignée l'association / festival FESTICO. Sans prétention, nous pensons que le FESTICO aurait dû exister depuis bien longtemps.
                </p>

                <div className="mt-8 pt-8 border-t border-slate-700 text-center">
                    <a href="/Dossier_de_presentation_FESTICO_2026.pdf" download className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-full border border-slate-700 transition-colors shadow-lg hover:shadow-amber-500/20">
                        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Télécharger le Dossier de Présentation (PDF)
                    </a>
                </div>
            </div>


        </div>
    );
}
