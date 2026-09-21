import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EuroJourney from "./components/EuroJourney";
import JoinUs from "./components/JoinUs";
import PillarsMarquee from "./components/PillarsMarquee";
import Faqs from "./components/Faqs";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <EuroJourney />
        <JoinUs />
        <PillarsMarquee />
        <Faqs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
