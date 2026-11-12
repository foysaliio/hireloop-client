import Link from "next/link";
import { BriefcaseBusiness, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingRoles = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export function Hero() {
  return (
    <section className="relative isolate min-h-[850px] overflow-hidden bg-background px-6 pb-28 pt-36 sm:pt-40 lg:min-h-[900px] lg:pt-44" aria-labelledby="hero-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 75% 55% at 50% 100%, color-mix(in srgb, var(--primary) 27%, transparent), transparent 65%), radial-gradient(ellipse 65% 55% at 50% 0%, var(--card), transparent 80%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 opacity-60">
        {[
          [12, 69], [19, 35], [24, 82], [32, 52], [38, 18], [44, 75],
          [51, 40], [57, 87], [63, 21], [70, 65], [77, 33], [85, 79],
          [91, 48], [96, 15],
        ].map(([left, top], index) => (
          <span
            key={index}
            className="absolute size-1 rounded-full bg-primary/60 shadow-[0_0_10px_var(--primary)]"
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        <div className="flex max-w-full items-center gap-3 rounded-full border border-border bg-card px-5 py-3 shadow-sm sm:gap-4">
          <BriefcaseBusiness aria-hidden="true" className="size-5 shrink-0 text-secondary" />
          <span className="font-mono text-sm font-bold text-foreground sm:text-xl">50,000+</span>
          <span className="font-mono text-xs tracking-wide text-muted-foreground sm:text-lg">NEW JOBS THIS MONTH</span>
        </div>

        <h1 id="hero-title" className="mt-10 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[60px] lg:leading-[1.12]">
          Find Your Dream Job Today
        </h1>
        <p className="mt-5 max-w-[790px] text-pretty text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8">
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        <form action="/jobs" method="get" role="search" className="mt-12 flex w-full max-w-[820px] flex-col gap-3 rounded-xl border border-border bg-card p-2 text-left shadow-sm sm:flex-row sm:items-center sm:gap-0">
          <label className="flex min-w-0 flex-1 items-center gap-3 px-4 py-2 text-muted-foreground">
            <Search aria-hidden="true" className="size-6 shrink-0 text-foreground" />
            <span className="sr-only">Job title, skill or company</span>
            <input name="q" type="search" placeholder="Job title, skill or company" className="min-w-0 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base" />
          </label>
          <span aria-hidden="true" className="hidden h-7 w-px bg-border sm:block" />
          <label className="flex min-w-0 flex-1 items-center gap-3 border-t border-border px-4 py-2 text-muted-foreground sm:border-t-0">
            <MapPin aria-hidden="true" className="size-6 shrink-0 text-foreground" />
            <span className="sr-only">Location or Remote</span>
            <input name="location" type="search" placeholder="Location or Remote" className="min-w-0 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base" />
          </label>
          <Button type="submit" size="icon-lg" aria-label="Search jobs" className="h-12 w-full shrink-0 rounded-lg sm:w-12">
            <Search aria-hidden="true" className="size-6" />
          </Button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
          <span className="mr-1 text-muted-foreground">Trending Position</span>
          {trendingRoles.map((role) => (
            <Link
              key={role}
              href={`/jobs?q=${encodeURIComponent(role)}`}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-primary hover:text-secondary"
            >
              {role}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
