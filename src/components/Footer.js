"use client";

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleContact = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulation of the Resend API call (User will configure the API later as instructed)
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <footer className="bg-black text-white py-16 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-900 pb-12">
                    {/* Logo & About */}
                    <div className="col-span-1 lg:col-span-1">
                        <img src="/logo.png" alt="FESTICO Logo" className="h-20 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.2)]" />
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            14ème édition du Festival International des Images Comiques. La comédie : le genre idéal pour la sensibilisation et l'éducation des masses.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-100 mb-6">Navigation</h3>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="/" className="hover:text-amber-500 transition-colors">Accueil</a></li>
                            <li><a href="/evenements" className="hover:text-amber-500 transition-colors">Programme</a></li>
                            <li><a href="/soumettre-un-projet" className="text-emerald-500 hover:text-emerald-400 transition-colors font-medium">Soumettre un projet</a></li>
                        </ul>
                    </div>

                    {/* Contact Form (Takes 2 cols on lg) */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
                            <Send size={18} className="text-amber-500" />
                            Nous écrire
                        </h3>

                        {sent ? (
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center">
                                <CheckCircle className="text-emerald-500 mx-auto mb-3" size={32} />
                                <h4 className="text-emerald-500 font-bold mb-1">Message envoyé !</h4>
                                <p className="text-slate-400 text-sm">Notre équipe vous répondra très rapidement.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleContact} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" required placeholder="Votre nom" className="bg-[#09090b] border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm w-full" />
                                    <input type="email" required placeholder="Votre email" className="bg-[#09090b] border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm w-full" />
                                </div>
                                <textarea required placeholder="Votre message..." rows="3" className="bg-[#09090b] border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm w-full resize-none"></textarea>
                                <button type="submit" disabled={loading} className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 w-full sm:w-auto">
                                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                                    Envoyer
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FESTICO. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <a href="tel:+237690667871" className="hover:text-amber-500 transition-colors">+237 690 66 78 71</a>
                        <span>•</span>
                        <a href="mailto:festico237@gmail.com" className="hover:text-amber-500 transition-colors">festico237@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
