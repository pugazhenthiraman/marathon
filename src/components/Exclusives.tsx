"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const categories = [
  { key: "5k", label: "5K Run", fee: "₹500" },
  { key: "10k", label: "10K Run", fee: "₹500" },
  { key: "half", label: "Half Marathon", fee: "₹500" },
];

const perks: Record<string, { title: string; icon: string; included: string[] }[]> = {
  "5k": [
    { title: "Goodie Bag", icon: "🎒", included: ["5k", "10k", "half"] },
    { title: "Finisher's Medal", icon: "🏅", included: ["5k", "10k", "half"] },
    { title: "Medical Support", icon: "🏥", included: ["5k", "10k", "half"] },
    { title: "Refreshments", icon: "🥤", included: ["5k", "10k", "half"] },
    { title: "Hydration Stations", icon: "💧", included: ["5k", "10k", "half"] },
  ],
  "10k": [
    { title: "Goodie Bag", icon: "🎒", included: ["5k", "10k", "half"] },
    { title: "Finisher's Medal", icon: "🏅", included: ["5k", "10k", "half"] },
    { title: "Timing Certificate", icon: "📜", included: ["10k", "half"] },
    { title: "RFID Chip Timing", icon: "⏱️", included: ["10k", "half"] },
    { title: "Medical Support", icon: "🏥", included: ["5k", "10k", "half"] },
    { title: "Refreshments", icon: "🥤", included: ["5k", "10k", "half"] },
    { title: "Hydration Stations", icon: "💧", included: ["5k", "10k", "half"] },
    { title: "Race Day T-Shirt", icon: "👕", included: ["10k", "half"] },
  ],
  "half": [
    { title: "Goodie Bag", icon: "🎒", included: ["5k", "10k", "half"] },
    { title: "Finisher's Medal", icon: "🏅", included: ["5k", "10k", "half"] },
    { title: "Timing Certificate", icon: "📜", included: ["10k", "half"] },
    { title: "RFID Chip Timing", icon: "⏱️", included: ["10k", "half"] },
    { title: "Medical Support", icon: "🏥", included: ["5k", "10k", "half"] },
    { title: "Refreshments", icon: "🥤", included: ["5k", "10k", "half"] },
    { title: "Hydration Stations", icon: "💧", included: ["5k", "10k", "half"] },
    { title: "Race Day T-Shirt", icon: "👕", included: ["10k", "half"] },
  ],
};

export default function Exclusives() {
  const { ref, visible } = useScrollReveal(0.05);
  const [activeTab, setActiveTab] = useState("half");

  const activeCat = categories.find((c) => c.key === activeTab)!;
  const activePerks = perks[activeTab];

  return (
    <section id="exclusives" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-accent relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>What You Get</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Race Kit</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
          <p className={`mt-4 text-white/40 text-sm sm:text-base ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            Every runner gets a premium race experience. Here&apos;s what&apos;s included with your registration.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`mt-12 flex justify-center gap-2 sm:gap-3 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.key
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fee badge */}
        <div className={`mt-8 text-center ${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
          <span className="text-white/30 text-sm">Entry Fee: </span>
          <span className="text-2xl sm:text-3xl font-black text-white">{activeCat.fee}</span>
        </div>

        {/* Perk grid */}
        <div className={`mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
          {activePerks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-primary/20"
            >
              <div className="text-3xl sm:text-4xl mb-3">{perk.icon}</div>
              <p className="text-sm font-bold text-white">{perk.title}</p>
            </div>
          ))}
        </div>

        {/* Included with every registration */}
        <div className={`mt-10 text-center ${visible ? "anim-fade-up delay-5" : "opacity-0"}`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Included with every {activeCat.label} registration</p>
        </div>
      </div>
    </section>
  );
}
