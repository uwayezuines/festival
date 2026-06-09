'use client';

import { useState, useEffect } from 'react';
import { YOUTUBE_EMBED_URL, CAROUSEL_PHOTOS } from '@/data/festicoData';
import Link from 'next/link';

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide for the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_PHOTOS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_PHOTOS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_PHOTOS.length) % CAROUSEL_PHOTOS.length);

  return (
    <div className="min-h-screen bg-[#09090b]">
      {/* HERO HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#09090b] via-[#0f0f13] to-[#09090b] pt-16 pb-24 px-4 border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-amber-400 font-bold tracking-[0.4em] text-sm uppercase mb-4 animate-pulse">🎉 BIENVENUE SUR FESTICO</p>
          <div className="flex justify-center items-center mb-6">
            <img src="/logo.png" alt="FESTICO Logo Grand" className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase">
            Festival International<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400">
              Des Images Comiques
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-8 text-slate-500 text-sm font-medium">
            <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">📅 23–27 Juin 2026</span>
            <span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">📍 Yaoundé, Cameroun</span>
            <span className="bg-amber-400/10 text-amber-400 border border-amber-400/20 px-3 py-1 rounded-full">14ème Édition</span>
          </div>

          <div className="mt-12">
            <Link href="/accueil" className="inline-block bg-amber-400 hover:bg-amber-300 text-black font-black text-lg py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1">
              Entrer dans le Festival
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* HYMNE */}
        <div className="bg-[#18181b] border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">🎵 Hymne officiel du FESTICO</h2>
            <p className="text-slate-400 text-lg">
              Découvrez l'hymne officiel de la bonne humeur et du rire qui rassemble les cultures !
            </p>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-slate-700">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Hymne officiel FESTICO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* TROMBINOSCOPE */}
        <div className="bg-gradient-to-br from-[#18181b] to-black border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-black text-white mb-10">📸 Trombinoscope en Images</h2>

          <div className="relative max-w-5xl mx-auto group">
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl border border-slate-700 bg-black relative shadow-2xl">
              {CAROUSEL_PHOTOS.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`FESTICO moment ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
            </div>

            {/* NavButtons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-400 text-white hover:text-black p-4 rounded-full backdrop-blur-sm transition-all shadow-lg opacity-0 group-hover:opacity-100"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-400 text-white hover:text-black p-4 rounded-full backdrop-blur-sm transition-all shadow-lg opacity-0 group-hover:opacity-100"
            >
              →
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2 flex-wrap px-4">
              {CAROUSEL_PHOTOS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-amber-400 w-8' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                  aria-label={`Aller à la photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
