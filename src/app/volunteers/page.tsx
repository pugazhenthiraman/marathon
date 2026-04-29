import PageHeader from "@/components/PageHeader";

export default function VolunteersPage() {
  return (
    <>
      <PageHeader title="Volunteers" subtitle="Be part of the team that makes it happen" bg="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl">
          <p className="text-base sm:text-lg text-white/50 leading-relaxed">
            The inaugural Hosur Midnight Marathon needs passionate volunteers to make race day a success. From course marshals to hydration station crews, volunteers are the backbone of the event.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {[
              { title: "Course Marshals", desc: "Guide runners along the route and ensure safety at key intersections." },
              { title: "Hydration Stations", desc: "Distribute water, electrolytes, and energy gels to runners every 2.5km." },
              { title: "Medical Support", desc: "Assist the medical team with first-aid and runner welfare checkpoints." },
              { title: "Registration Desk", desc: "Help with BIB collection, kit distribution, and runner queries at the expo." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition">
                <h3 className="text-lg font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-primary/10 border border-primary/20 p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-white">Interested in volunteering?</h3>
            <p className="mt-2 text-sm text-white/50">Registrations for volunteers will open soon. Stay tuned!</p>
          </div>
        </div>
      </section>
    </>
  );
}
