import PageHeader from "@/components/PageHeader";

const prizes = [
  { cat: "Half Marathon (Men)", first: "₹50,000", second: "₹30,000", third: "₹20,000" },
  { cat: "Half Marathon (Women)", first: "₹50,000", second: "₹30,000", third: "₹20,000" },
  { cat: "10KM Run (Men)", first: "₹25,000", second: "₹15,000", third: "₹10,000" },
  { cat: "10KM Run (Women)", first: "₹25,000", second: "₹15,000", third: "₹10,000" },
];

export default function PrizeMoneyPage() {
  return (
    <>
      <PageHeader title="Prize Money" subtitle="Rewarding excellence across all categories" />
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-white/10">
                <th className="py-4 pr-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Category</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-[0.2em] text-gold text-center">🥇 1st</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40 text-center">🥈 2nd</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40 text-center">🥉 3rd</th>
              </tr>
            </thead>
            <tbody>
              {prizes.map((p) => (
                <tr key={p.cat} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="py-4 pr-4 text-sm font-bold text-white">{p.cat}</td>
                  <td className="py-4 px-4 text-sm font-black text-primary text-center">{p.first}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-white/70 text-center">{p.second}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-white/70 text-center">{p.third}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-8 text-xs text-white/30">* Prize money is subject to applicable taxes. 5KM Run is a non-competitive fun run with no prize money. Prize amounts are tentative and will be confirmed closer to the event.</p>
        </div>
      </section>
    </>
  );
}
