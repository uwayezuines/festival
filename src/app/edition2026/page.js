'use client';

// Images
const HERO_PHOTO = "/14 édition/IMG-20260604-WA0052.jpg";
const MISS_PHOTO = "/14 édition/miss festico.jpg";
const IMPACT_PHOTOS = [
    "/14 édition/IMG-20260609-WA0104.jpg",
    "/14 édition/IMG-20260609-WA0105.jpg",
    "/14 édition/IMG-20260609-WA0106.jpg",
    "/14 édition/IMG-20260609-WA0107.jpg",
];

const TIMELINE = [
    { time: "10h00", title: "Ouverture du Village", desc: "Ouverture du Village du Festival, des stands et des espaces éco-responsables." },
    { time: "11h00 - 13h00", title: "Conférences & Débats", desc: "Tables rondes thématiques sur le digital et la comédie." },
    { time: "14h00 - 17h00", title: "Masterclass", desc: "Ateliers de formation pratique et Masterclass pour les jeunes locaux." },
    { time: "17h00 - 18h30", title: "Accueil & Animations", desc: "Accueil des festivaliers et animations artistiques / danses live sur scène." },
    { time: "19h00 - 21h30", title: "Cinéma en Plein Air", desc: "Projections gratuites de courts et longs métrages comiques." },
    { time: "21h30 - 23h30", title: "Spectacles Live", desc: "Stand-up avec des humoristes confirmés et talents émergents." },
    { time: "23h30 - 00h00", title: "Clôture", desc: "Clôture quotidienne et extinction des feux du Village." },
];

const BAREME = [
    { critere: "Charme, beauté et élégance", pts: 30, color: "bg-pink-500" },
    { critere: "Expression orale et élocution", pts: 25, color: "bg-emerald-500" },
    { critere: "Culture & maîtrise du thème", pts: 25, color: "bg-sky-500" },
    { critere: "Impact du projet social", pts: 20, color: "bg-amber-500" },
];

export default function Edition2026Page() {
    return (
        <div className="min-h-screen bg-[#09090b]">

            {/* 1. HERO & CHIFFRES CLES */}
            <div className="relative pt-20 pb-32 flex flex-col items-center justify-center border-b border-amber-900/40">
                <div className="absolute inset-0 z-0">
                    <img src={HERO_PHOTO} className="w-full h-full object-cover opacity-20" alt="Festico Cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl">
                    <div className="inline-block mb-6 px-6 py-2 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-400 font-black tracking-widest uppercase text-xs backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        Focus Intégral Clinique & Terrain
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
                        La 14e Édition
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 text-left">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                            <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">Dates</span>
                            <p className="text-white font-black text-xl mt-1">23-27 Juin 2026</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                            <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Lieu</span>
                            <p className="text-white font-black text-xl mt-1">Esplanade de l'Hôtel de ville de Yaoundé</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                            <span className="text-sky-400 font-bold uppercase tracking-widest text-xs">Affluence</span>
                            <p className="text-white font-black text-xl mt-1">12 000 Visiteurs</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6">
                            <span className="text-violet-400 font-bold uppercase tracking-widest text-xs">Thème</span>
                            <p className="text-white font-black text-sm mt-1">La comédie : genre idéal pour l'éducation via le digital</p>
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium italic mt-12">
                        &ldquo;Le divertissement au service de l'humanitaire&rdquo;
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-24 space-y-32">

                {/* 2. CHRONOLOGIE */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Déroulement d'une Journée Type</h2>
                        <p className="text-slate-400">Le rythme effréné du festival, de l'aurore au crépuscule.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full"></div>
                        {TIMELINE.map((item, i) => (
                            <div key={i} className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-amber-400 rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(245,158,11,0.5)] border-4 border-[#09090b]"></div>
                                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                                    <span className="inline-block px-4 py-1 rounded-full bg-slate-800 text-amber-400 font-bold text-sm mb-3">
                                        {item.time}
                                    </span>
                                    <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. MISS FESTICO */}
                <div className="bg-[#121214] border border-slate-800 rounded-[40px] overflow-hidden shadow-2xl">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/5 relative min-h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121214] via-transparent to-transparent z-10"></div>
                            <img src={MISS_PHOTO} className="absolute inset-0 w-full h-full object-cover" alt="Miss Festico" />
                        </div>

                        <div className="lg:w-3/5 p-8 md:p-16 relative z-20">
                            <h2 className="text-4xl font-black text-white mb-2">Dans les Coulisses de MiSS FESTICO</h2>
                            <p className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-10">L'élection de l'ambassadrice</p>

                            <div className="mb-10">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-2xl">👑</span> Le Processus Étape par Étape
                                </h3>
                                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center text-slate-300 font-medium">
                                    <div className="bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700">Casting & Sélection</div>
                                    <span className="text-amber-400 font-black hidden md:block">→</span>
                                    <div className="bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700">Stage Bloqué Intensif</div>
                                    <span className="text-amber-400 font-black hidden md:block">→</span>
                                    <div className="bg-amber-400/10 text-amber-300 border border-amber-400/20 px-4 py-3 rounded-xl">Grande Finale sur Scène</div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <span className="text-2xl">📊</span> Barème du Jury (100 points)
                                </h3>
                                <div className="space-y-4">
                                    {BAREME.map((b, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-slate-300">{b.critere}</span>
                                                <span className="font-black text-white">{b.pts} pts</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-2">
                                                <div className={`${b.color} h-2 rounded-full`} style={{ width: `${b.pts}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. IMPACT & EXTENSIONS */}
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Impact Citoyen & Extensions</h2>
                        <p className="text-slate-400">Le FESTICO rayonne au-delà de ses frontières géographiques et temporelles.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 p-8 min-h-[250px] flex flex-col justify-end">
                            <img src={IMPACT_PHOTOS[0]} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" alt="Vert" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            <div className="relative z-10 w-full">
                                <span className="text-emerald-400 text-4xl mb-4 block">🌱</span>
                                <h3 className="text-2xl font-black text-white mb-2">FESTICO Vert</h3>
                                <p className="text-slate-300">Dispositifs éco-responsables de gestion de déchets permanents sur l'ensemble du site.</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 p-8 min-h-[250px] flex flex-col justify-end">
                            <img src={IMPACT_PHOTOS[1]} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" alt="Health" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            <div className="relative z-10 w-full">
                                <span className="text-rose-400 text-4xl mb-4 block">🏥</span>
                                <h3 className="text-2xl font-black text-white mb-2">Pôle Santé</h3>
                                <p className="text-slate-300">Présence d'une infirmerie permanente ouverte H24 pour la totale sécurité sanitaire.</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 p-8 min-h-[250px] flex flex-col justify-end">
                            <img src={IMPACT_PHOTOS[2]} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" alt="Charity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            <div className="relative z-10 w-full">
                                <span className="text-amber-400 text-4xl mb-4 block">🤝</span>
                                <h3 className="text-2xl font-black text-white mb-2">Action Humanitaire</h3>
                                <p className="text-slate-300">Projections mobiles et spectacles de "rire thérapeutique" organisés directement dans les orphelinats.</p>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 p-8 min-h-[250px] flex flex-col justify-end">
                            <img src={IMPACT_PHOTOS[3]} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500" alt="Reseau" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            <div className="relative z-10 w-full">
                                <span className="text-sky-400 text-4xl mb-4 block">🌍</span>
                                <h3 className="text-2xl font-black text-white mb-2">Réseau & Extensions</h3>
                                <p className="text-slate-300">MiNi-FESTICO à <strong>Paris</strong> (bourses d'écriture), <strong>Douala</strong> (cohésion sociale) et <strong>Kribi</strong> (tourisme).</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
