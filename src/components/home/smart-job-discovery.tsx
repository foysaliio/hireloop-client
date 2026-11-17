import Link from "next/link";
import { Manrope, Space_Mono } from "next/font/google";
import { ArrowRight, BriefcaseBusiness, CircleEuro, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

const jobs = Array.from({ length: 6 }, (_, index) => ({ id: index + 1 }));

export function SmartJobDiscovery() {
  return (
    <section
      aria-labelledby="smart-job-discovery-title"
      className="bg-background px-6 pb-24 pt-32"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="size-2 bg-primary" />
            <p className={`${spaceMono.className} text-sm uppercase leading-[1.2] text-foreground/80 sm:text-xl`}>
              Smart job discovery
            </p>
            <span aria-hidden="true" className="size-2 bg-primary" />
          </div>
          <h2
            id="smart-job-discovery-title"
            className={`${manrope.className} max-w-[488px] text-4xl font-semibold leading-[1.15] tracking-[-0.02em] text-foreground sm:text-5xl`}
          >
            The roles you&apos;d never find by searching
          </h2>
        </div>

        <div className="mt-[72px] grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map(({ id }) => (
            <Card
              key={id}
              variant="glow"
              className="min-h-[364px] gap-0 rounded-[24px] bg-gradient-to-b from-card to-popover/80 pb-10 pt-8 ring-border/50"
            >
              <CardHeader className="gap-4 px-6">
                <h3>
                  <CardTitle className={`${manrope.className} text-2xl font-semibold leading-[1.3] text-foreground sm:text-[28px]`}>
                    Frontend Developer
                  </CardTitle>
                </h3>
                <CardDescription className="text-sm leading-6 text-muted-foreground sm:text-base">
                  Showcase your commitment to diversity and inclusion by highlighting initiatives
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-8 flex flex-wrap gap-2 px-6 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-foreground">
                  <MapPin aria-hidden="true" className="size-3.5 text-secondary" fill="currentColor" />
                  New York, USA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-foreground">
                  <BriefcaseBusiness aria-hidden="true" className="size-3.5 text-secondary" fill="currentColor" />
                  Hybrid
                </span>
                <span className="basis-full" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-foreground">
                  <CircleEuro aria-hidden="true" className="size-3.5 text-secondary" />
                  €25–€40/hour
                </span>
              </CardContent>

              <div className="mt-auto px-6 pt-8">
                <Link
                  href="/jobs"
                  className="ml-4 inline-flex items-center gap-2 rounded-sm px-2 py-1 text-sm text-foreground transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Apply Now
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button
            nativeButton={false}
            render={<Link href="/jobs" />}
            className="h-auto rounded-xl bg-foreground px-6 py-4 text-lg font-medium text-background hover:bg-foreground/90"
          >
            View all job open
          </Button>
        </div>
      </div>
    </section>
  );
}
