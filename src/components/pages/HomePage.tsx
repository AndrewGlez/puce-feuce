
import HeroSection from "../layout/HeroSection";
import MemberSection from "../layout/MemberSection";
import IdentitySection from "../layout/IdentitySection";
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
