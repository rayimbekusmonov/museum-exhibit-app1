import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ink-950 px-6 text-center">
      <span className="font-mono text-xs tracking-widest text-gold-soft/70">
        404
      </span>
      <h1 className="font-display text-2xl text-vellum">
        This exhibit couldn&apos;t be found
      </h1>
      <p className="max-w-xs text-sm text-vellum-dim/70">
        The QR code may point to an exhibit outside the current
        collection. Browse the gallery instead.
      </p>
      <Link
        href="/exhibit/1"
        className="mt-2 rounded-full border border-gold/40 px-5 py-2 font-mono text-xs tracking-widest text-gold-soft transition-colors hover:bg-gold/10"
      >
        View exhibit 01
      </Link>
    </main>
  );
}
