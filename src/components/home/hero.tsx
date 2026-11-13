import Image from "next/image";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingRoles = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate -mt-[98px] min-h-[900px] overflow-hidden bg-background px-6 pt-44 sm:pt-52 lg:min-h-[1120px] lg:pt-[278px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 85% 42% at 50% 0%, var(--accent), var(--background) 78%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[580px] -z-10 h-[720px] w-[1440px] -translate-x-1/2"
        style={{ maskImage: "linear-gradient(to bottom, transparent, black 12%)" }}
      >
        <Image
          src="/assets/images/globe.png"
          alt=""
          fill
          priority
          sizes="1440px"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
          <div className="flex max-w-full items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm sm:gap-4">
            <span aria-hidden="true" className="text-xl">💼</span>
            <span className="font-mono text-sm font-bold text-foreground sm:text-xl">50,000+</span>
            <span className="font-mono text-xs tracking-wide text-muted-foreground sm:text-lg">NEW JOBS THIS MONTH</span>
          </div>

          <h1
            id="hero-title"
            className="mt-8 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[60px] lg:leading-[1.12]"
          >
            Find Your Dream Job Today
          </h1>
          <p className="mt-4 max-w-[790px] text-pretty text-base leading-7 text-muted-foreground sm:text-[22px] sm:leading-8">
            HireLoop connects top talent with world-class companies. Browse thousands of
            curated opportunities and land your next role — faster.
          </p>

          <form
            action="/jobs"
            method="get"
            role="search"
            className="mt-10 flex w-full max-w-[780px] flex-col gap-3 rounded-[14px] border border-border bg-card p-2 text-left shadow-sm sm:h-[66px] sm:flex-row sm:items-center sm:gap-0"
          >
            <label className="flex min-w-0 flex-1 items-center gap-3 px-4 py-2 text-muted-foreground">
              <Search aria-hidden="true" className="size-6 shrink-0 text-foreground" />
              <span className="sr-only">Job title, skill or company</span>
              <input
                name="q"
                type="search"
                placeholder="Job title, skill or company"
                className="min-w-0 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
              />
            </label>
            <span aria-hidden="true" className="hidden h-7 w-px bg-border sm:block" />
            <label className="flex min-w-0 flex-1 items-center gap-3 border-t border-border px-4 py-2 text-muted-foreground sm:border-t-0">
              <MapPin aria-hidden="true" className="size-6 shrink-0 text-foreground" />
              <span className="sr-only">Location or Remote</span>
              <input
                name="location"
                type="search"
                placeholder="Location or Remote"
                className="min-w-0 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-base"
              />
            </label>
            <Button
              type="submit"
              size="icon-lg"
              aria-label="Search jobs"
              className="h-[50px] w-full shrink-0 rounded-[10px] sm:w-[50px]"
            >
              <Search aria-hidden="true" className="size-6" />
            </Button>
          </form>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
            <span className="mr-1 text-muted-foreground">Trending Position</span>
            {trendingRoles.map((role) => (
              <Link
                key={role}
                href={`/jobs?q=${encodeURIComponent(role)}`}
                className="rounded-full border border-border bg-accent px-3 py-1.5 text-sm text-foreground transition-colors duration-200 hover:border-primary hover:text-secondary"
              >
                {role}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
