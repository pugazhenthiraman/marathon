import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="The story behind the Hosur Midnight Marathon" />

      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl">
          <blockquote className="text-xl sm:text-2xl font-light italic text-white/50 text-center border-l-4 border-primary pl-6">
            &ldquo;Run the Night, Light the Future&rdquo;
          </blockquote>

          <div className="mt-12 space-y-6 text-base sm:text-lg text-white/50 leading-relaxed">
            <p>
              The Hosur Midnight Marathon is a brand new night running experience launching in 2026. Organised by Elitzur Academy of Sports and co-organised by Rotary Club of Hosur Legends, this inaugural edition brings together runners of all levels to celebrate fitness, community, and the spirit of endurance.
            </p>
            <p>
              On June 16, 2026, the streets of Hosur come alive under the midnight sky. Whether you&apos;re a seasoned runner or taking your first steps, this marathon is for you.
            </p>
            <p>
              Three categories — Half Marathon (21.1 KM), 10K Run, and 5K Run — ensure there&apos;s a challenge for everyone. All at a flat entry fee of ₹500.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent/95">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Organisers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">Elitzur Academy of Sports</h2>
          <div className="mt-4 section-line" />
          <p className="mt-6 text-base sm:text-lg text-white/50 leading-relaxed">
            Elitzur Academy of Sports is dedicated to promoting fitness and athletic excellence in and around Hosur. This marathon is our flagship event, designed to inspire a healthier, more active community.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Organised By</p>
              <p className="text-sm text-white/50">Elitzur Academy of Sports</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Co-organised By</p>
              <p className="text-sm text-white/50">Rotary Club of Hosur Legends</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
