"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1920&q=80",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80",
  "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1920&q=80",
];

const RACE_DATE = new Date("2026-06-16T06:00:00").getTime();

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, RACE_DATE - Date.now());
      setT({ d: Math.floor(diff / 864e5), h: Math.floor((diff % 864e5) / 36e5), m: Math.floor((diff % 36e5) / 6e4), s: Math.floor((diff % 6e4) / 1e3) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Hero() {
  const [cur, setCur] = useState(0);
  const cd = useCountdown();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCur((p) => (p + 1) % slides.length), []);
  useEffect(() => { const id = setInterval(next, 6000); return () => clearInterval(id); }, [next]);

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      const scrollY = window.scrollY;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        contentRef.current.style.opacity = `${Math.max(1 - scrollY * 0.003, 0)}`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100vh] min-h-[700px] overflow-hidden bg-accent">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-[-20px] bg-cover bg-center transition-opacity duration-[2s] scale-105 ${i === cur ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 inset-x-0 h-[70%] bg-gradient-to-t from-accent via-accent/90 to-transparent" />
      </div>

      <div ref={contentRef} className="absolute inset-0 z-[7] flex flex-col items-center justify-center text-center px-5 sm:px-8 will-change-transform">
        <div className="anim-fade-up">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary">
            1st Edition • June 16, 2026
          </span>
        </div>

        <h1 className="anim-fade-up delay-2 mt-5 sm:mt-8 text-[2.5rem] sm:text-6xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter">
          HOSUR MIDNIGHT
          <span className="block text-primary mt-1 sm:mt-2">MARATHON</span>
        </h1>

        <p className="anim-fade-up delay-3 mt-4 sm:mt-6 text-sm sm:text-lg text-white/50 max-w-md font-light leading-relaxed">
          Run the Night, Light the Future. June 16, Hosur.
        </p>

        <div className="anim-fade-up delay-4 mt-8 sm:mt-12 flex gap-2 sm:gap-4">
          {([["d", "Days"], ["h", "Hrs"], ["m", "Min"], ["s", "Sec"]] as const).map(([k, label]) => (
            <div key={k} className="rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-5 min-w-[56px] sm:min-w-[85px] text-center bg-white/5 border border-white/10">
              <span className="block text-xl sm:text-4xl font-black text-white tabular-nums leading-none">
                {String(cd[k]).padStart(2, "0")}
              </span>
              <span className="block text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-1.5">{label}</span>
            </div>
          ))}
        </div>

        <div className="anim-fade-up delay-5 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/register" className="rounded-xl bg-primary px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-bold text-white uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
            Register Now
          </Link>
          <a href="#categories" className="rounded-xl px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-bold text-white/70 uppercase tracking-wider border border-white/10 transition-all hover:bg-white/5 hover:-translate-y-0.5">
            Explore Races ↓
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 anim-fade-up delay-7">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>

      <div className="absolute bottom-8 right-5 sm:right-10 z-[5] flex flex-col gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${i === cur ? "w-2 h-8 bg-primary" : "w-2 h-3 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-[6]" />
    </section>
  );
}
