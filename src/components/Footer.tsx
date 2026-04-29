import Link from "next/link";

const cols = [
  { title: "Event", links: [
    { label: "About Us", href: "/about" },
    { label: "Race Weekend", href: "/race-weekend" },
    { label: "Prize Money", href: "/prize-money" },
    { label: "Results", href: "/results" },
    { label: "Volunteers", href: "/volunteers" },
    { label: "Cheer Zones", href: "/cheers" },
  ]},
  { title: "Categories", links: [
    { label: "Half Marathon", href: "/race-categories/half-marathon" },
    { label: "10KM Run", href: "/race-categories/10k-run" },
    { label: "5KM Run", href: "/race-categories/5k-run" },
  ]},
  { title: "Policies", links: [
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "Data Protection", href: "/data-protection-policy" },
    { label: "Entry Denial & Refund", href: "/entry-denial-and-refund" },
    { label: "Waiver & Disclaimer", href: "/waiver-disclaimer" },
    { label: "Medical Advisory", href: "/medical-advisory" },
  ]},
];

const socials = [
  { label: "Facebook", icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
  { label: "Twitter", icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
  { label: "Instagram", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
  { label: "YouTube", icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></> },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      {/* Supported by bar */}
      <div className="border-b border-white/5 py-10 sm:py-12 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white/25 mb-6">Supported By</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {["Govt. of Tamil Nadu", "Hosur Municipality", "Elitzur Academy of Sports", "Rotary Club of Hosur Legends"].map((s) => (
              <span key={s} className="rounded-full bg-white/[0.04] border border-white/[0.06] px-5 sm:px-6 py-2.5 text-[11px] sm:text-xs font-medium text-white/30 transition-all hover:text-white/50 hover:border-white/10 hover:bg-white/[0.06]">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl grid gap-12 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-black tracking-tight">HOSUR MIDNIGHT<span className="text-primary"> MARATHON</span></span>
            </Link>
            <p className="mt-3 text-sm text-white/25 leading-relaxed max-w-xs">
              Organised by Elitzur Academy of Sports. Co-organised by Rotary Club of Hosur Legends. Run the Night, Light the Future.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/25 hover:text-primary transition-colors duration-300">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/15">
          <p>&copy; {new Date().getFullYear()} Hosur Midnight Marathon. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/entry-denial-and-refund" className="hover:text-white/30 transition-colors">Terms</Link>
            <Link href="/data-protection-policy" className="hover:text-white/30 transition-colors">Privacy</Link>
            <Link href="/entry-denial-and-refund" className="hover:text-white/30 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
