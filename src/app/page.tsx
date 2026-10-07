import Ambient from "@/components/Ambient";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import Method from "@/components/Method";
import Faq from "@/components/Faq";
import Join from "@/components/Join";
import Footer from "@/components/Footer";
import StickyJoin from "@/components/StickyJoin";
import Lightbox from "@/components/Lightbox";

export default function Page() {
  return (
    <>
      <Ambient />
      <Nav />
      <main className="wrap">
        <Hero />
        <TrackRecord />
        <Method />
        <Faq />
        <Join />
      </main>
      <Footer />
      <StickyJoin />
      <Lightbox />
    </>
  );
}
