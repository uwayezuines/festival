import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { CalendarDays, MapPin, UserSquare2, Ticket } from 'lucide-react';

export const revalidate = 0;

export default async function EvenementsPage() {
    const { data: evenements } = await supabase
        .from('evenements')
        .select('*, artistes_realisateurs(nom)')
        .eq('est_publie', true)
        .order('date_heure', { ascending: true });

    return (
        <div className="min-h-screen bg-[#09090b] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-sm tracking-wide">
                        Programme Officiel
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">Tous les Événements</h1>
                    <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        FESTICO 2026 · 23-27 Juin · Hôtel de ville de Yaoundé
                    </p>
                </div>

                {/* Events Grid */}
                {evenements && evenements.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {evenements.map((event) => {
                            const isSoldOut = event.places_restantes <= 0;
                            return (
                                <div
                                    key={event.id}
                                    className="bg-black rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/30 flex flex-col group hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/50"
                                >
                                    {/* Image */}
                                    <div className="h-52 bg-slate-900 relative overflow-hidden">
                                        {event.image_url ? (
                                            <img
                                                src={event.image_url}
                                                alt={event.titre}
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <CalendarDays size={56} className="text-slate-800" />
                                            </div>
                                        )}
                                        {/* Badges */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4 bg-amber-500 px-3 py-1 rounded-full text-xs font-black text-black uppercase tracking-wider">
                                            {event.type}
                                        </div>
                                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${isSoldOut
                                                ? 'bg-red-900/80 text-red-400 border-red-700/50'
                                                : 'bg-black/80 text-emerald-500 border-emerald-500/30 backdrop-blur-sm'
                                            }`}>
                                            {isSoldOut ? 'Complet' : event.prix_fcfa === 0 ? 'Gratuit' : `${event.prix_fcfa.toLocaleString()} FCFA`}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-black text-slate-100 mb-3 leading-tight">{event.titre}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">{event.description}</p>

                                        <div className="mt-auto space-y-2 mb-5">
                                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                                <CalendarDays size={15} className="text-amber-500 shrink-0" />
                                                <span>{new Date(event.date_heure).toLocaleString('fr-FR', {
                                                    weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
                                                })}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                                <MapPin size={15} className="text-emerald-500 shrink-0" />
                                                <span className="truncate">{event.lieu}</span>
                                            </div>
                                            {event.artistes_realisateurs && (
                                                <div className="flex items-center gap-2 text-sm text-slate-400">
                                                    <UserSquare2 size={15} className="text-emerald-500 shrink-0" />
                                                    <span>{event.artistes_realisateurs.nom}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Link
                                                href={`/evenements/${event.id}`}
                                                className="flex-1 text-center py-3 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:border-amber-500/50 hover:text-amber-500 transition-colors"
                                            >
                                                Voir les détails
                                            </Link>
                                            {!isSoldOut && (
                                                <Link
                                                    href={`/checkout/${event.id}`}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-xl transition-colors"
                                                >
                                                    <Ticket size={15} /> Réserver
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <CalendarDays size={64} className="mx-auto text-slate-800 mb-4" />
                        <h3 className="text-xl font-bold text-slate-400 mb-2">Aucun événement publié</h3>
                        <p className="text-slate-600">Le programme sera disponible prochainement.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
