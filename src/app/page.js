import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { CalendarDays, MapPin, UserSquare2 } from 'lucide-react';

export const revalidate = 0;

export default async function Home() {
  const { data: evenements } = await supabase
    .from('evenements')
    .select('*, artistes_realisateurs(nom)')
    .eq('est_publie', true)
    .order('date_heure', { ascending: true })
    .limit(6);

  // Load all members of the direction team from DB
  const { data: equipe } = await supabase
    .from('artistes_realisateurs')
    .select('*')
    .in('type', ['Direction FESTICO', 'Coordinateur'])
    .order('id', { ascending: true });

  // Load Miss FESTICO Candidates
  const { data: missCandidates } = await supabase
    .from('artistes_realisateurs')
    .select('*')
    .eq('type', 'Candidate Miss')
    .order('id', { ascending: true });

  return (
    <div className="flex flex-col min-h-screen bg-[#09090b]">
      {/* HERO SECTION */}
      <section className="relative bg-[#09090b] text-white py-32 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1543628461-12f5a6b0cbea?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#09090b]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold text-sm tracking-wide">
            14e Édition
          </div>
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="FESTICO" className="h-28 md:h-40 filter drop-shadow-2xl" />
          </div>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            "La comédie : le genre idéal pour la sensibilisation et l'éducation des masses à travers le digital"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-slate-200">
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-800">
              <CalendarDays className="text-amber-500" />
              <span className="font-medium text-amber-500">23 - 27 Juin 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-800">
              <MapPin className="text-amber-500" />
              <span className="font-medium">Village du Festival, Hôtel de ville de Yaoundé</span>
            </div>
          </div>

          <Link href="/evenements" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-amber-500 rounded-full hover:scale-105 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20">
            Découvrir le Programme
          </Link>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-24 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Événements à la Une</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {evenements?.map((event) => (
              <div key={event.id} className="bg-black rounded-3xl overflow-hidden shadow-xl shadow-black/50 hover:-translate-y-2 transition-all duration-300 border border-slate-800 flex flex-col hover:border-amber-500/30 group">
                <div className="h-48 bg-slate-900 relative overflow-hidden">
                  {event.image_url ? (
                    <img src={event.image_url} alt={event.titre} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center border-b border-slate-800">
                      <CalendarDays size={48} className="text-slate-700" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-emerald-500 shadow-sm border border-emerald-500/20">
                    {event.prix_fcfa === 0 ? 'Gratuit' : `${event.prix_fcfa} FCFA`}
                  </div>
                  <div className="absolute top-4 left-4 bg-amber-500 px-3 py-1 rounded-full text-xs font-bold text-black uppercase tracking-wider shadow-sm">
                    {event.type}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-slate-100">{event.titre}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{event.description}</p>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center text-sm text-slate-300 gap-2">
                      <CalendarDays size={16} className="text-amber-500" />
                      {new Date(event.date_heure).toLocaleString('fr-FR', {
                        day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit'
                      })}
                    </div>
                    {event.artistes_realisateurs && (
                      <div className="flex items-center text-sm text-slate-300 gap-2">
                        <UserSquare2 size={16} className="text-emerald-500" />
                        {event.artistes_realisateurs.nom}
                      </div>
                    )}
                  </div>

                  <Link href={`/evenements/${event.id}`} className="mt-6 block w-full text-center py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold transition-colors">
                    Réserver ma place
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {evenements?.length === 0 && (
            <div className="text-center py-12 text-slate-500">Aucun événement n'est encore publié.</div>
          )}
        </div>
      </section>

      {/* MISS FESTICO SECTION */}
      <section className="py-24 bg-[#09090b] border-t border-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Candidates MiSS FESTICO 2026</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Soutenez votre candidate favorite pour le couronnement de la beauté et de l'intelligence.</p>
          </div>

          {missCandidates && missCandidates.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {missCandidates.map((candidate) => (
                <div key={candidate.id} className="group relative rounded-3xl overflow-hidden bg-[#18181b] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl">
                  <div className="aspect-[3/4] bg-slate-900 overflow-hidden relative">
                    {candidate.photo_url ? (
                      <img src={candidate.photo_url} alt={candidate.nom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-700 bg-slate-900">
                        <UserSquare2 size={64} />
                        <span className="text-xs uppercase tracking-widest mt-2">{candidate.nom}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-2xl font-black text-amber-500 mb-1">{candidate.nom}</h3>
                      <p className="text-slate-300 text-sm italic mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">
                        "{candidate.biographie || 'En lice pour la couronne'}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 border border-slate-800/50 rounded-3xl bg-[#18181b]/50">Les candidates seront bientôt dévoilées.</div>
          )}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-black border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">L'Équipe FESTICO 2026</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Une équipe passionnée dédiée à la promotion de la comédie africaine.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(equipe || []).map((member) => (
              <div key={member.id} className="text-center group bg-[#09090b] rounded-2xl p-6 border border-slate-800 hover:border-amber-500/30 transition-all">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 shadow-xl border-2 border-slate-700 group-hover:border-amber-500 transition-all">
                  {member.photo_url ? (
                    <img src={member.photo_url} alt={member.nom} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-600">
                      <UserSquare2 size={40} />
                    </div>
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-100 leading-tight">{member.nom}</h3>
                <p className="text-amber-500 font-medium text-sm mt-1">{member.type === 'Coordinateur' ? 'Coordinateur' : 'Direction'}</p>
                {member.biographie && (
                  <p className="text-slate-500 text-xs max-w-xs mx-auto mt-2 line-clamp-2">{member.biographie}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-24 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Partenaires Majeurs</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="text-2xl font-black text-slate-300 hover:text-amber-500 transition-colors cursor-default">MINAC</div>
            <div className="text-2xl font-black text-slate-300 hover:text-emerald-500 transition-colors cursor-default">CANAL+</div>
            <div className="text-2xl font-black text-slate-300 hover:text-amber-500 transition-colors cursor-default">TV5MONDE</div>
            <div className="text-2xl font-black text-slate-300 hover:text-amber-500 transition-colors cursor-default">FRANCE VOLONTAIRES</div>
            <div className="text-2xl font-black text-slate-300 py-2 px-4 border-2 border-slate-600 hover:border-amber-500 hover:text-amber-500 transition-colors tracking-widest cursor-default">UNESCO</div>
          </div>
        </div>
      </section>

    </div>
  );
}
