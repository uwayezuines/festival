"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            setError(error.message);
        } else {
            router.push('/');
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-[#09090b] relative overflow-hidden">
            <div className="bg-[#18181b] p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md relative z-10 border border-slate-800">
                <div className="flex justify-center mb-6">
                    <img src="/logo.png" alt="FESTICO Logo" className="h-16" />
                </div>
                <h2 className="text-3xl font-black mb-2 text-slate-100 text-center">Bienvenue 👋</h2>
                <p className="text-slate-400 mb-8 text-center">Connectez-vous pour accéder à vos billets FESTICO.</p>

                {error && <div className="bg-red-900/50 text-red-400 p-3 rounded-lg mb-6 text-sm border border-red-800">{error}</div>}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                        <input type="email" required className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-black transition-all outline-none" placeholder="votre@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Mot de passe</label>
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} required className="w-full px-4 py-3 rounded-xl bg-[#09090b] text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-black transition-all outline-none pr-12" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-amber-500 transition-colors">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all outline-none disabled:opacity-50">
                        {loading ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>

                <p className="mt-8 text-center text-slate-400 text-sm">
                    Vous n'avez pas de compte ? <Link href="/auth/signup" className="text-emerald-500 font-bold hover:underline">S'inscrire</Link>
                </p>
            </div>
        </div>
    );
}
