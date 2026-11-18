import { Inter_Tight, Manrope } from "next/font/google";
import {
  Bookmark,
  ChartColumn,
  ChartLine,
  Hexagon,
  IdCard,
  MousePointerClick,
  Search,
  TrendingUp,
} from "lucide-react";
import { SectionLabel } from "@/components/home/section-label";

const interTight = Inter_Tight({ subsets: ["latin"], weight: ["400", "500"] });
const manrope = Manrope({ subsets: ["latin"], weight: "600" });

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: Search,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: ChartLine,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: ChartColumn,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: Bookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: MousePointerClick,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: IdCard,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: Hexagon,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: TrendingUp,
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="px-6 py-20 lg:py-[120px]"
      style={{ backgroundColor: "#16161A" }}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mx-auto flex max-w-[520px] flex-col items-center gap-4 text-center">
          <SectionLabel variant="feature">Features Job</SectionLabel>
          <h2
            id="features-title"
            className={`${manrope.className} max-w-[488px] text-4xl font-semibold leading-[1.15] tracking-[-0.02em] text-feature-text sm:text-[40px] xl:text-5xl`}
          >
            Everything you need to succeed
          </h2>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group flex min-w-0 items-center gap-6 transition-all duration-300 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-lg border border-border bg-gradient-to-b from-feature-box-start from-[12.226%] to-feature-box-end to-[177.27%] transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_-5px_var(--primary)] group-hover:shadow-primary/20">
                <Icon aria-hidden="true" className="size-8 text-feature-icon" strokeWidth={1.75} />
              </div>
              <div className={`${interTight.className} min-w-0 text-feature-text`}>
                <h3 className="text-base font-medium leading-[1.4] xl:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-[1.65] text-feature-text/70 xl:text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
