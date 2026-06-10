import { CONTACTS } from '@/data/festicoData';

export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-[#09090b] py-16 px-4">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* HEADER */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                        <span className="text-amber-400">Contacts</span>
                    </h1>
                </div>

                {/* COORDONNÉES PRINCIPALES */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* BLOC UNIQUE POUR LES NUMÉROS DE TÉLÉPHONE */}
                    <div className="bg-gradient-to-br from-amber-600/20 to-orange-800/10 border border-amber-500/30 rounded-3xl p-8 text-center hover:scale-[1.01] transition-transform duration-300 group flex flex-col justify-center">
                        <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">📱</span>
                        </div>
                        <h3 className="text-white font-black uppercase tracking-wide mb-6 text-lg">Contact</h3>

                        <div className="space-y-4">
                            <a
                                href={`tel:${CONTACTS.telMTN.replace(/\s/g, '')}`}
                                className="block hover:scale-[1.02] transition-transform"
                            >
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Ligne MTN</p>
                                <p className="text-yellow-400 font-black text-2xl">{CONTACTS.telMTN}</p>
                            </a>

                            <div className="w-12 h-[1px] bg-slate-800/60 mx-auto"></div>

                            <a
                                href={`tel:${CONTACTS.telOrange.replace(/\s/g, '')}`}
                                className="block hover:scale-[1.02] transition-transform"
                            >
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Ligne Orange</p>
                                <p className="text-orange-400 font-black text-2xl">{CONTACTS.telOrange}</p>
                            </a>
                        </div>
                    </div>

                    {/* BLOC UNIQUE POUR LES EMAILS - MÊME COULEUR QUE LE BLOC TÉLÉPHONE */}
                    <div className="bg-gradient-to-br from-amber-600/20 to-orange-800/10 border border-amber-500/30 rounded-3xl p-8 text-center hover:scale-[1.01] transition-transform duration-300 group flex flex-col justify-center">
                        <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">✉️</span>
                        </div>
                        <h3 className="text-white font-black uppercase tracking-wide mb-6 text-lg">Contact</h3>

                        <div className="space-y-4">
                            <a
                                href={`mailto:${CONTACTS.email1}`}
                                className="block hover:scale-[1.02] transition-transform"
                            >
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Email Principal</p>
                                <p className="text-yellow-400 font-black text-xl break-all">{CONTACTS.emailPrincipal}</p>
                            </a>

                            <div className="w-12 h-[1px] bg-slate-800/60 mx-auto"></div>

                            <a
                                href={`mailto:${CONTACTS.email2}`}
                                className="block hover:scale-[1.02] transition-transform"
                            >
                                <p className="text-slate-400 text-xs uppercase tracking-wider font-semibold">Email Secondaire</p>
                                <p className="text-orange-400 font-black text-xl break-all">{CONTACTS.emailSecondaire}</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* RESEAUX SOCIAUX */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Retrouvez-nous sur Facebook</h3>
                        <p className="text-slate-400">Suivez l&apos;actualité de la 14e édition en temps réel !</p>
                    </div>
                    <a href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full flex items-center gap-3 transition-colors shrink-0">
                        <span className="text-xl">📘</span> Visiter la page Festico237
                    </a>
                </div>

            </div>
        </div>
    );
}