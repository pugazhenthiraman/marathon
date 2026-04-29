import PageHeader from "@/components/PageHeader";

export default function DataProtectionPage() {
  return (
    <>
      <PageHeader title="Data Protection Policy" subtitle="How we handle your personal information" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl space-y-8 text-sm sm:text-base text-white/50 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect</h2>
            <p>When you register for the Hosur Midnight Marathon, we collect personal information including your name, email address, phone number, date of birth, gender, and emergency contact details. This information is necessary to process your registration and ensure your safety during the event.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Data</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Processing your race registration and payment</li>
              <li>Communicating race-day logistics, route changes, and safety information</li>
              <li>Publishing race results (name, BIB number, timing)</li>
              <li>Emergency medical situations during the event</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Data Sharing</h2>
            <p>We do not sell your personal data. We may share limited information with timing partners, medical teams, and insurance providers solely for the purpose of conducting the event safely.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>For data-related queries, contact us at info@hosurmidnightmarathon.com.</p>
          </div>
        </div>
      </section>
    </>
  );
}
