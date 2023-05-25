import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Services from "../components/UI/Services";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Work from "../components/UI/Work";
import Contact from "../components/UI/Contact";


export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Services />
      <About />
      {/* <Work /> */}
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
