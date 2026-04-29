import PageHeader from "@/components/PageHeader";

export default function MedicalAdvisoryPage() {
  return (
    <>
      <PageHeader title="Medical Advisory" subtitle="Your health and safety come first" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl space-y-8 text-sm sm:text-base text-white/50 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Pre-Race Health Check</h2>
            <p>We strongly recommend that all participants undergo a medical check-up before race day, especially if you have any pre-existing conditions. A cardiac screening is recommended for all marathon and half-marathon participants.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">On-Course Medical Support</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Ambulances stationed every 5km along the course</li>
              <li>First-aid stations at every hydration point</li>
              <li>Physiotherapy support at the finish line</li>
              <li>Medical volunteers trained in CPR and first response</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Warning Signs</h2>
            <p>Stop running immediately and seek medical help if you experience chest pain, dizziness, severe breathlessness, nausea, or disorientation. Do not push through pain — your safety is more important than your finish time.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Hydration Guidelines</h2>
            <p>Drink water at every hydration station. Do not over-hydrate. Consume electrolytes for runs longer than 10km. Avoid trying new foods or supplements on race day.</p>
          </div>
        </div>
      </section>
    </>
  );
}
