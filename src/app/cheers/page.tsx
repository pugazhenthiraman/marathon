import PageHeader from "@/components/PageHeader";

export default function CheersPage() {
  return (
    <>
      <PageHeader title="Cheer Zones" subtitle="Bring the energy, fuel the runners" bg="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1920&q=80" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl">
          <p className="text-base sm:text-lg text-white/50 leading-relaxed">
            Cheer zones are designated spots along the marathon route where spectators, families, and community groups gather to cheer runners on. Music, drums, and energy — this is where the magic happens.
          </p>

          <div className="mt-12 space-y-4">
            {[
              { km: "KM 3", location: "Hosur Main Road", desc: "The early energy boost — DJ station and community drums." },
              { km: "KM 8", location: "SIPCOT Gate", desc: "Corporate cheer zone — company teams and banners." },
              { km: "KM 14", location: "Chandrapura Junction", desc: "The halfway mark — live band and hydration station." },
              { km: "KM 18", location: "Kelevarapalli Road", desc: "The push zone — motivational signs and energy gels." },
            ].map((z) => (
              <div key={z.km} className="flex gap-4 sm:gap-6 rounded-xl bg-white/5 p-5 border border-white/10">
                <div className="shrink-0 w-16 sm:w-20 text-center">
                  <p className="text-lg font-black text-primary">{z.km}</p>
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold text-white">{z.location}</p>
                  <p className="text-xs text-white/40 mt-0.5">{z.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-primary/10 border border-primary/20 p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-white">Want to set up a cheer zone?</h3>
            <p className="mt-2 text-sm text-white/50">Contact us to register your group for a designated cheer spot on race day.</p>
          </div>
        </div>
      </section>
    </>
  );
}
