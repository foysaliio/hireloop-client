import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

type SectionLabelProps = {
  children: React.ReactNode;
  variant?: "default" | "feature";
};

export function SectionLabel({ children, variant = "default" }: SectionLabelProps) {
  const dotColor = variant === "feature" ? "bg-feature-label" : "bg-primary";
  const textColor = variant === "feature" ? "text-feature-text/80" : "text-foreground/80";

  return (
    <div className="flex items-center gap-4">
      <span aria-hidden="true" className={`size-2 ${dotColor}`} />
      <p className={`${spaceMono.className} text-sm uppercase leading-[1.2] ${textColor} sm:text-xl`}>
        {children}
      </p>
      <span aria-hidden="true" className={`size-2 ${dotColor}`} />
    </div>
  );
}
