import { HeroSection } from "./components/home";
import { CallToAction } from "./components/ui";

export default function Home() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <HeroSection />
        <CallToAction />
      </div>
    </div>
  );
}
