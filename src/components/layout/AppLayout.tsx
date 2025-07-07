import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <section className="w-full grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header style="bg-feuce-primary h-[92px] top-[-2px]" />
      <div>
        <Outlet />
      </div>
      <Footer style="bg-feuce-primary h-[266px] top-[-2570px]" />
    </section>
  );
}
