"use client";

import Link from "next/link";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  {
    title: "Half Marathon",
    distance: "21.1 KM",
    slug: "half-marathon",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    time: "12:00 AM",
    fee: "₹500",
    color: "from-blue-600 to-cyan-500",
    tagline: "The sweet spot",
  },
  {
    title: "10K Run",
    distance: "10 KM",
    slug: "10k-run",
    img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    time: "12:30 AM",
    fee: "₹500",
    color: "from-emerald-600 to-teal-500",
    tagline: "Race the clock",
  },
  {
    title: "5K Run",
    distance: "5 KM",
    slug: "5k-run",
    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
    time: "1:00 AM",
    fee: "₹500",
    color: "from-purple-600 to-pink-500",
    tagline: "First steps, first finish line",
  },
];

export default function RaceCategories() {
  const { ref, visible } = useScrollReveal(0.05);
  const [activeIdx, setActiveIdx] = useState(0);

  const active = categories[activeIdx];
  const others = categories.filter((_, i) => i !== activeIdx);

  return (
    <section id="categories" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-accent/95 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-full blur-3xl" />

      <div ref={ref} className="mx-auto max-w-7xl relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-xl">
            <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>Choose Your Challenge</span>
            <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Race Categories</h2>
            <div className={`mt-4 section-line ${visible ? "" : "opacity-0"}`} />
            <p className={`mt-4 text-white/40 text-sm sm:text-base leading-relaxed ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
              Three distances, one incredible course. Find the race that matches your ambition.
            </p>
          </div>
          <Link href="/race-categories/half-marathon" className={`text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-2 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>

        <div className={`grid gap-5 lg:grid-cols-[1fr_1fr] ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
          {/* Featured card — left */}
          <div
            className="group relative rounded-3xl overflow-hidden cursor-pointer block"
          >
            <div className="relative h-80 sm:h-[420px] lg:h-full lg:min-h-[480px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${active.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
            </div>
            <div className={`absolute top-5 left-5 rounded-full bg-gradient-to-r ${active.color} px-4 py-1.5 shadow-lg`}>
              <span className="text-xs font-black text-white tracking-wide">{active.distance}</span>
            </div>
            <div className="absolute top-5 right-5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 border border-white/10">
              <span className="text-[10px] font-bold text-white/80">{active.fee}</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">{active.distance} of midnight roads</p>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{active.title}</h3>
              <div className="mt-2 flex items-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Flag off: {active.time}
                </span>
              </div>
              <Link
                href={`/race-categories/${active.slug}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-5 py-2.5 border border-white/10 hover:bg-white/20 transition-all"
              >
                <span className="text-xs font-bold text-white uppercase tracking-wider">View Details</span>
                <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
            </div>
          </div>

          {/* Right — 2 smaller cards */}
          <div className="grid gap-5">
            {others.map((c) => (
              <div
                key={c.slug}
                onClick={() => setActiveIdx(categories.findIndex((cat) => cat.slug === c.slug))}
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col sm:flex-row transition-all duration-300 hover:ring-1 hover:ring-primary/30"
              >
                <div className="relative w-full sm:w-48 lg:w-56 h-44 sm:h-auto shrink-0 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${c.img})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-black/20" />
                  <div className={`absolute top-3 left-3 sm:bottom-3 sm:top-auto rounded-full bg-gradient-to-r ${c.color} px-3 py-1 shadow-lg`}>
                    <span className="text-[10px] font-black text-white">{c.distance}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white/5 group-hover:bg-white/10 transition-colors p-5 sm:p-6 flex flex-col justify-center border border-white/10 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-1">{c.tagline}</p>
                  <h3 className="text-lg sm:text-xl font-black text-white">{c.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {c.time}
                    </span>
                    <span className="font-semibold text-white">{c.fee}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-primary opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                    <span className="text-[11px] font-bold uppercase tracking-wider">View Details</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
