import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CalendarDays, MapPin, UserSquare2, Ticket } from 'lucide-react';

export const revalidate = 0;

export default async function EventDetails({ params }) {
    const { id } = await params;
    const { data: event } = await supabase
        .from('evenements')
        .select('*, artistes_realisateurs(*)')
        .eq('id', id)
        .single();

    if (!event) {
        notFound();
    }

    const isSoldOut = event.places_restantes <= 0;

    return (
        <div className="min-h-screen bg-[#09090b] py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-amber-500 font-medium mb-6 inline-block hover:underline">&larr; Retour aux événements</Link>
                <div className="bg-[#18181b] rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-64 md:h-auto bg-black relative border-b md:border-b-0 md:border-r border-slate-800">
                        {event.image_url ? (
                            <img src={event.image_url} alt={event.titre} className="w-full h-full object-cover opacity-80" />
                        ) : (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                <CalendarDays size={64} className="text-slate-700" />
                            </div>
                        )}
                        <div className="absolute top-4 left-4 bg-amber-500 px-4 py-2 rounded-full text-sm font-bold text-black uppercase tracking-wider shadow-sm">
                            {event.type}
                        </div>
                    </div>

                    <div className="p-8 md:w-1/2 flex flex-col">
                        <h1 className="text-3xl md:text-4xl font-black mb-4 text-slate-100">{event.titre}</h1>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center text-slate-300 gap-3">
                                <div className="bg-amber-500/10 border border-amber-500/20 p-2 rounded-full"><CalendarDays size={20} className="text-amber-500" /></div>
                                <span className="font-medium">{new Date(event.date_heure).toLocaleString('fr-FR', {
                                    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                                })}</span>
                            </div>
                            <div className="flex items-center text-slate-300 gap-3">
                                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-full"><MapPin size={20} className="text-emerald-500" /></div>
                                <span className="font-medium">{event.lieu}</span>
                            </div>
                            {event.artistes_realisateurs && (
                                <div className="flex items-center text-slate-300 gap-3">
                                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-2 rounded-full"><UserSquare2 size={20} className="text-emerald-500" /></div>
                                    <span className="font-medium">Avec : {event.artistes_realisateurs.nom}</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-8">
                            <h3 className="font-bold text-lg mb-2 text-slate-200">Description</h3>
                            <p className="text-slate-400 leading-relaxed text-sm md:text-base">{event.description}</p>
                        </div>

                        <div className="mt-auto bg-black p-6 rounded-2xl border border-slate-800 flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 font-medium">Prix du billet</span>
                                <span className="text-2xl font-black text-amber-500">{event.prix_fcfa === 0 ? 'Gratuit' : `${event.prix_fcfa} FCFA`}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 font-medium">Places restantes</span>
                                <span className={`font-bold ${isSoldOut ? 'text-red-500' : 'text-emerald-500'}`}>{event.places_restantes} / {event.places_totales} {isSoldOut ? '' : 'Disponible'}</span>
                            </div>

                            {isSoldOut ? (
                                <button disabled className="w-full bg-slate-800 text-slate-500 font-bold py-4 rounded-xl cursor-not-allowed">
                                    Complet
                                </button>
                            ) : (
                                <Link href={`/checkout/${event.id}`} className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.02]">
                                    <Ticket size={20} /> Réserver ma place
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
