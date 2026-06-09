'use client';

import { useState } from 'react';
import {
  TABS, TEXTE_ACCUEIL, YOUTUBE_EMBED_URL,
  ESSENCE_ITEMS, BIENFAITS, ARGUMENTS_PARTENARIATS, PARTENAIRES,
  EQUIPE, CONTACTS, EDITION_INFO, ACTIVITES
} from '@/data/festicoData';

// ============================================================
// SUB-COMPONENTS
// ============================================================

function TabAccueil() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <div className="text-center py-8">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm tracking-widest uppercase">
          🎭 Festival International des Images Comiques
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          L'Afrique rit,<br />
          <span className="text-amber-400">l'Afrique vit !</span>
        </h2>
        <div className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed whitespace-pre-line">
          {TEXTE_ACCUEIL}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { nb: '14ème', label: 'Édition' },
          { nb: '12 000', label: 'Visiteurs' },
          { nb: '2026', label: 'Yaoundé' },
          { nb: '5 jours', label: "D'événements" },
        ].map(s => (
          <div key={s.label} className="bg-gradient-to-br from-amber-400/10 to-amber-500/5 border border-amber-400/20 rounded-2xl p-6 text-center">
            <p className="text-3xl font-black text-amber-400">{s.nb}</p>
            <p className="text-slate-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Hymne */}
      <div className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-3xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">🎵 Hymne officiel du FESTICO</h3>
          <p className="text-slate-400">
            Découvrez l&apos;hymne officiel de la bonne humeur et du rire qui rassemble les cultures !
          </p>
        </div>
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-slate-700">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Hymne officiel FESTICO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

function TabEssence() {
  const [open, setOpen] = useState < number | null > (0);
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white mb-3">L&apos;Essence de FESTICO</h2>
        <p className="text-slate-400">Ce qui fait l&apos;unicité de notre festival</p>
      </div>
      <div className="space-y-3 max-w-3xl mx-auto">
        {ESSENCE_ITEMS.map((item, i) => (
          <div key={i} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/50">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-black text-amber-400 text-lg tracking-wider">{item.question}</span>
              </div>
              <span className={`text-slate-400 text-xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TabBienfaits() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white mb-3">Les Bienfaits du Rire</h2>
        <p className="text-slate-400">Le rire est la meilleure médecine — prouvé par la science !</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {BIENFAITS.map((b, i) => (
          <div key={i} className={`bg-gradient-to-br ${b.color} border rounded-2xl p-6 hover:scale-[1.02] transition-transform`}>
            <span className="text-4xl block mb-4">{b.icon}</span>
            <h3 className="font-black text-white text-lg mb-2">{b.titre}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
      {/* Big quote */}
      <div className="mt-8 bg-amber-400/5 border border-amber-400/20 rounded-3xl p-10 text-center">
        <p className="text-4xl mb-4">😂</p>
        <blockquote className="text-xl text-amber-400 font-bold italic">
          &ldquo;Rire, c&apos;est vivre en bonne santé — Rejoignez le FESTICO !&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

function TabPartenaires() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white mb-3">Nos Partenaires</h2>
        <p className="text-slate-400">Ensemble pour soutenir la culture et l&apos;humour en Afrique</p>
      </div>

      {/* Arguments */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-slate-900 to-black border border-amber-400/20 rounded-3xl p-8">
        <h3 className="text-xl font-black text-amber-400 mb-6">✨ Pourquoi devenir partenaire ?</h3>
        <ul className="space-y-4">
          {ARGUMENTS_PARTENARIATS.map((arg, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-lg mt-0.5">→</span>
              <span className="text-slate-300">{arg}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Partner logos grid */}
      <div>
        <h3 className="text-center text-slate-400 font-bold uppercase tracking-wider text-sm mb-6">Nos partenaires majeurs</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {PARTENAIRES.map((p, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-center text-center hover:border-amber-400/30 hover:bg-slate-800/80 transition-all group min-h-[80px]">
              <p className="text-slate-300 font-semibold text-sm group-hover:text-amber-400 transition-colors leading-snug">{p.nom}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabContacts() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white mb-3">Contacts & Équipe</h2>
        <p className="text-slate-400">L&apos;équipe derrière la magie du FESTICO</p>
      </div>

      {/* Team */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {EQUIPE.map((m, i) => (
          <div key={i} className="bg-gradient-to-br from-slate-900 to-black border border-slate-800 rounded-2xl p-6 text-center hover:border-amber-400/30 transition-colors">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-black text-2xl shadow-lg shadow-amber-500/20">
              {m.initial}
            </div>
            <h3 className="font-black text-white text-lg mb-1">{m.nom}</h3>
            <p className="text-amber-400 text-sm font-medium">{m.titre}</p>
          </div>
        ))}
      </div>

      {/* Contact details */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href={`tel:${CONTACTS.telMTN.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-yellow-400/5 border border-yellow-400/20 rounded-2xl p-5 hover:bg-yellow-400/10 transition-colors group">
          <span className="text-3xl">📱</span>
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">MTN Mobile Money</p>
            <p className="text-yellow-400 font-bold group-hover:underline">{CONTACTS.telMTN}</p>
          </div>
        </a>
        <a href={`tel:${CONTACTS.telOrange.replace(/\s/g, '')}`} className="flex items-center gap-4 bg-orange-400/5 border border-orange-400/20 rounded-2xl p-5 hover:bg-orange-400/10 transition-colors group">
          <span className="text-3xl">📱</span>
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Orange Money</p>
            <p className="text-orange-400 font-bold group-hover:underline">{CONTACTS.telOrange}</p>
          </div>
        </a>
        <a href={`mailto:${CONTACTS.emailPrincipal}`} className="flex items-center gap-4 bg-sky-400/5 border border-sky-400/20 rounded-2xl p-5 hover:bg-sky-400/10 transition-colors group">
          <span className="text-3xl">✉️</span>
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email</p>
            <p className="text-sky-400 font-bold text-sm group-hover:underline">{CONTACTS.emailPrincipal}</p>
            <p className="text-sky-400 font-bold text-sm group-hover:underline">{CONTACTS.emailSecondaire}</p>
          </div>
        </a>
        <a href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl p-5 hover:bg-blue-500/10 transition-colors group">
          <span className="text-3xl">📘</span>
          <div>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Page Facebook officielle</p>
            <p className="text-blue-400 font-bold group-hover:underline">Festico237</p>
          </div>
        </a>
      </div>
    </div>
  );
}

function TabEdition2026() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm tracking-widest">
          🎭 14e ÉDITION
        </div>
        <h2 className="text-4xl font-black text-white mb-4">FESTICO 2026</h2>
        <p className="text-slate-400 text-lg italic max-w-lg mx-auto">&ldquo;{EDITION_INFO.slogan}&rdquo;</p>
      </div>

      {/* Fiche d'identité */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 rounded-2xl p-6">
          <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">📅 Dates</p>
          <p className="text-white text-xl font-black">{EDITION_INFO.dates}</p>
        </div>
        <div className="bg-gradient-to-br from-emerald-400/10 to-transparent border border-emerald-400/20 rounded-2xl p-6">
          <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">📍 Lieu</p>
          <p className="text-white text-xl font-black">{EDITION_INFO.lieu}</p>
        </div>
        <div className="bg-gradient-to-br from-violet-400/10 to-transparent border border-violet-400/20 rounded-2xl p-6 md:col-span-2">
          <p className="text-violet-400 font-bold text-xs uppercase tracking-wider mb-2">🎯 Thème</p>
          <p className="text-white text-lg font-bold leading-snug">{EDITION_INFO.theme}</p>
        </div>
        <div className="bg-gradient-to-br from-sky-400/10 to-transparent border border-sky-400/20 rounded-2xl p-6 md:col-span-2 text-center">
          <p className="text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">🎟 Affluence</p>
          <p className="text-white text-3xl font-black">{EDITION_INFO.affluence}</p>
        </div>
      </div>

      {/* Activités */}
      <div>
        <h3 className="text-center text-slate-400 font-bold uppercase tracking-wider text-sm mb-6">🗓 Programme des activités</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {ACTIVITES.map((a, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-amber-400/30 transition-colors">
              <span className="text-3xl">{a.icon}</span>
              <p className="text-slate-200 font-semibold">{a.titre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================

export default function FesticoPage() {
  const [activeTab, setActiveTab] = useState('accueil');

  const tabContent = {
    accueil: <TabAccueil />,
    essence: <TabEssence />,
    bienfaits: <TabBienfaits />,
    partenaires: <TabPartenaires />,
    contacts: <TabContacts />,
    edition2026: <TabEdition2026 />,
  };

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* HERO HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#09090b] via-[#0f0f13] to-[#09090b] border-b border-slate-800 py-16 px-4">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-amber-400 font-bold tracking-[0.4em] text-sm uppercase mb-4">🎉 Bienvenue sur FESTICO</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4">
            FESTIVAL INTERNATIONAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
              FESTICO
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto font-medium">
            DES IMAGES COMIQUES
          </p>
          <div className="flex items-center justify-center gap-3 mt-6 text-slate-500 text-sm">
            <span>📅 23–27 Juin 2026</span>
            <span>•</span>
            <span>📍 Yaoundé, Cameroun</span>
            <span>•</span>
            <span>14ème Édition</span>
          </div>
        </div>
      </div>

      {/* TAB BAR */}
      <div className="sticky top-0 z-40 bg-[#09090b]/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-none">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2.5 rounded-xl font-bold text-sm transition-all shrink-0 ${activeTab === tab.id
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300" key={activeTab}>
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
}
