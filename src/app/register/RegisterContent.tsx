"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { raceCategories } from "@/data/categories";

const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

if (!RAZORPAY_KEY) {
  console.error("NEXT_PUBLIC_RAZORPAY_KEY_ID is not set. Payment will not work.");
}

const AGE_CATEGORIES = ["Below 18", "18 – 35", "36 – 50", "50+"];

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function RegisterContent() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("category") || raceCategories[0].slug;
  const [selectedSlug, setSelectedSlug] = useState(preselected);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", whatsapp: "", dob: "",
    gender: "", ageCategory: "", city: "", bloodGroup: "",
    emergencyName: "", emergencyPhone: "", tshirtSize: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const selected = raceCategories.find((c) => c.slug === selectedSlug) || raceCategories[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isValid = form.name && form.email && form.phone && form.dob && form.gender && form.ageCategory;

  const handlePayment = () => {
    if (!isValid) return;
    setSubmitting(true);

    const options = {
      key: RAZORPAY_KEY,
      amount: selected.feeAmount * 100,
      currency: "INR",
      name: "Hosur Midnight Marathon",
      description: `${selected.title} — ${selected.distance}`,
      handler: () => {
        setDone(true);
        setSubmitting(false);
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: { color: "#dc2626" },
      modal: {
        ondismiss: () => setSubmitting(false),
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const inputClass = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition";
  const selectClass = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition";

  return (
    <>
      <PageHeader title="Register" subtitle="Secure your spot at the starting line" />

      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-5xl">
          {done ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h2 className="text-3xl font-black text-white">You&apos;re Registered!</h2>
              <p className="mt-3 text-white/50 max-w-md mx-auto">
                Confirmation details and WhatsApp community link have been sent to {form.email}.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1fr_380px] gap-8">
              <div>
                {/* Category selection */}
                <div>
                  <h2 className="text-lg font-bold text-white mb-4">Select Category</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {raceCategories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => setSelectedSlug(cat.slug)}
                        className={`rounded-xl p-4 text-left transition-all duration-300 border ${
                          selectedSlug === cat.slug
                            ? "bg-primary/10 border-primary/40 ring-1 ring-primary/30"
                            : "bg-white/5 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        <p className={`text-xs font-bold uppercase tracking-wider ${selectedSlug === cat.slug ? "text-primary" : "text-white/30"}`}>{cat.distance}</p>
                        <p className="mt-1 text-sm font-bold text-white">{cat.title}</p>
                        <p className="mt-1 text-xs text-white/40">{cat.fee} • {cat.startTime}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal details */}
                <div className="mt-10">
                  <h2 className="text-lg font-bold text-white mb-4">Personal Details</h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required className={inputClass} />
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputClass} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Mobile Number *" required className={inputClass} />
                      <input name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className={inputClass} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="dob" type="date" value={form.dob} onChange={handleChange} required className={inputClass} />
                      <select name="gender" value={form.gender} onChange={handleChange} required className={selectClass}>
                        <option value="" className="bg-accent">Gender *</option>
                        <option value="male" className="bg-accent">Male</option>
                        <option value="female" className="bg-accent">Female</option>
                        <option value="other" className="bg-accent">Other</option>
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <select name="ageCategory" value={form.ageCategory} onChange={handleChange} required className={selectClass}>
                        <option value="" className="bg-accent">Age Category *</option>
                        {AGE_CATEGORIES.map((ac) => (
                          <option key={ac} value={ac} className="bg-accent">{ac}</option>
                        ))}
                      </select>
                      <input name="city" value={form.city} onChange={handleChange} placeholder="City" className={inputClass} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className={selectClass}>
                        <option value="" className="bg-accent">Blood Group</option>
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                          <option key={bg} value={bg} className="bg-accent">{bg}</option>
                        ))}
                      </select>
                      <select name="tshirtSize" value={form.tshirtSize} onChange={handleChange} className={selectClass}>
                        <option value="" className="bg-accent">T-Shirt Size</option>
                        {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                          <option key={s} value={s} className="bg-accent">{s}</option>
                        ))}
                      </select>
                    </div>

                    <h2 className="text-lg font-bold text-white pt-4">Emergency Contact</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="emergencyName" value={form.emergencyName} onChange={handleChange} placeholder="Emergency Contact Name" className={inputClass} />
                      <input name="emergencyPhone" type="tel" value={form.emergencyPhone} onChange={handleChange} placeholder="Emergency Contact Number" className={inputClass} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Order summary */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4">Order Summary</h3>
                  <div className="flex items-center gap-4 rounded-xl bg-white/5 p-4 border border-white/10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selected.color} flex items-center justify-center shrink-0`}>
                      <span className="text-[10px] font-black text-white">{selected.distance}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{selected.title}</p>
                      <p className="text-xs text-white/40">Flag off: {selected.startTime}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between text-white/50">
                      <span>Registration fee</span>
                      <span className="text-white">{selected.fee}</span>
                    </div>
                    <div className="border-t border-white/10 pt-3 flex justify-between">
                      <span className="font-bold text-white">Total</span>
                      <span className="text-xl font-black text-primary">{selected.fee}</span>
                    </div>
                  </div>
                  <button
                    onClick={handlePayment}
                    disabled={!isValid || submitting}
                    className={`mt-6 w-full rounded-xl py-4 text-sm font-bold uppercase tracking-wider transition-all ${
                      isValid && !submitting
                        ? "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                        : "bg-white/10 text-white/30 cursor-not-allowed"
                    }`}
                  >
                    {submitting ? "Processing..." : `Pay ${selected.fee}`}
                  </button>
                  <p className="mt-3 text-[10px] text-white/20 text-center">Secured by Razorpay. 100% safe payment.</p>
                </div>

                <div className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Included</h3>
                  <div className="space-y-2">
                    {selected.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-xs text-white/60">
                        <span className="text-primary">✓</span>
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
    </>
  );
}
