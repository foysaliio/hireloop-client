import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Job discovery", href: "/jobs" },
      { label: "Worker AI", href: "/worker-ai" },
      { label: "Companies", href: "/companies" },
      { label: "Salary data", href: "/salary-data" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/career-library" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/newsroom" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-15">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-24">
          <div className="max-w-72">
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground" aria-label="Hireloop home">
              hire<span className="text-primary">loop</span>
            </Link>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h2 className="text-base font-semibold text-foreground">{column.title}</h2>
                <ul className="mt-6 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hireloop</p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-foreground">Terms &amp; Policy</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy Guideline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
