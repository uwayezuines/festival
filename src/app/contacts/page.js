import { EQUIPE, CONTACTS } from '@/data/festicoData';

export default function ContactsPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
            {/* HEADER */}
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
                    Contacts & <span className="text-amber-400">Équipe</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    L'équipe organisatrice du FESTICO est à votre disposition pour toute demande de collaboration.
                </p>
            </div>

            {/* COORDONNÉES PRINCIPALES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href={`tel:${CONTACTS.telMTN.replace(/\s/g, '')}`} className="bg-[#18181b] border border-slate-800 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-colors group">
                    <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="text-white font-bold mb-2">MTN Mobile</h3>
                    <p className="text-yellow-400 font-black text-xl">{CONTACTS.telMTN}</p>
                </a>

                <a href={`tel:${CONTACTS.telOrange.replace(/\s/g, '')}`} className="bg-[#18181b] border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-400/50 transition-colors group">
                    <div className="w-16 h-16 bg-orange-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="text-white font-bold mb-2">Orange Mobile</h3>
                    <p className="text-orange-400 font-black text-xl">{CONTACTS.telOrange}</p>
                </a>

                <a href={`mailto:${CONTACTS.emailPrincipal}`} className="bg-[#18181b] border border-slate-800 rounded-2xl p-8 text-center hover:border-sky-400/50 transition-colors group">
                    <div className="w-16 h-16 bg-sky-400/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">✉️</span>
                    </div>
                    <h3 className="text-white font-bold mb-2">Email</h3>
                    <p className="text-sky-400 font-bold">{CONTACTS.emailPrincipal}</p>
                    <p className="text-sky-400 font-bold">{CONTACTS.emailSecondaire}</p>
                </a>
            </div>

            {/* TROMBINOSCOPE DE L'EQUIPE */}
            <div>
                <h2 className="text-3xl font-black text-white mb-10 text-center">Le Comité d'Organisation</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {EQUIPE.map((m, i) => (
                        <div key={i} className="bg-gradient-to-b from-[#18181b] to-black border border-slate-800 rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform">
                            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/20">
                                <span className="text-black font-black text-3xl">{m.initial}</span>
                            </div>
                            <h3 className="font-black text-white text-lg mb-2 leading-tight">{m.nom}</h3>
                            <p className="text-amber-400 text-sm font-medium">{m.titre}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* RESEAUX SOCIAUX & LOCALISATION */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Retrouvez-nous sur Facebook</h3>
                    <p className="text-slate-400">Suivez l'actualité de la 14e édition en temps réel !</p>
                </div>
                <a href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full flex items-center gap-3 transition-colors">
                    <span className="text-xl">📘</span> Visiter la page Festico237
                </a>
            </div>
        </div>
    );
}
