import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { SmartJobDiscovery } from "@/components/home/smart-job-discovery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <SmartJobDiscovery />
    </main>
  );
}
