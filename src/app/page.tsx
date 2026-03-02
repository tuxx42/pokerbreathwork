import { auth } from "@/lib/auth";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import Ticker from "@/components/landing/Ticker";
import Problem from "@/components/landing/Problem";
import RootCause from "@/components/landing/RootCause";
import WhatYouTried from "@/components/landing/WhatYouTried";
import Solution from "@/components/landing/Solution";
import Structure from "@/components/landing/Structure";
import SixPillars from "@/components/landing/SixPillars";
import Testimonials from "@/components/landing/Testimonials";
import WhoItsFor from "@/components/landing/WhoItsFor";
import About from "@/components/landing/About";
import Faq from "@/components/landing/Faq";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <Nav
        isSignedIn={!!session}
        isPaid={session?.user?.isPaid}
        hasApplication={!!session?.user?.applicationStatus}
      />
      <Hero />
      <Ticker />
      <hr className="divider" style={{ marginTop: "40px" }} />
      <Problem />
      <RootCause />
      <WhatYouTried />
      <Solution />
      <Structure />
      <SixPillars />
      <Testimonials />
      <WhoItsFor />
      <About />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
