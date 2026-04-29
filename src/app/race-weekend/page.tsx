import PageHeader from "@/components/PageHeader";

const schedule = [
  { day: "Monday, June 15", events: [
    { time: "10:00 AM - 6:00 PM", title: "Expo & BIB Collection", location: "SIPCOT Arena" },
    { time: "6:00 PM", title: "Pasta Party", location: "SIPCOT Arena" },
  ]},
  { day: "Tuesday, June 16", events: [
    { time: "12:00 AM", title: "Half Marathon Flag Off", location: "Hosur Lake" },
    { time: "12:30 AM", title: "10KM Run Flag Off", location: "SIPCOT Arena" },
    { time: "1:00 AM", title: "5KM Fun Run Flag Off", location: "SIPCOT Arena" },
    { time: "5:00 AM", title: "Prize Distribution Ceremony", location: "SIPCOT Arena" },
  ]},
];

export default function RaceWeekendPage() {
  return (
    <>
      <PageHeader title="Race Weekend" subtitle="One night of running, celebration, and community" bg="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl space-y-12">
          {schedule.map((day) => (
            <div key={day.day}>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{day.day}</h2>
              <div className="mt-2 section-line" />
              <div className="mt-6 space-y-3">
                {day.events.map((e) => (
                  <div key={e.title} className="flex gap-4 sm:gap-6 rounded-xl bg-white/5 p-5 border border-white/10">
                    <div className="shrink-0 w-24 sm:w-32">
                      <p className="text-sm font-bold text-primary">{e.time}</p>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-white">{e.title}</p>
                      <p className="text-xs text-white/40 mt-0.5">{e.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
