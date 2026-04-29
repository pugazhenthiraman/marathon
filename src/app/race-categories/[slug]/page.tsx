import { notFound } from "next/navigation";
import { raceCategories } from "@/data/categories";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export function generateStaticParams() {
  return raceCategories.map((c) => ({ slug: c.slug }));
}

export default async function RaceCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = raceCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  return (
    <>
      <PageHeader title={cat.title} subtitle={`${cat.distance} • Flag off: ${cat.startTime}`} bg={cat.img} />

      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-accent">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-white/5 p-6 sm:p-8 border border-white/10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Registration Fee</p>
              <p className="mt-1 text-3xl sm:text-4xl font-black text-white">{cat.fee} <span className="text-sm font-medium text-white/40">(Inc. 18% GST)</span></p>
            </div>
            <Link href={`/register?category=${cat.slug}`} className="rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-primary-dark transition shrink-0">Register Now</Link>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Route</h2>
            <div className="mt-2 section-line" />
            <p className="mt-6 text-base text-white/50 leading-relaxed">{cat.route}</p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Amenities</h2>
            <div className="mt-2 section-line" />
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.amenities.map((a) => (
                <div key={a} className="flex items-center gap-3 rounded-xl bg-white/5 p-4 border border-white/10">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">✓</span>
                  <span className="text-sm font-medium text-white/80">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Approval Criteria</h2>
            <div className="mt-2 section-line" />
            <ul className="mt-6 space-y-3">
              {cat.criteria.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-6">Other Categories</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {raceCategories.filter((c) => c.slug !== slug).map((c) => (
                <Link key={c.slug} href={`/race-categories/${c.slug}`} className="rounded-xl bg-white/5 p-4 border border-white/10 hover:border-primary/20 hover:bg-white/10 transition text-center">
                  <p className={`text-lg font-black bg-gradient-to-r ${c.color} bg-clip-text text-transparent`}>{c.distance}</p>
                  <p className="mt-1 text-xs font-semibold text-white/40">{c.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
