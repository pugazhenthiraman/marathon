import PageHeader from "@/components/PageHeader";

export default function ResultsPage() {
  return (
    <>
      <PageHeader title="Results" subtitle="Race results will be published here" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl text-center py-12">
          <div className="w-20 h-20 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-2xl font-black text-white">Coming Soon</h2>
          <p className="mt-3 text-white/40 max-w-md mx-auto">
            This is the inaugural edition of the Hosur Midnight Marathon. Race results will be updated here after the event on June 16, 2026.
          </p>
        </div>
      </section>
    </>
  );
}
