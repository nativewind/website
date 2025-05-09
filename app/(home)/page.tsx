import ComponentKitsSection from "./ComponentKitsSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import TestimonialsSection from "./TestimonialsSection";
import WhyNativewindSection from "./WhyNativewindSection";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center text-center border-x border-dashed">
        <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
        <HeroSection />
        <WhyNativewindSection />
        <section>
        {/* How does Nativewind work?
            - Title
            - Subtitle
            - Visual
            - Dan to come up with something for this  */}
        </section>
        <TestimonialsSection />
        <ComponentKitsSection />
      </main>
      <FooterSection />
    </>
  );
}
