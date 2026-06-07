"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Film, Mic, Upload, CheckCircle, Loader2, AlertTriangle, Crown, Send } from 'lucide-react';

export default function SoumettreProjet() {
    const [formData, setFormData] = useState({
        nom: '',
        pays: '',
        titre: '',
        synopsis: '',
        lien_video: '',
        photo_url: '',
        message_prive: '',
        categorie: 'Candidat Film'
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Format the "biographie" field to combine title, synopsis and link
        const biographieCompilee = `TITRE: ${formData.titre}\n\nSYNOPSIS:\n${formData.synopsis}\n\nLIEN VIDÉO: ${formData.lien_video}`;

        const { error: insertError } = await supabase.from('artistes_realisateurs').insert([{
            nom: formData.nom,
            pays: formData.pays,
            type: formData.categorie,
            biographie: biographieCompilee
        }]);

        if (insertError) {
            setError("Une erreur est survenue lors de la soumission : " + insertError.message);
        } else {
            setSuccess(true);
            setFormData({
                nom: '', pays: '', titre: '', synopsis: '', lien_video: '', photo_url: '', message_prive: '', categorie: 'Candidat Film'
            });
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#09090b] py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold text-sm tracking-widest uppercase">
                        Appel à candidatures
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4">Soumettre votre Projet</h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Vous avez un projet (Film, Humour) ou vous souhaitez participer à MiSS FESTICO ? Soumettez votre candidature ici.
                    </p>
                </div>

                {success ? (
                    <div className="bg-[#18181b] border border-emerald-500/30 p-12 rounded-3xl text-center shadow-xl shadow-emerald-500/10">
                        <CheckCircle className="text-emerald-500 mx-auto w-20 h-20 mb-6" />
                        <h2 className="text-3xl font-bold text-slate-100 mb-4">Projet soumis avec succès !</h2>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto">
                            Votre candidature a bien été enregistrée. Le comité de sélection l'examinera et vous contactera prochainement.
                        </p>
                        <button
                            onClick={() => setSuccess(false)}
                            className="px-6 py-3 bg-[#09090b] border border-slate-700 hover:border-emerald-500 text-slate-300 rounded-xl transition-all font-medium"
                        >
                            Soumettre un autre projet
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-[#18181b] border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
                        {error && (
                            <div className="mb-8 p-4 bg-red-900/40 border border-red-700/50 rounded-xl flex items-start gap-4">
                                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" />
                                <p className="text-red-400 text-sm leading-relaxed">{error}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {/* Category selector visually distinct */}
                            <div className="md:col-span-2 mb-4">
                                <label className="block text-sm font-bold text-slate-300 mb-3">Type de Projet</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, categorie: 'Candidat Film' })}
                                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${formData.categorie === 'Candidat Film' ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-800 text-slate-500 hover:border-slate-600'}`}
                                    >
                                        <Film size={28} />
                                        <span className="font-bold text-sm">Film / Cinéma</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, categorie: 'Candidat Humour' })}
                                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${formData.categorie === 'Candidat Humour' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' : 'border-slate-800 text-slate-500 hover:border-slate-600'}`}
                                    >
                                        <Mic size={28} />
                                        <span className="font-bold text-sm">Humour / Stand-up</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, categorie: 'Candidate Miss' })}
                                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${formData.categorie === 'Candidate Miss' ? 'border-pink-500 bg-pink-500/10 text-pink-500' : 'border-slate-800 text-slate-500 hover:border-slate-600'}`}
                                    >
                                        <Crown size={28} />
                                        <span className="font-bold text-sm">MiSS FESTICO</span>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Nom / Réalisateur</label>
                                <input
                                    type="text" required
                                    value={formData.nom} onChange={e => setFormData({ ...formData, nom: e.target.value })}
                                    className="w-full bg-[#09090b] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                                    placeholder="Ex: Jean Dupont"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Pays de résidence</label>
                                <input
                                    type="text" required
                                    value={formData.pays} onChange={e => setFormData({ ...formData, pays: e.target.value })}
                                    className="w-full bg-[#09090b] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                                    placeholder="Ex: Cameroun, France..."
                                />
                            </div>

                            {formData.categorie !== 'Candidate Miss' && (
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Titre du Projet</label>
                                    <input
                                        type="text" required
                                        value={formData.titre} onChange={e => setFormData({ ...formData, titre: e.target.value })}
                                        className="w-full bg-[#09090b] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                                        placeholder="Titre officiel de l'œuvre"
                                    />
                                </div>
                            )}

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-400 mb-2">
                                    {formData.categorie === 'Candidate Miss' ? 'Présentation (Taille, motivation, etc.)' : 'Synopsis ou Description'}
                                </label>
                                <textarea
                                    required rows="5"
                                    value={formData.synopsis} onChange={e => setFormData({ ...formData, synopsis: e.target.value })}
                                    className="w-full bg-[#09090b] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all resize-none"
                                    placeholder={formData.categorie === 'Candidate Miss' ? "Décrivez-vous brièvement..." : "Racontez-nous l'histoire..."}
                                ></textarea>
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-slate-400 mb-2">
                                    {formData.categorie === 'Candidate Miss' ? 'URL de votre Photo (obligatoire)' : 'Lien Vidéo (YouTube / Vimeo / Drive)'}
                                </label>
                                <input
                                    type="url" required
                                    value={formData.categorie === 'Candidate Miss' ? formData.photo_url : formData.lien_video}
                                    onChange={e => formData.categorie === 'Candidate Miss' ? setFormData({ ...formData, photo_url: e.target.value }) : setFormData({ ...formData, lien_video: e.target.value })}
                                    className="w-full bg-[#09090b] border border-slate-700 focus:border-amber-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all"
                                    placeholder="https://..."
                                />
                                <p className="text-xs text-slate-500 mt-2">
                                    {formData.categorie === 'Candidate Miss' ? "L'image sera visible par l'admin après validation." : "Le lien doit être accessible ou posséder un mot de passe."}
                                </p>
                            </div>

                            <div className="md:col-span-2 mt-4 bg-black/30 p-6 rounded-2xl border border-dashed border-slate-800">
                                <label className="flex items-center gap-2 text-sm font-bold text-amber-500 mb-3 uppercase tracking-tighter">
                                    <Send size={16} /> Message privé aux administrateurs
                                </label>
                                <textarea
                                    rows="3"
                                    value={formData.message_prive} onChange={e => setFormData({ ...formData, message_prive: e.target.value })}
                                    className="w-full bg-[#09090b] border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-white focus:outline-none transition-all resize-none text-sm"
                                    placeholder="Un détail à préciser ? Seuls les admins verront ce message."
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-10 border-t border-slate-800 pt-8 flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] disabled:opacity-50 shadow-lg shadow-amber-500/20"
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : <Upload size={20} />}
                                Soumettre ma candidature
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
