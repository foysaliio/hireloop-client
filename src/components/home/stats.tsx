import { BriefcaseBusiness, ChartNoAxesCombined, Star, UsersRound } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const statistics = [
  { value: "50K", label: "Active Jobs", icon: BriefcaseBusiness },
  { value: "12K", label: "Companies", icon: ChartNoAxesCombined },
  { value: "2M", label: "Job Seekers", icon: UsersRound },
  { value: "97%", label: "Satisfication Rate", icon: Star },
];

export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="bg-background px-6 py-[72px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <h2
          id="stats-title"
          className="mx-auto max-w-[600px] text-center text-3xl font-semibold leading-tight text-foreground sm:text-[40px] sm:leading-[52px]"
        >
          Assisting over 15,000 job seekers find their dream positions.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map(({ value, label, icon: Icon }) => (
            <Card key={label} className="h-[254px] gap-0 py-6">
              <CardHeader className="px-6">
                <Icon aria-hidden="true" className="size-6 text-primary" strokeWidth={1.75} />
              </CardHeader>
              <CardContent className="mt-auto px-6">
                <p className="text-[56px] font-semibold leading-[64px] text-foreground">
                  {value}
                </p>
                <p className="mt-4 text-xl leading-[30px] text-muted-foreground">
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
