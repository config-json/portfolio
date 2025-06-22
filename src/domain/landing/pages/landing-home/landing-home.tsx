import { Footer } from "@/domain/core/components/footer";
import { Work } from "./widgets/work";
import { Hero } from "./widgets/hero";
import { About } from "./widgets/about";

export const LandingHome = () => {
  return (
    <div className="max-w-screen flex flex-col gap-24">
      <Hero />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
