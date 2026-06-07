"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function Signup() {
    const router = useRouter();
    const [formData, setFormData] = useState({ nom: '', telephone: '', email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error: authError } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    nom: formData.nom,
                    telephone: formData.telephone,
                }
            }
        });

        if (authError) {
            if (authError.message.includes('rate limit') || authError.message.includes('Email rate limit')) {
                setError("Trop d'inscriptions en peu de temps. Attendez quelques minutes ou désactivez la confirmation d'email dans Supabase.");
            } else {
                setError(authError.message);
            }
            setLoading(false);
            return;
        }

        // Supabase retourne un faux utilisateur quand "Confirm email" est activé (rate limit silencieux).
        // On détecte ça via data.user.identities vide.
        if (data?.user && data.user.identities && data.user.identities.length === 0) {
            setError('Un compte avec cet email existe déjà. Utilisez la connexion.');
            setLoading(false);
            return;
        }

        // Le trigger SQL handle_new_user() insère automatiquement dans la table utilisateurs.
        // On n'a pas besoin de le faire manuellement ici.
        router.push('/auth/login?registered=true');
        setLoading(false);
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center bg-[#09090b] relative overflow-hidden py-10">
            <div className="bg-[#18181b] p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md relative z-10 border border-slate-800">
                <div className="flex justify-center mb-6">
                    <img src="/logo.png" alt="FESTICO Logo" className="h-16" />
                </div>
                <h2 className="text-3xl font-black mb-2 text-slate-100 text-center">Nouveau par ici ? 👋</h2>
                <p className="text-slate-400 mb-8 text-center">Créez votre compte pour réserver vos billets.</p>

                {error && <div className="bg-red-900/50 text-red-400 p-3 rounded-lg mb-6 text-sm border border-red-800">{error}</div>}

                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Nom complet</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-black transition-all outline-none" placeholder="Jean Dupont" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Téléphone</label>
                        <input type="tel" required className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-black transition-all outline-none" placeholder="6XXXXXXX" value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-black transition-all outline-none" placeholder="votre@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Mot de passe</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} required className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-black transition-all outline-none pr-12" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-500 transition-colors">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all outline-none disabled:opacity-50 mt-4">
                        {loading ? 'Inscription...' : 'Créer un compte'}
                    </button>
                </form>

                <p className="mt-8 text-center text-slate-400 text-sm">
                    Déjà inscrit ? <Link href="/auth/login" className="text-amber-500 font-bold hover:underline">Se connecter</Link>
                </p>
            </div>
        </div>
    );
}
