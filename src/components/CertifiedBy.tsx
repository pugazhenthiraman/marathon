"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const certs = [
  { name: "AIMS", full: "Association of International Marathons", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg> },
  { name: "World Athletics", full: "Certified Course Measurement", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.733-3.559" /></svg> },
  { name: "AFI", full: "Athletics Federation of India", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" /></svg> },
];

export default function CertifiedBy() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="relative border-y border-white/5 bg-accent/95 py-12 sm:py-16 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className={`text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8 sm:mb-10 ${visible ? "anim-fade-up" : "opacity-0"}`}>
          Certified &amp; Recognized By
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className={`group flex items-center gap-4 rounded-2xl bg-white/5 px-6 py-4 sm:px-8 sm:py-5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-0.5 ${visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10 group-hover:border-primary/25 group-hover:scale-105 transition-all duration-300">
                {c.icon}
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white">{c.name}</p>
                <p className="text-[10px] sm:text-xs text-white/40 leading-tight">{c.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
