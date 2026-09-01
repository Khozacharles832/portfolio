"use client";
import Header from "./comoponents/Header";
import Navbar from "./comoponents/Navbar";
import About from "./comoponents/About";
import Services from "./comoponents/Services";
import Work from "./comoponents/Work";
import Contact from "./comoponents/Contact";
import Footer from "./comoponents/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
