"use client";

import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Footer() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleContact = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <footer className="bg-black text-white py-16 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-slate-900 pb-12">
                    {/* Logo & About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-black font-black text-xl">F</span>
                            </div>
                            <div>
                                <p className="text-white font-black text-xl">FESTICO</p>
                                <p className="text-slate-500 text-xs">Festival International des Images Comiques</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            14ème édition — Yaoundé, 23-27 juin 2026. La comédie : le genre idéal pour la sensibilisation et l&apos;éducation des masses à travers le digital.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="https://www.facebook.com/Festico237" target="_blank" rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 text-sm font-bold transition-colors">
                                📘 Facebook
                            </a>
                            <a href="mailto:festico237@gmail.com" className="text-amber-500 hover:text-amber-400 text-sm font-bold transition-colors">
                                ✉️ Email
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
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
                                    <input type="text" required placeholder="Votre nom" className="bg-[#09090b] border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all text-sm w-full" />
                                    <input type="email" required placeholder="Votre email" className="bg-[#09090b] border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all text-sm w-full" />
                                </div>
                                <textarea required placeholder="Votre message..." rows={3} className="bg-[#09090b] border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-all text-sm w-full resize-none"></textarea>
                                <button type="submit" disabled={loading} className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50">
                                    {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                                    Envoyer le message
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} FESTICO. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <a href="tel:+237677867557" className="hover:text-amber-500 transition-colors">+237 677 86 75 57</a>
                        <span>•</span>
                        <a href="mailto:festico237@gmail.com" className="hover:text-amber-500 transition-colors">festico237@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
