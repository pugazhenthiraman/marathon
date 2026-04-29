"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Sponsors() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="sponsors" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="mx-auto max-w-4xl relative">
        <div className="text-center">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>Partners</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Sponsors &amp; Partners</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
        </div>

        <div className={`mt-14 sm:mt-20 rounded-3xl bg-white/5 border border-white/10 p-10 sm:p-14 text-center ${visible ? "anim-scale-up delay-2" : "opacity-0"}`}>
          <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">Sponsorship Opportunities</h3>
          <p className="mt-3 text-sm sm:text-base text-white/40 max-w-lg mx-auto">
            We&apos;re looking for partners to make the inaugural Hosur Midnight Marathon a landmark event. Sponsor packages will be announced soon.
          </p>
          <p className="mt-6 text-xs text-white/25">Interested? Reach out at info@hosurmidnightmarathon.com</p>
        </div>
      </div>
    </section>
  );
}
