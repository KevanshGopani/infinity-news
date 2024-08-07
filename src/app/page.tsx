import MarqueeUI from "@/component/UI/Marquee";
import Navbar from "@/component/UI/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col">
      <MarqueeUI />
      <Navbar />
    </main>
  );
}
