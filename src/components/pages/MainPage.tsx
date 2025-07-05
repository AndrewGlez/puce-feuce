import Footer from "../ui/Footer";
import Header from "../ui/Header";
import HeroSection from "../layout/HeroSection";
import MemberSection from "../layout/MemberSection";

export default function MainPage() {
  return (
    <section className="w-full grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header style="bg-feuce-primary h-[92px] top-[-2px]" />
      <div>
        <HeroSection />
        <MemberSection style="font-geologica" />
      </div>
      <Footer style="bg-feuce-primary h-[266px] top-[-2570px]" />
    </section>
  );
}
