import Image from "next/image";
import { BriefcaseBusiness, ChartNoAxesCombined, Star, UserRoundSearch } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const statistics = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: ChartNoAxesCombined },
  { value: "2M", label: "Job Seekers", icon: UserRoundSearch },
  { value: "97%", label: "Satisfication Rate", icon: Star },
];

export function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="relative isolate -mt-24 overflow-hidden bg-background px-6 py-[72px] lg:-mt-[165px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[550px] w-[1440px] -translate-x-1/2"
      >
        <Image
          src="/assets/images/globe.png"
          alt=""
          fill
          sizes="1440px"
          className="object-cover object-[center_71.77%]"
        />
      </div>
      <div className="relative mx-auto w-full max-w-[1320px]">
        <h2
          id="stats-title"
          className="mx-auto max-w-[600px] text-center text-3xl font-normal leading-tight text-foreground/80 sm:text-[34px] sm:leading-[52px]"
        >
          Assisting over 15,000 job seekers find their dream positions.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map(({ value, label, icon: Icon }) => (
            <Card
              key={label}
              className="h-[254px] gap-0 bg-gradient-to-b from-background to-popover py-6 ring-border/50"
            >
              <CardHeader className="px-6">
                <Icon aria-hidden="true" className="size-6 text-foreground" strokeWidth={1.75} />
              </CardHeader>
              <CardContent className="mt-auto px-6">
                <p className="text-[56px] font-medium leading-[64px] text-foreground">
                  {value}
                </p>
                <p className="mt-4 text-xl leading-[30px] text-foreground">
                  {label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
