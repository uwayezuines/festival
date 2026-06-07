"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, useParams } from 'next/navigation';
import { CreditCard, Smartphone, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';

export default function Checkout() {
    const router = useRouter();
    const { id } = useParams();

    const [event, setEvent] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('MTN Mobile Money');
    const [phoneToPay, setPhoneToPay] = useState('');
    const [error, setError] = useState(null);

    const [flowState, setFlowState] = useState('idle'); // idle | paying | success
    const [commandeId, setCommandeId] = useState(null);

    const generateQRCode = () => {
        return 'FESTICO-' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-' + Date.now();
    };

    // Ensure user exists in the utilisateurs table (fixes FK constraint issue)
    const ensureUserRow = async (sessionUser) => {
        const { data: existing } = await supabase
            .from('utilisateurs')
            .select('id')
            .eq('id', sessionUser.id)
            .single();

        if (!existing) {
            // User row missing — create it now (can happen if signup insert failed silently)
            const meta = sessionUser.user_metadata || {};
            await supabase.from('utilisateurs').insert([{
                id: sessionUser.id,
                nom: meta.nom || sessionUser.email.split('@')[0],
                email: sessionUser.email,
                telephone: meta.telephone || '',
                role: 'visiteur'
            }]);
        }
        return existing;
    };

    useEffect(() => {
        const init = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/auth/login?redirect=/checkout/' + id);
                return;
            }
            setUser(session.user);

            // Step 1: Ensure utilisateurs row exists (critical for FK)
            await ensureUserRow(session.user);

            // Step 2: Fetch event
            const { data: eventData, error: eventError } = await supabase
                .from('evenements')
                .select('*')
                .eq('id', id)
                .single();

            if (eventError || !eventData) {
                setError("Événement introuvable.");
                setLoading(false);
                return;
            }

            if (eventData.places_restantes <= 0) {
                setError("Désolé, cet événement est complet.");
                setLoading(false);
                return;
            }

            setEvent(eventData);

            // Step 3: Pre-fill phone from user profile
            const { data: dbUser } = await supabase
                .from('utilisateurs')
                .select('telephone')
                .eq('id', session.user.id)
                .single();
            if (dbUser && dbUser.telephone) setPhoneToPay(dbUser.telephone);

            // Step 4: Auto-process free events
            if (eventData.prix_fcfa === 0) {
                await processFreeCheckout(session.user.id, eventData);
            } else {
                setLoading(false);
            }
        };
        init();
    }, [id]);

    const processFreeCheckout = async (userId, eventData) => {
        setProcessing(true);
        const { data: cmdData, error: cmdErr } = await supabase
            .from('commandes')
            .insert([{ utilisateur_id: userId, montant_total: 0, statut: 'confirmee' }])
            .select()
            .single();

        if (cmdErr) {
            setError("Erreur lors de la création de la commande : " + cmdErr.message);
            setProcessing(false);
            setLoading(false);
            return;
        }

        const { error: billetErr } = await supabase.from('billets').insert([{
            commande_id: cmdData.id,
            evenement_id: eventData.id,
            code_qr: generateQRCode(),
            statut_scan: false
        }]);

        if (billetErr) {
            setError("Erreur lors de la génération du billet : " + billetErr.message);
            setProcessing(false);
            setLoading(false);
            return;
        }

        await supabase
            .from('evenements')
            .update({ places_restantes: eventData.places_restantes - 1 })
            .eq('id', eventData.id);

        router.push('/billets?success=true');
    };

    const handleStartPayment = async (e) => {
        e.preventDefault();
        if (processing) return;
        setProcessing(true);
        setError(null);

        const { data: cmdData, error: cmdErr } = await supabase
            .from('commandes')
            .insert([{ utilisateur_id: user.id, montant_total: event.prix_fcfa, statut: 'en_attente' }])
            .select()
            .single();

        if (cmdErr) {
            setError("Erreur : " + cmdErr.message);
            setProcessing(false);
            return;
        }

        setCommandeId(cmdData.id);
        setFlowState('paying');
        setProcessing(false);
    };

    const simulatePaymentSuccess = async () => {
        setProcessing(true);
        setError(null);

        const ref = 'MM-' + Math.random().toString(36).substring(2, 10).toUpperCase();
        await supabase.from('paiements').insert([{
            commande_id: commandeId,
            methode: paymentMethod,
            reference_operateur: ref,
            statut: 'reussi'
        }]);

        await supabase.from('commandes').update({ statut: 'confirmee' }).eq('id', commandeId);

        const { error: billetErr } = await supabase.from('billets').insert([{
            commande_id: commandeId,
            evenement_id: event.id,
            code_qr: generateQRCode(),
            statut_scan: false
        }]);

        if (billetErr) {
            setError("Billet non créé : " + billetErr.message);
            setProcessing(false);
            return;
        }

        await supabase
            .from('evenements')
            .update({ places_restantes: event.places_restantes - 1 })
            .eq('id', event.id);

        setFlowState('success');
        setProcessing(false);

        setTimeout(() => router.push('/billets?success=true'), 2500);
    };

    // ERROR STATE
    if (error && !event) return (
        <div className="min-h-[70vh] flex items-center justify-center bg-[#09090b]">
            <div className="bg-[#18181b] p-10 rounded-3xl border border-red-900/50 text-center max-w-md">
                <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
                <h2 className="text-2xl font-bold text-slate-100 mb-2">Erreur</h2>
                <p className="text-slate-400 mb-6">{error}</p>
                <button onClick={() => router.back()} className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-xl">
                    Retour
                </button>
            </div>
        </div>
    );

    // LOADING STATE
    if (loading) return (
        <div className="min-h-[70vh] flex items-center justify-center bg-[#09090b]">
            <div className="text-center">
                <Loader2 className="animate-spin text-amber-500 mx-auto mb-4" size={48} />
                <p className="text-slate-400">Préparation de votre réservation...</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#09090b] py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">

                {error && (
                    <div className="mb-6 bg-red-900/30 border border-red-700/50 text-red-400 p-4 rounded-2xl flex items-center gap-3">
                        <AlertTriangle size={20} className="shrink-0" />
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                {/* SUCCESS STATE */}
                {flowState === 'success' ? (
                    <div className="bg-[#18181b] p-12 rounded-3xl shadow-xl text-center border border-emerald-500/20 flex flex-col items-center">
                        <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="text-emerald-500 w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-100 mb-2">Paiement Réussi !</h2>
                        <p className="text-slate-400 mb-8">Votre billet a été généré. Redirection vers vos billets...</p>
                        <Loader2 className="animate-spin text-amber-500" />
                    </div>

                    /* PAYMENT SIMULATION STATE */
                ) : flowState === 'paying' ? (
                    <div className="bg-[#18181b] p-8 md:p-12 rounded-3xl shadow-xl border border-slate-800 text-center relative overflow-hidden">
                        <div className={`absolute top-0 left-0 w-full h-2 ${paymentMethod.includes('Orange') ? 'bg-orange-500' : 'bg-yellow-400'}`}></div>
                        <h2 className="text-2xl font-black text-slate-100 mb-2">Simulation de Paiement</h2>
                        <p className="text-slate-400 mb-8">
                            Confirmez le paiement de <strong className="text-amber-500">{event.prix_fcfa.toLocaleString()} FCFA</strong>
                            {phoneToPay && <> sur <strong className="text-slate-200">{phoneToPay}</strong></>} via <strong>{paymentMethod}</strong>.
                        </p>

                        <div className="flex justify-center mb-8">
                            <div className="relative animate-bounce">
                                <Smartphone size={80} className="text-slate-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <CreditCard size={32} className={paymentMethod.includes('Orange') ? 'text-orange-500' : 'text-yellow-500'} />
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={simulatePaymentSuccess}
                            disabled={processing}
                            className={`w-full py-4 rounded-xl font-bold text-black shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-60 ${paymentMethod.includes('Orange') ? 'bg-orange-500 hover:bg-orange-600' : 'bg-yellow-400 hover:bg-yellow-500'}`}
                        >
                            {processing ? 'Génération du billet en cours...' : '✓ Confirmer le paiement (Simulation)'}
                        </button>
                    </div>

                    /* CHECKOUT FORM */
                ) : event && (
                    <div className="bg-[#18181b] rounded-3xl shadow-xl overflow-hidden border border-slate-800 flex flex-col md:flex-row">
                        {/* Summary side */}
                        <div className="md:w-1/2 bg-black p-8 text-white flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
                            <div>
                                <span className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/30 inline-block mb-6">Récapitulatif</span>
                                <h2 className="text-2xl font-black mb-3 text-slate-100">{event.titre}</h2>
                                <div className="text-slate-400 mt-4 space-y-2 text-sm">
                                    <p>📅 {new Date(event.date_heure).toLocaleString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                                    <p>📍 {event.lieu}</p>
                                    <p className="text-emerald-500">🎟 {event.places_restantes} place(s) restante(s)</p>
                                </div>
                            </div>
                            <div className="mt-10 bg-[#09090b] p-6 rounded-2xl border border-slate-800">
                                <p className="text-slate-400 mb-1 text-sm">Total à payer</p>
                                <p className="text-4xl font-black text-amber-500">{event.prix_fcfa.toLocaleString()} FCFA</p>
                            </div>
                        </div>

                        {/* Payment form */}
                        <div className="md:w-1/2 p-8">
                            <h3 className="text-xl font-bold text-slate-100 mb-6">Mode de paiement</h3>
                            <form onSubmit={handleStartPayment} className="space-y-6">
                                <div className="grid grid-cols-2 gap-3">
                                    {['MTN Mobile Money', 'Orange Money'].map((method) => (
                                        <button
                                            key={method}
                                            type="button"
                                            onClick={() => setPaymentMethod(method)}
                                            className={`border-2 p-4 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === method
                                                ? method.includes('Orange') ? 'border-orange-500 bg-orange-500/10 text-orange-500' : 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                                                : 'border-slate-800 hover:border-slate-700 text-slate-500'}`}
                                        >
                                            <Smartphone size={24} />
                                            <span className="font-bold text-sm">{method.replace(' Money', '')}</span>
                                        </button>
                                    ))}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1">Numéro de téléphone</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                        placeholder="6XXXXXXXX"
                                        value={phoneToPay}
                                        onChange={(e) => setPhoneToPay(e.target.value)}
                                    />
                                </div>

                                <div className="pt-4 border-t border-slate-800">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-transform hover:scale-[1.02] disabled:opacity-50"
                                    >
                                        {processing ? 'Initialisation...' : `Payer ${event.prix_fcfa.toLocaleString()} FCFA`}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
