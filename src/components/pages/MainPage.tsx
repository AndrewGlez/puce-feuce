import Footer from "../ui/Footer";
import Header from "../ui/Header";
import HeroSection from "../layout/HeroSection";
import MemberSection from "../layout/MemberSection";
import IdentitySection from "../layout/IdentitySection";
import ValuesSection from "../layout/ValuesSection";
import FeaturedEventsSection from "../layout/FeaturedEventsSection";

export default function MainPage() {
  return (
    <section className="w-full grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header style="bg-feuce-primary h-[92px] top-[-2px]" />
      <div>
        <HeroSection />
        <MemberSection style="font-geologica" />
        <IdentitySection />
        <ValuesSection />
        <FeaturedEventsSection />
      </div>
      <Footer style="bg-feuce-primary h-[266px] top-[-2570px]" />
    </section>
  );
}
