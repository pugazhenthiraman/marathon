import PageHeader from "@/components/PageHeader";

export default function EntryDenialPage() {
  return (
    <>
      <PageHeader title="Entry Denial & Refund" subtitle="Registration cancellation and refund policy" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl space-y-8 text-sm sm:text-base text-white/50 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Refund Policy</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Cancellation 60+ days before race day: 75% refund</li>
              <li>Cancellation 30–60 days before race day: 50% refund</li>
              <li>Cancellation less than 30 days before race day: No refund</li>
              <li>All refunds are processed within 14 business days</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Entry Denial</h2>
            <p>The organising committee reserves the right to deny entry to any participant who does not meet the eligibility criteria, fails to produce valid identification, or is found to have provided false information during registration.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Event Cancellation</h2>
            <p>In the unlikely event that the marathon is cancelled due to circumstances beyond our control (natural disasters, government orders, etc.), registered participants will receive a full refund or the option to transfer their registration to the next edition.</p>
          </div>
        </div>
      </section>
    </>
  );
}
