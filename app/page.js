"use client";
import Header from "./comoponents/Header";
import Navbar from "./comoponents/Navbar";
import About from "./comoponents/About";
import Services from "./comoponents/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
    </>
  );
}
