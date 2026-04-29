import PageHeader from "@/components/PageHeader";

export default function CodeOfConductPage() {
  return (
    <>
      <PageHeader title="Code of Conduct" subtitle="Fair play, respect, and sportsmanship" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-4xl space-y-8 text-sm sm:text-base text-white/50 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">General Conduct</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>All participants must follow the instructions of race officials, marshals, and volunteers at all times.</li>
              <li>Abusive, threatening, or unsportsmanlike behaviour towards other runners, volunteers, or spectators will result in immediate disqualification.</li>
              <li>Participants must wear their official race BIB visibly on the front of their torso throughout the race.</li>
              <li>Transferring or sharing race BIBs is strictly prohibited.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">On-Course Rules</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Runners must follow the designated course at all times. Cutting the course will result in disqualification.</li>
              <li>Use of any wheeled device (bicycles, skateboards, etc.) is prohibited unless authorised.</li>
              <li>Headphones are permitted but must be kept at a volume that allows awareness of surroundings.</li>
              <li>Littering on the course is prohibited. Use designated waste zones at aid stations.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Disqualification</h2>
            <p>The organising committee reserves the right to disqualify any participant who violates the code of conduct, endangers others, or brings the event into disrepute. Decisions of the race director are final.</p>
          </div>
        </div>
      </section>
    </>
  );
}
