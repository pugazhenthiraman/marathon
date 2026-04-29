import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40 px-5 sm:px-8 bg-accent text-center">
      <div className="mx-auto max-w-md">
        <p className="text-8xl font-black text-primary">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-black text-white">Page Not Found</h1>
        <p className="mt-3 text-white/40">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wider hover:bg-primary-dark transition">
            Back to Home
          </Link>
          <Link href="/register" className="rounded-xl px-8 py-3.5 text-sm font-bold text-white/70 uppercase tracking-wider border border-white/10 hover:bg-white/5 transition">
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
