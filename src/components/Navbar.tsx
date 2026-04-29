"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

const raceItems = [
  { href: "/race-categories/half-marathon", label: "Half Marathon" },
  { href: "/race-categories/10k-run", label: "10K Run" },
  { href: "/race-categories/5k-run", label: "5K Run" },
];

const runnersItems = [
  { href: "/race-weekend", label: "Race Weekend" },
  { href: "/results", label: "Results" },
  { href: "/prize-money", label: "Prize Money" },
  { href: "/faqs", label: "FAQs" },
];

const experienceItems = [
  { href: "/about", label: "About Us" },
  { href: "/cheers", label: "Cheer Zones" },
  { href: "/contact", label: "Contact" },
];

const charityItems = [
  { href: "/philanthropy", label: "Philanthropy" },
];

type DropdownKey = "race" | "runners" | "experience" | "charity" | null;

const menus: { key: DropdownKey; label: string; items: { href: string; label: string }[] }[] = [
  { key: "race", label: "Race", items: raceItems },
  { key: "runners", label: "Runners", items: runnersItems },
  { key: "experience", label: "Experience", items: experienceItems },
  { key: "charity", label: "Charity", items: charityItems },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const toggleDropdown = useCallback((key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const isHome = pathname === "/";

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 flex items-center transition-all duration-300 ${
          scrolled || !isHome
            ? "h-[70px] bg-black/40 backdrop-blur-xl border-b border-white/[0.18] shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            : "h-[90px] bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-5 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">HOSUR MIDNIGHT</span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-primary uppercase">Marathon 2026</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Primary">
            {menus.map(({ key, label, items }) => (
              <div key={key} className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                  className={`flex items-center gap-1 rounded-full px-4 py-2.5 text-sm font-extrabold text-white/90 hover:bg-white/10 hover:text-white transition-colors ${
                    openDropdown === key ? "bg-white/10" : ""
                  }`}
                  type="button"
                  onClick={() => toggleDropdown(key)}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === key}
                >
                  {label}
                  <span className={`text-[10px] transition-transform ${openDropdown === key ? "rotate-180" : ""}`} aria-hidden="true">▾</span>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-black/[0.08] shadow-xl overflow-hidden transition-all duration-200 ${
                    openDropdown === key ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
                  }`}
                  role="menu"
                  aria-label={label}
                >
                  <div className="p-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3.5 py-3 rounded-xl text-sm font-extrabold transition-colors ${
                          pathname === item.href ? "text-primary bg-primary/5" : "text-slate-900 hover:bg-slate-50"
                        }`}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/volunteers"
              className={`rounded-full px-4 py-2.5 text-sm font-extrabold transition-colors ${
                pathname === "/volunteers" ? "text-primary" : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              Volunteers
            </Link>

            <Link
              href="/register"
              className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-extrabold text-white hover:opacity-95 transition-opacity"
            >
              Register
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-white/90 hover:bg-white/10"
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <span className="text-[28px] leading-none font-light">☰</span>
          </button>
        </div>
      </header>

      {/* Spacer for non-home pages where header is fixed */}
      {!isHome && <div className="h-[70px]" />}

      {/* Mobile drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            onClick={closeDrawer}
            aria-hidden="true"
          />
          <aside
            className="fixed top-0 right-0 h-full w-[min(86vw,380px)] z-[61] bg-gradient-to-b from-white to-slate-50 shadow-2xl flex flex-col animate-[slideInRight_0.3s_ease]"
            aria-label="Mobile menu"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b-2 border-slate-200 bg-gradient-to-r from-accent to-accent/90 text-white">
              <span className="font-black text-lg">Menu</span>
              <button
                className="bg-white/20 hover:bg-white/30 rounded-xl px-3 py-2 text-xl leading-none transition-colors"
                type="button"
                aria-label="Close menu"
                onClick={closeDrawer}
              >
                ✕
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-3 py-4">
              {menus.map(({ key, label, items }) => (
                <details key={key} className="rounded-xl overflow-hidden mb-1">
                  <summary className="flex items-center justify-between px-4 py-3.5 rounded-xl font-extrabold text-slate-900 cursor-pointer select-none hover:bg-slate-100 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {label}
                    <span className="text-sm opacity-70" aria-hidden="true">▾</span>
                  </summary>
                  <div className="px-1.5 pb-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-3.5 py-3 rounded-xl text-sm font-bold transition-colors ${
                          pathname === item.href ? "text-primary bg-primary/5" : "text-slate-500 hover:bg-slate-100 hover:text-accent"
                        }`}
                        onClick={closeDrawer}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}

              </div>

            {/* Drawer footer */}
            <div className="px-4 py-5 border-t border-slate-200">
              <Link
                href="/register"
                className="block w-full text-center rounded-full bg-primary py-3.5 text-sm font-extrabold text-white"
                onClick={closeDrawer}
              >
                Register
              </Link>
            </div>
          </aside>
        </>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
