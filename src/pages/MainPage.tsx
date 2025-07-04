import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainPage() {
  return (
    <section className="w-full grid grid-rows-[auto_1fr_auto] gap-2 min-h-screen">
      <Header style="bg-feuce-primary h-[92px] top-[-2px]" />
      <div>Main</div>
      <Footer style="bg-feuce-primary h-[266px] top-[-2570px]" />
    </section>
  );
}
