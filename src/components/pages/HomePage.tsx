import FeaturedEventsSection from "../layout/Home/FeaturedEventsSection";
import HeroSection from "../layout/Home/HeroSection";
import IdentitySection from "../layout/Home/IdentitySection";
import MemberSection from "../layout/Home/MemberSection";
import ValuesSection from "../layout/Home/ValuesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <MemberSection />
      <IdentitySection />
      <ValuesSection />
      <FeaturedEventsSection />
    </div>
  );
}
