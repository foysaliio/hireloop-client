import Link from "next/link";
import Image from "next/image";

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
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-[1320px] py-10 sm:py-12 lg:py-10">
          <div className="grid gap-10 lg:min-h-[193px] lg:grid-cols-[minmax(0,1fr)_632px] lg:gap-12">
            <div className="max-w-[288px]">
              <Link
                href="/"
                className="inline-block"
                aria-label="Hireloop home"
              >
                <Image
                  src="/assets/images/logo.png"
                  alt="Hireloop"
                  width={154}
                  height={44}
                  className="h-[44px] w-[154px] object-contain"
                />
              </Link>
              <p className="mt-5 text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-[30px]">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-8 lg:gap-[72px]">
              {columns.map((column) => (
                <div key={column.title}>
                  <h2 className="text-base font-semibold leading-[25px] text-primary">
                    {column.title}
                  </h2>
                  <ul className="mt-4 space-y-2 sm:mt-6">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm leading-[30px] text-muted-foreground transition-colors duration-300 ease-out hover:text-secondary focus-visible:text-secondary sm:text-base motion-reduce:transition-none"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-6 border-t border-border pt-6 text-sm leading-6 text-muted-foreground sm:mt-14 sm:text-base sm:leading-[30px] lg:mt-[72px] lg:min-h-10 lg:flex-row lg:items-center lg:justify-between lg:border-0 lg:pt-0">
            <div className="flex gap-2" aria-hidden="true">
              <span className="flex size-10 items-center justify-center rounded-md border border-border font-semibold transition-[color,background-color,border-color,transform] duration-500 ease-in-out hover:border-primary hover:bg-accent hover:text-primary active:scale-95 motion-reduce:transition-none">
                f
              </span>
              <span className="flex size-10 items-center justify-center rounded-md border border-border font-semibold transition-[color,background-color,border-color,transform] duration-500 ease-in-out hover:border-primary hover:bg-accent hover:text-primary active:scale-95 motion-reduce:transition-none">
                in
              </span>
              <span className="flex size-10 items-center justify-center rounded-md border border-border font-semibold transition-[color,background-color,border-color,transform] duration-500 ease-in-out hover:border-primary hover:bg-accent hover:text-primary active:scale-95 motion-reduce:transition-none">
                X
              </span>
            </div>
            <div className="flex flex-col gap-2 sm:gap-4 xl:flex-row xl:gap-6">
              <p>Copyright 2026 — Foysal Hossien</p>
              <Link
                href="/terms"
                className="transition-colors duration-300 ease-out hover:text-secondary focus-visible:text-secondary motion-reduce:transition-none"
              >
                Terms &amp; Policy - Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
