import PageHeader from "@/components/PageHeader";

export default function WaiverPage() {
  return (
    <>
      <PageHeader title="Waiver & Disclaimer" subtitle="Assumption of risk and release of liability" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl space-y-8 text-sm sm:text-base text-white/50 leading-relaxed">
          <p>By registering for and participating in the Hosur Midnight Marathon, you acknowledge and agree to the following:</p>
          <ul className="space-y-3 list-disc list-inside">
            <li>You are physically fit and have trained adequately for the race category you have registered for.</li>
            <li>You understand that participating in a marathon involves inherent risks including but not limited to physical injury, dehydration, cardiac events, and other medical emergencies.</li>
            <li>You voluntarily assume all risks associated with participation in the event.</li>
            <li>You release the organising committee, sponsors, volunteers, and all associated parties from any liability for injury, illness, or loss arising from your participation.</li>
            <li>You consent to receiving medical treatment in case of an emergency during the event.</li>
            <li>You grant permission for the use of your name, image, and likeness in photographs, videos, and other media related to the event.</li>
          </ul>
          <p>This waiver is binding upon you, your heirs, executors, and administrators.</p>
        </div>
      </section>
    </>
  );
}
