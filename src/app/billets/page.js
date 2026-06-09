"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Ticket, CalendarDays, MapPin, Loader2, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function Billets() {
    const router = useRouter();
    const [billets, setBillets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchBillets = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/auth/login?redirect=/billets');
                return;
            }

            // Vérifier si l'utilisateur est admin
            const { data: userData } = await supabase
                .from('utilisateurs')
                .select('role')
                .eq('id', session.user.id)
                .single();

            if (userData && userData.role === 'admin') {
                setIsAdmin(true);
            }

            const { data: userCommandes } = await supabase
                .from('commandes')
                .select('id')
                .eq('utilisateur_id', session.user.id)
                .eq('statut', 'confirmee');

            if (userCommandes && userCommandes.length > 0) {
                const commandeIds = userCommandes.map(c => c.id);
                const { data: userBillets } = await supabase
                    .from('billets')
                    .select('*, evenements(*)')
                    .in('commande_id', commandeIds)
                    .order('created_at', { ascending: false });

                if (userBillets) {
                    setBillets(userBillets);
                }
            }

            setLoading(false);
        };

        fetchBillets();
    }, []);

    if (loading) return (
        <div className="min-h-[70vh] flex items-center justify-center bg-[#09090b]">
            <Loader2 className="animate-spin text-amber-500" size={48} />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#09090b] py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl"><Ticket className="text-amber-500" size={24} /></div>
                        <h1 className="text-3xl font-black text-slate-100">Mon Espace</h1>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {isAdmin && (
                            <button onClick={() => router.push('/admin/dashboard')} className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20">
                                Accéder au Dashboard Admin
                            </button>
                        )}
                        <button onClick={() => router.push('/soumettre-un-projet')} className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                            Soumettre un projet
                        </button>
                    </div>
                </div>

                {billets.length === 0 ? (
                    <div className="bg-[#18181b] p-12 rounded-3xl border border-slate-800 text-center">
                        <QrCode className="mx-auto text-slate-700 mb-4" size={64} />
                        <h3 className="text-xl font-bold text-slate-200 mb-2">Aucun billet trouvé</h3>
                        <p className="text-slate-400 mb-6">Vous n'avez pas encore réservé de billets pour le FESTICO 2026.</p>
                        <button onClick={() => router.push('/evenements')} className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-amber-500/20">
                            Découvrir les événements
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {billets.map((b) => (
                            <div key={b.id} className="bg-[#18181b] rounded-3xl flex overflow-hidden border border-slate-800 relative group hover:border-amber-500/50 transition-colors">
                                <div className="w-1/3 bg-black flex flex-col items-center justify-center p-6 border-r-2 border-dashed border-slate-800 relative">
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#09090b] rounded-full border-b-2 border-slate-800"></div>
                                    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#09090b] rounded-full border-t-2 border-slate-800"></div>

                                    <div className="bg-white p-2 rounded-xl mb-4 group-hover:scale-105 transition-transform">
                                        <QRCodeSVG value={b.code_qr} size={100} />
                                    </div>
                                    <p className="text-slate-500 text-xs font-mono break-all text-center">{b.code_qr}</p>
                                </div>

                                <div className="w-2/3 p-6 flex flex-col relative">
                                    <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                                        Billet Valide
                                    </div>
                                    {b.statut_scan && (
                                        <div className="absolute top-4 right-4 bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-xs font-bold border border-red-500/20">
                                            Déjà Scanné
                                        </div>
                                    )}
                                    {b.evenements && (
                                        <>
                                            <div className="mb-auto mt-6">
                                                <span className="text-amber-500 font-bold text-xs uppercase tracking-wider block mb-1">FESTICO 2026</span>
                                                <h3 className="text-xl font-black text-slate-100 mb-4 line-clamp-2">{b.evenements.titre}</h3>
                                                <div className="space-y-2 mt-4">
                                                    <div className="flex items-center text-slate-400 text-sm gap-2">
                                                        <CalendarDays size={16} className="text-amber-500" />
                                                        {new Date(b.evenements.date_heure).toLocaleString('fr-FR', {
                                                            day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                                                        })}
                                                    </div>
                                                    <div className="flex items-center text-slate-400 text-sm gap-2">
                                                        <MapPin size={16} className="text-emerald-500" />
                                                        <span className="truncate">{b.evenements.lieu}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
