import PageHeader from "@/components/PageHeader";

const causes = [
  { title: "Education for All", desc: "Supporting underprivileged children's education through pledged runs." },
  { title: "Health Awareness", desc: "Promoting active lifestyles and preventive healthcare across communities." },
  { title: "Environmental Sustainability", desc: "Eco-friendly marathon practices and green initiatives." },
  { title: "Community Building", desc: "Bringing together people from all walks of life through running." },
];

export default function PhilanthropyPage() {
  return (
    <>
      <PageHeader title="Philanthropy" subtitle="Running for a cause, making a difference" bg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl">
          <p className="text-base sm:text-lg text-white/50 leading-relaxed">
            The Hosur Midnight Marathon is more than a race. It serves as a platform to reach out and support numerous causes by pledging runs. A portion of every registration goes towards community upliftment.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {causes.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10 hover:bg-white/10 hover:border-primary/20 transition">
                <h3 className="text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
