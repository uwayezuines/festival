'use client';

import { useState, useEffect } from 'react';
import { YOUTUBE_EMBED_URL, CAROUSEL_PHOTOS } from '@/data/festicoData';

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#09090b] via-[#0f0f13] to-[#09090b] pt-12 pb-24 px-4 border-b border-slate-800">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-amber-400 font-bold tracking-[0.4em] text-sm uppercase mb-8">🎉 BIENVENU AU FESTICO</p>

          {/* LOGO GÉANT SANS RESTRICTION DE HAUTEUR */}
          <div className="flex justify-center items-center mb-12">
            <img
              src="/logo.png"
              alt="FESTICO Logo"
              className="w-full max-w-md md:max-w-xl h-auto object-contain drop-shadow-[0_0_60px_rgba(245,158,11,0.45)]"
            />
          </div>

          {/* TITRE DISCRET */}
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-tight mb-4 uppercase tracking-wider opacity-90">
            Festival International<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-lg sm:text-xl md:text-2xl font-extrabold tracking-normal">
              du Film , de l'Humour et de comedie de Yaounde
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* HYMNE */}
        <div className="bg-[#18181b] border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">🎵 Hymne officiel du FESTICO</h2>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Hymne officiel FESTICO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* CARROUSEL PHOTOS */}
        <div className="mt-20 bg-gradient-to-br from-[#18181b] to-black border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="relative max-w-5xl mx-auto group">
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl border border-slate-700 bg-black relative shadow-2xl">
              {CAROUSEL_PHOTOS.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`FESTICO moment ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                />
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-400 text-white hover:text-black p-4 rounded-full backdrop-blur-sm transition-all shadow-lg opacity-0 group-hover:opacity-100"
            >←</button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-amber-400 text-white hover:text-black p-4 rounded-full backdrop-blur-sm transition-all shadow-lg opacity-0 group-hover:opacity-100"
            >→</button>

            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2 flex-wrap px-4">
              {CAROUSEL_PHOTOS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide ? 'bg-amber-400 w-8' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                  aria-label={`Photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}