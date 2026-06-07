"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { LayoutDashboard, CalendarDays, LineChart, ScanBarcode, Loader2, Plus, Edit2, AlertTriangle, CheckCircle, Video, Crown, Check, X, Trash2 } from 'lucide-react';

export default function AdminDashboard() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('events');

    const [events, setEvents] = useState([]);
    const [commandes, setCommandes] = useState([]);
    const [billets, setBillets] = useState([]);
    const [artistes, setArtistes] = useState([]);

    const [scanCode, setScanCode] = useState('');
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const initAdmin = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/auth/login');
                return;
            }

            const { data: user } = await supabase.from('utilisateurs').select('role').eq('id', session.user.id).single();
            if (!user || user.role !== 'admin') {
                router.push('/');
                return;
            }

            await fetchAllData();
            setLoading(false);
        };

        initAdmin();
    }, [router]);

    const fetchAllData = async () => {
        const { data: eData } = await supabase.from('evenements').select('*').order('date_heure', { ascending: true });
        if (eData) setEvents(eData);

        const { data: cData } = await supabase.from('commandes').select('*, utilisateurs(nom, email)').order('created_at', { ascending: false });
        if (cData) setCommandes(cData);

        const { data: bData } = await supabase.from('billets').select('*, evenements(titre)').order('created_at', { ascending: false });
        if (bData) setBillets(bData);

        const { data: aData } = await supabase.from('artistes_realisateurs').select('*').order('created_at', { ascending: false });
        if (aData) setArtistes(aData);
    };

    const togglePublish = async (id, currentStatus) => {
        await supabase.from('evenements').update({ est_publie: !currentStatus }).eq('id', id);
        fetchAllData();
    };

    const updatePlaces = async (id) => {
        const newPlaces = prompt("Nouveau nombre de places restantes :");
        if (newPlaces && !isNaN(newPlaces)) {
            await supabase.from('evenements').update({ places_restantes: parseInt(newPlaces, 10) }).eq('id', id);
            fetchAllData();
        }
    };

    const handleScan = async (e) => {
        e.preventDefault();
        if (!scanCode.trim()) return;

        const { data: billet } = await supabase.from('billets').select('*, evenements(titre)').eq('code_qr', scanCode).single();

        if (!billet) {
            setScanResult({ type: 'error', message: 'Billet introuvable dans le système.' });
            return;
        }

        if (billet.statut_scan) {
            setScanResult({ type: 'fraud', message: 'Attention : Billet déjà utilisé ! FRAUDE', detail: billet.evenements.titre });
        } else {
            await supabase.from('billets').update({ statut_scan: true }).eq('id', billet.id);
            setScanResult({ type: 'success', message: 'Billet Validé !', detail: billet.evenements.titre });
            fetchAllData();
        }
        setScanCode('');
    };

    if (loading) return <div className="flex h-screen items-center justify-center bg-[#09090b]"><Loader2 className="animate-spin text-amber-500" size={48} /></div>;

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#09090b]">
            {/* SIDEBAR */}
            <div className="w-full md:w-64 bg-black border-r border-slate-800 text-white p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-10 text-emerald-500">
                    <LayoutDashboard size={28} />
                    <span className="text-xl font-black text-white">Admin</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <button onClick={() => setActiveTab('events')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'events' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
                        <CalendarDays size={20} /> Événements
                    </button>
                    <button onClick={() => setActiveTab('sales')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'sales' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
                        <LineChart size={20} /> Ventes & Billets
                    </button>
                    <button onClick={() => setActiveTab('candidatures')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'candidatures' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
                        <Video size={20} /> Appels à Projets
                    </button>
                    <button onClick={() => setActiveTab('miss')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'miss' ? 'bg-amber-500 text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
                        <Crown size={20} /> Miss FESTICO
                    </button>
                    <button onClick={() => setActiveTab('scanner')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'scanner' ? 'bg-emerald-500 text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>
                        <ScanBarcode size={20} /> Scanner (Guichet)
                    </button>
                </nav>
            </div>

            {/* CONTENT */}
            <div className="flex-1 p-8 overflow-auto h-screen">

                {activeTab === 'events' && (
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold text-slate-100">Gestion des Événements</h1>
                            <button disabled className="bg-black border border-slate-800 hover:bg-slate-900 text-white px-4 py-2 flex items-center gap-2 rounded-xl text-sm opacity-50 cursor-not-allowed">
                                <Plus size={16} /> Ajouter (Bientôt)
                            </button>
                        </div>

                        <div className="bg-[#18181b] rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-black text-slate-400 text-sm border-b border-slate-800">
                                        <th className="p-4 font-semibold">Titre</th>
                                        <th className="p-4 font-semibold">Date</th>
                                        <th className="p-4 font-semibold">Places Rest.</th>
                                        <th className="p-4 font-semibold">Statut</th>
                                        <th className="p-4 font-semibold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {events.map(ev => (
                                        <tr key={ev.id} className="hover:bg-black/50">
                                            <td className="p-4 font-medium text-slate-200">{ev.titre}</td>
                                            <td className="p-4 text-slate-400">{new Date(ev.date_heure).toLocaleDateString('fr-FR')}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`font-bold ${ev.places_restantes < 10 ? 'text-amber-500' : 'text-emerald-500'}`}>{ev.places_restantes} / {ev.places_totales}</span>
                                                    <button onClick={() => updatePlaces(ev.id)} className="text-slate-500 hover:text-amber-500"><Edit2 size={14} /></button>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold border ${ev.est_publie ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-slate-800 text-slate-400 border-slate-700'}`}>
                                                    {ev.est_publie ? 'Publié' : 'Brouillon'}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button onClick={() => togglePublish(ev.id, ev.est_publie)} className="text-sm font-medium text-amber-500 hover:text-amber-400 border border-amber-500/20 hover:border-amber-500/50 px-3 py-1 rounded-lg transition-colors">
                                                    {ev.est_publie ? 'Masquer' : 'Publier'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'sales' && (
                    <div>
                        <h1 className="text-3xl font-bold text-slate-100 mb-8">Suivi des Ventes</h1>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-[#18181b] p-6 rounded-2xl border border-slate-800 shadow-sm">
                                <p className="text-slate-400 text-sm font-medium mb-1">Total Commandes</p>
                                <p className="text-3xl font-black text-slate-100">{commandes.length}</p>
                            </div>
                            <div className="bg-[#18181b] p-6 rounded-2xl border border-slate-800 shadow-sm">
                                <p className="text-slate-400 text-sm font-medium mb-1">Chiffre d'affaires</p>
                                <p className="text-3xl font-black text-amber-500">
                                    {commandes.filter(c => c.statut === 'confirmee').reduce((acc, c) => acc + c.montant_total, 0)} FCFA
                                </p>
                            </div>
                            <div className="bg-[#18181b] p-6 rounded-2xl border border-slate-800 shadow-sm">
                                <p className="text-slate-400 text-sm font-medium mb-1">Billets Générés</p>
                                <p className="text-3xl font-black text-emerald-500">{billets.length}</p>
                            </div>
                        </div>

                        <div className="bg-[#18181b] rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
                            <div className="p-4 border-b border-slate-800 bg-black">
                                <h3 className="font-bold text-slate-300">Dernières Commandes</h3>
                            </div>
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-[#18181b] text-slate-500 border-b border-slate-800">
                                        <th className="p-4 font-medium">ID</th>
                                        <th className="p-4 font-medium">Utilisateur</th>
                                        <th className="p-4 font-medium">Montant</th>
                                        <th className="p-4 font-medium">Statut</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {commandes.map(cmd => (
                                        <tr key={cmd.id} className="hover:bg-black/50">
                                            <td className="p-4 font-mono text-xs text-slate-400">{cmd.id.split('-')[0]}...</td>
                                            <td className="p-4 font-medium text-slate-200">{cmd.utilisateurs?.nom || 'Inconnu'}</td>
                                            <td className="p-4 font-bold text-slate-100">{cmd.montant_total} FCFA</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-bold border ${cmd.statut === 'confirmee' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}`}>
                                                    {cmd.statut}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                    {commandes.length === 0 && <tr><td colSpan="4" className="p-8 text-center text-slate-500">Aucune commande</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'candidatures' && (
                    <div>
                        <h1 className="text-3xl font-bold text-slate-100 mb-8">Appels à Projets & Candidatures</h1>
                        <div className="bg-[#18181b] rounded-2xl shadow-sm border border-slate-800 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-black text-slate-400 text-sm border-b border-slate-800">
                                        <th className="p-4 font-semibold">Candidat</th>
                                        <th className="p-4 font-semibold">Type</th>
                                        <th className="p-4 font-semibold">Pays</th>
                                        <th className="p-4 font-semibold">Projet</th>
                                        <th className="p-4 font-semibold text-right">Décision</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800 text-sm">
                                    {artistes.filter(a => ['Candidat Film', 'Candidat Humour', 'Refusé'].includes(a.type)).map(a => (
                                        <tr key={a.id} className="hover:bg-black/50">
                                            <td className="p-4 font-bold text-slate-200">{a.nom}</td>
                                            <td className="p-4 text-slate-400"><span className={`px-2 py-1 rounded-md text-xs font-bold border ${a.type === 'Candidat Film' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : a.type === 'Candidat Humour' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-red-900/40 text-red-400 border-red-500/20'}`}>{a.type}</span></td>
                                            <td className="p-4 text-slate-400">{a.pays}</td>
                                            <td className="p-4 text-slate-400 max-w-sm truncate" title={a.biographie}>{a.biographie}</td>
                                            <td className="p-4 text-right">
                                                {a.type !== 'Refusé' ? (
                                                    <div className="flex justify-end gap-2">
                                                        <button onClick={async () => {
                                                            const newType = a.type === 'Candidat Film' ? 'Réalisateur' : 'Humoriste';
                                                            await supabase.from('artistes_realisateurs').update({ type: newType }).eq('id', a.id);
                                                            fetchAllData();
                                                        }} className="p-2 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-black rounded-lg transition-colors" title="Accepter">
                                                            <Check size={16} />
                                                        </button>
                                                        <button onClick={async () => {
                                                            await supabase.from('artistes_realisateurs').update({ type: 'Refusé' }).eq('id', a.id);
                                                            fetchAllData();
                                                        }} className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors" title="Refuser">
                                                            <X size={16} />
                                                        </button>
                                                    </div>
                                                ) : <span className="text-red-500 font-bold text-xs uppercase">Rejeté</span>}
                                            </td>
                                        </tr>
                                    ))}
                                    {artistes.filter(a => ['Candidat Film', 'Candidat Humour', 'Refusé'].includes(a.type)).length === 0 && <tr><td colSpan="5" className="p-8 text-center text-slate-500">Aucune candidature en attente</td></tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'miss' && (
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <h1 className="text-3xl font-bold text-slate-100">MiSS FESTICO</h1>
                            <button onClick={async () => {
                                const nom = prompt("Nom de la candidate:");
                                if (!nom) return;
                                const img = prompt("URL de la photo (laissez vide si pas d'image):");
                                await supabase.from('artistes_realisateurs').insert([{ nom, type: 'Candidate Miss', photo_url: img || null }]);
                                fetchAllData();
                            }} className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 flex items-center gap-2 rounded-xl text-sm font-bold shadow-lg shadow-amber-500/20">
                                <Plus size={16} /> Ajouter une Candidate
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {artistes.filter(a => a.type === 'Candidate Miss').map(miss => (
                                <div key={miss.id} className="bg-[#18181b] rounded-2xl p-4 border border-slate-800 text-center relative group">
                                    <button onClick={async () => {
                                        if (confirm("Supprimer cette candidate ?")) {
                                            await supabase.from('artistes_realisateurs').delete().eq('id', miss.id);
                                            fetchAllData();
                                        }
                                    }} className="absolute top-2 right-2 p-2 bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-lg opacity-0 group-hover:opacity-100 transition-all z-10">
                                        <Trash2 size={16} />
                                    </button>
                                    <div className="aspect-square bg-slate-900 rounded-xl mb-4 overflow-hidden">
                                        {miss.photo_url ? <img src={miss.photo_url} className="w-full h-full object-cover" /> : <Crown size={48} className="mx-auto mt-8 text-slate-700" />}
                                    </div>
                                    <h3 className="font-bold text-slate-100">{miss.nom}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'scanner' && (
                    <div className="max-w-xl mx-auto mt-12">
                        <div className="text-center mb-8">
                            <ScanBarcode size={48} className="mx-auto text-emerald-500 mb-4" />
                            <h1 className="text-3xl font-bold text-slate-100">Guichet & Scanner</h1>
                            <p className="text-slate-400 mt-2">Saisissez le code QR du billet pour vérifier sa validité ou utilisez un lecteur optique.</p>
                        </div>

                        <form onSubmit={handleScan} className="mb-8 relative">
                            <input
                                type="text"
                                value={scanCode}
                                onChange={(e) => setScanCode(e.target.value)}
                                placeholder="Scanner ou taper le code (ex: FESTICO-ABCD123)"
                                className="w-full bg-[#18181b] border-2 border-slate-700 text-white px-6 py-5 rounded-2xl text-lg font-mono placeholder:font-sans focus:outline-none focus:border-amber-500 shadow-sm transition-colors"
                                autoFocus
                            />
                            <button type="submit" className="absolute right-3 top-3 bottom-3 bg-amber-500 hover:bg-amber-400 text-black px-6 rounded-xl font-bold transition-colors">
                                Vérifier
                            </button>
                        </form>

                        {scanResult && (
                            <div className={`p-8 rounded-2xl text-center border-2 animate-in fade-in slide-in-from-bottom-4 ${scanResult.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-500' :
                                scanResult.type === 'fraud' ? 'bg-red-900/20 border-red-500/50 text-red-500' :
                                    'bg-slate-800 border-slate-700 text-slate-300'
                                }`}>
                                {scanResult.type === 'success' && <CheckCircle size={48} className="mx-auto text-emerald-500 mb-4" />}
                                {scanResult.type === 'fraud' && <AlertTriangle size={48} className="mx-auto text-red-500 mb-4 animate-bounce" />}

                                <h3 className={`text-2xl font-black mb-2 ${scanResult.type === 'fraud' ? 'text-red-500' : ''}`}>{scanResult.message}</h3>
                                {scanResult.detail && <p className="font-medium opacity-80">{scanResult.detail}</p>}
                            </div>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}
