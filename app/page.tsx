import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsClients from "@/components/StatsClients";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Cursor />
      <Navbar />
      <main id="main-content ">
        <Hero />
        <StatsClients />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
