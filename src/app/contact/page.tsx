import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch with the organising team" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-black text-white">Reach Out</h2>
            <div className="mt-2 section-line" />
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Email</p>
                <p className="mt-1 text-sm text-white/50">info@hosurmidnightmarathon.com</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Phone</p>
                <p className="mt-1 text-sm text-white/50">+91 40 1234 5678</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Address</p>
                <p className="mt-1 text-sm text-white/50">Hosur Midnight Marathon<br />Hosur, Tamil Nadu<br />635109, India</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Social</p>
                <div className="mt-2 flex gap-3">
                  {["Facebook", "Twitter", "Instagram", "YouTube"].map((s) => (
                    <span key={s} className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs font-medium text-white/40 hover:text-primary hover:border-primary/20 transition cursor-pointer">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10">
            <h3 className="text-lg font-bold text-white">Send a Message</h3>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition" />
              <input type="email" placeholder="Your Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition" />
              <input type="text" placeholder="Subject" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition" />
              <textarea placeholder="Your Message" rows={4} className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition resize-none" />
              <button type="submit" className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-primary-dark transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
