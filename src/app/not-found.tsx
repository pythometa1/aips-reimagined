import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">404</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-forest-deep px-5 py-2.5 text-sm font-medium text-cream hover:bg-forest"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
