import { CommunityMetrics } from "@/src/components/organisms/community-metrics";
import { Hero } from "@/src/components/organisms/hero";
import { TopBooks } from "@/src/components/organisms/top-books";

export default function Home() {
  return (
    <main>
      <Hero />
      <TopBooks />
      <CommunityMetrics />
    </main>
  );
}
