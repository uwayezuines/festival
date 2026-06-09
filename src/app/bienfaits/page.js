import { BIENFAITS } from '@/data/festicoData';

const NODE_COLORS = [
    { hex: '#ED5B31', tailwind: 'text-[#ED5B31]', border: 'border-[#ED5B31]', bg: 'bg-[#ED5B31]' }, // Orange (Subjective)
    { hex: '#3B9B9C', tailwind: 'text-[#3B9B9C]', border: 'border-[#3B9B9C]', bg: 'bg-[#3B9B9C]' }, // Teal (Objective)
    { hex: '#F2A332', tailwind: 'text-[#F2A332]', border: 'border-[#F2A332]', bg: 'bg-[#F2A332]' }, // Yellow (Assessment)
    { hex: '#2D7CB4', tailwind: 'text-[#2D7CB4]', border: 'border-[#2D7CB4]', bg: 'bg-[#2D7CB4]' }, // Blue (Plan)
    { hex: '#E04A5C', tailwind: 'text-[#E04A5C]', border: 'border-[#E04A5C]', bg: 'bg-[#E04A5C]' }, // Pink
    { hex: '#774C9A', tailwind: 'text-[#774C9A]', border: 'border-[#774C9A]', bg: 'bg-[#774C9A]' }, // Purple
    { hex: '#A1B127', tailwind: 'text-[#A1B127]', border: 'border-[#A1B127]', bg: 'bg-[#A1B127]' }, // Lime
];

export default function BienfaitsPage() {
    return (
        <div className="min-h-screen bg-[#fcfcfc] text-slate-800 py-20 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* HEADER */}
                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-wide mb-4">
                        Les Bienfaits du <span className="text-[#ED5B31]">Rire</span>
                    </h1>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto">
                        Une thérapie par le rire prouvée par la science pour améliorer divers aspects de votre santé physique et mentale.
                    </p>
                </div>

                {/* INFOGRAPHIC LAYOUT */}
                <div className="relative">
                    {/* Central Connecting Line (Vertical Timeline Style for all 7 items) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-slate-200 rounded-full hidden md:block"></div>

                    <div className="flex flex-col gap-12 md:gap-0">
                        {BIENFAITS.map((b, i) => {
                            const c = NODE_COLORS[i % NODE_COLORS.length];
                            const isEven = i % 2 === 0;

                            return (
                                <div key={i} className={`relative flex flex-col md:flex-row items-center w-full md:h-48 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>

                                    {/* Central Node Graphic */}
                                    <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 hidden md:flex items-center justify-center">
                                        <div className={`w-28 h-12 rounded-full border-4 ${c.border} flex items-center justify-center bg-white`}>
                                            <span className={`text-xl font-black ${c.tailwind}`}>{i + 1}</span>
                                        </div>
                                    </div>

                                    {/* Desktop Connecting horizontal line */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-1.5 ${c.bg} z-0 ${isEven ? 'left-1/2 right-[20%]' : 'right-1/2 left-[20%]'}`}></div>

                                    {/* Content Block */}
                                    <div className={`w-full md:w-[45%] flex items-center gap-6 p-6 md:p-0 ${isEven ? 'md:pr-12 justify-end text-right flex-row-reverse md:flex-row' : 'md:pl-12 justify-start'}`}>

                                        {/* Text Container */}
                                        <div className="flex-1">
                                            <h3 className={`text-xl md:text-2xl font-black mb-2 ${c.tailwind}`}>
                                                {b.titre}
                                            </h3>
                                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                                {b.description}
                                            </p>
                                        </div>

                                        {/* Icon */}
                                        <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${c.border} flex items-center justify-center bg-white shadow-sm`}>
                                            <span className="text-3xl md:text-4xl">{b.icon}</span>
                                        </div>

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
