"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

export default function Newsletter() {
  const { ref, visible } = useScrollReveal(0.1);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <section id="newsletter" className="relative py-24 sm:py-32 lg:py-40 px-5 sm:px-8 overflow-hidden">
      <div className="parallax-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1920&q=80')]" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary/95 to-accent" />
      <div className="absolute inset-0 overlay-pattern" />

      {/* Decorative lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-left" : "opacity-0"}`}>Stay Connected</span>
            <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight ${visible ? "anim-fade-left delay-1" : "opacity-0"}`}>
              Don&apos;t Miss<br />
              <span className="text-primary">The Starting Line</span>
            </h2>
            <p className={`mt-4 text-sm sm:text-base text-white/40 leading-relaxed max-w-md ${visible ? "anim-fade-left delay-2" : "opacity-0"}`}>
              Get early registration access, training tips, route updates, and exclusive offers delivered straight to your inbox.
            </p>

            {/* Stats row */}
            <div className={`mt-8 flex gap-8 ${visible ? "anim-fade-left delay-3" : "opacity-0"}`}>
              {[{ val: "28K+", label: "Subscribers" }, { val: "Weekly", label: "Updates" }, { val: "Free", label: "Forever" }].map((s) => (
                <div key={s.label}>
                  <p className="text-lg sm:text-xl font-black text-white">{s.val}</p>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className={`${visible ? "anim-fade-right delay-2" : "opacity-0"}`}>
            {done ? (
              <div className="glass rounded-3xl p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="text-white font-bold text-xl">You&apos;re In!</p>
                <p className="mt-2 text-white/40 text-sm">We&apos;ll keep you posted on everything marathon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8">
                <p className="text-sm font-bold text-white/60 mb-5">Join our newsletter</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-white/5 rounded-xl px-5 py-4 text-sm text-white placeholder-white/25 outline-none border border-white/10 focus:border-primary/50 transition-colors"
                  />
                  <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-sm font-bold text-white uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0">
                    Subscribe Now
                  </button>
                </div>
                <p className="mt-4 text-[10px] text-white/20 text-center">No spam, ever. Unsubscribe anytime.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
