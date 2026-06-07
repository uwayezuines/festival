"use client";
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { LogOut, User, Ticket, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [role, setRole] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setUser(session.user);
                const { data: dbUser } = await supabase.from('utilisateurs').select('role').eq('id', session.user.id).single();
                if (dbUser) {
                    setRole(dbUser.role);
                }
            }
        };
        checkUser();

        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                setUser(session.user);
                const { data: dbUser } = await supabase.from('utilisateurs').select('role').eq('id', session.user.id).single();
                if (dbUser) {
                    setRole(dbUser.role);
                }
            } else {
                setUser(null);
                setRole(null);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    return (
        <nav className="bg-[#09090b] text-slate-200 border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-3">
                            <img src="/logo.png" alt="FESTICO Logo" className="h-10" />
                            <span className="font-black text-2xl tracking-tighter text-amber-500 hidden sm:block">
                                FESTICO
                            </span>
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <Link href="/" className="hover:text-amber-500 font-medium transition-colors">Accueil</Link>
                            <Link href="/evenements" className="hover:text-amber-500 font-medium transition-colors">Événements</Link>
                            {user ? (
                                <>
                                    <Link href="/billets" className="hover:text-amber-500 flex items-center gap-1 font-medium transition-colors"><Ticket size={18} /> Mon Espace</Link>
                                    <button onClick={handleLogout} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full transition-all">
                                        <LogOut size={16} /> Déconnexion
                                    </button>
                                </>
                            ) : (
                                <div className="flex items-center space-x-4">
                                    <Link href="/auth/login" className="hover:text-amber-500 font-medium transition-colors">Connexion</Link>
                                    <Link href="/auth/signup" className="bg-amber-500 hover:bg-amber-600 px-5 py-2 rounded-full text-black font-bold transition-all shadow-lg shadow-amber-500/20">Inscription</Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white focus:outline-none">
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#09090b] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 shadow-2xl">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-slate-900 rounded-lg">Accueil</Link>
                    <Link href="/evenements" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-500 hover:bg-slate-900 rounded-lg">Événements</Link>
                    {user ? (
                        <>
                            <Link href="/billets" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-amber-500 hover:bg-slate-900 rounded-lg">
                                <span className="flex items-center gap-2"><Ticket size={18} /> Mon Espace</span>
                            </Link>
                            <button onClick={() => { setIsMobileMenuOpen(false); handleLogout(); }} className="w-full text-left px-3 py-2 text-base font-medium text-red-500 hover:bg-slate-900 rounded-lg flex items-center gap-2">
                                <LogOut size={18} /> Déconnexion
                            </button>
                        </>
                    ) : (
                        <div className="pt-4 flex flex-col gap-3 border-t border-slate-800">
                            <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3 text-base font-medium text-slate-300 border border-slate-700 hover:bg-slate-800 rounded-xl">
                                Connexion
                            </Link>
                            <Link href="/auth/signup" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3 text-base font-bold text-black bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/20">
                                Inscription
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
