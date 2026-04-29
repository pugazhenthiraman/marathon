"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, visible } = useScrollReveal(0.3);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const dur = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target]);

  return <span ref={ref} className="tabular-nums">{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { target: 1, suffix: "st", label: "Edition", sub: "Inaugural 2026", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg> },
  { target: 3, suffix: "", label: "Categories", sub: "5K / 10K / Half", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg> },
  { target: 500, suffix: "", label: "Entry Fee", sub: "All categories", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { target: 21, suffix: ".1km", label: "Longest Race", sub: "Half Marathon", icon: <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg> },
];

export default function About() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 relative overflow-hidden bg-accent">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-full blur-3xl" />

      <div ref={ref} className="mx-auto max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div>
            <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-left" : "opacity-0"}`}>About the Event</span>
            <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] ${visible ? "anim-fade-left delay-1" : "opacity-0"}`}>
              The Midnight
              <span className="text-primary block mt-1"> Run</span>
            </h2>
            <div className={`mt-4 section-line ${visible ? "" : "opacity-0"}`} />
            <p className={`mt-6 text-sm sm:text-base text-white/50 leading-relaxed ${visible ? "anim-fade-left delay-2" : "opacity-0"}`}>
              The Hosur Midnight Marathon is a brand new night running experience. Organised by
              Elitzur Academy of Sports and co-organised by Rotary Club of Hosur Legends, this inaugural
              edition brings together runners to celebrate fitness, community, and the spirit of endurance.
            </p>
            <p className={`mt-4 text-sm sm:text-base text-white/50 leading-relaxed ${visible ? "anim-fade-left delay-3" : "opacity-0"}`}>
              The course winds through Hosur&apos;s quietest roads and scenic reservoirs under the stars — a route
              designed for the stillness of night and the rhythm of your stride.
            </p>

            {/* CTA */}
            <div className={`mt-8 ${visible ? "anim-fade-left delay-4" : "opacity-0"}`}>
              <a href="#categories" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold text-white uppercase tracking-wider transition-all hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20">
                Explore Races
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 p-5 sm:p-7 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-1 ${visible ? "anim-scale-up" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/[0.06] to-transparent rounded-bl-full transition-all group-hover:from-primary/[0.1]" />

                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">{s.icon}</div>
                <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-none">
                  <Counter target={s.target} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold text-white/80">{s.label}</p>
                <p className="mt-0.5 text-[10px] text-white/30">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
