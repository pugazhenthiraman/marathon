"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const landmarks = [
  { name: "Hosur Lake", km: "KM 3" },
  { name: "SIPCOT Gate", km: "KM 8" },
  { name: "Chandrapura Dam", km: "KM 14" },
  { name: "Athletic Stadium", km: "Finish" },
];

export default function PromoBanner() {
  const { ref, visible } = useScrollReveal(0.1);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (window.innerHeight / 2 - center) * 0.15;
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.1)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-32 sm:py-40 lg:py-52 px-5 sm:px-8 overflow-hidden">
      <div ref={bgRef} className="absolute inset-[-40px] bg-[url('https://images.unsplash.com/photo-1502224562085-639556652f33?w=1920&q=80')] bg-cover bg-center will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent/75" />
      <div className="absolute inset-0 overlay-pattern" />

      {/* Decorative track lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[calc(50%-40px)] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[calc(50%+40px)] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10">
        <div ref={ref} className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className={`inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>The Journey Begins</span>
            <h2 className={`mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.9] ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>
              Journey to
              <span className="text-primary block mt-1 sm:mt-2"> Triumph</span>
            </h2>
            <p className={`mt-4 sm:mt-6 text-sm sm:text-lg text-white/35 max-w-xl mx-auto font-light ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
              From the serene Hosur Lake to the Kelevarapalli Reservoir — run through Hosur&apos;s most scenic routes under the midnight sky.
            </p>
          </div>

          {/* Route landmarks — horizontal timeline */}
          <div className={`mt-14 sm:mt-20 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden sm:block" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {landmarks.map((l, i) => (
                  <div key={l.name} className="text-center group" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                    {/* Dot */}
                    <div className="w-12 h-12 mx-auto rounded-full glass border border-white/10 flex items-center justify-center mb-3 group-hover:border-primary/30 transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">{l.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary/70 mt-0.5">{l.km}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`mt-12 sm:mt-16 text-center ${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
            <a href="#categories" className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wider transition-all hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5">
              View Full Route Map
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
