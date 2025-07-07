import HeroSection from "../layout/HeroSection";
import IdentitySection from "../layout/IdentitySection";
import MemberSection from "../layout/MemberSection";
import ValuesSection from "../layout/ValuesSection";
import FeaturedEventsSection from "../layout/FeaturedEventsSection";

export default function HomePage() {
  return (
   
    <div>
      <HeroSection />
        <MemberSection style="font-geologica" />
        <IdentitySection />
        <ValuesSection />
        <FeaturedEventsSection />
    </div>
    
  );
}
