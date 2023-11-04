import { Helmet } from "react-helmet";
import { phone } from "./assets/icons";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Choose from "./sections/Choose";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Stories from "./sections/Stories";

export default function App() {
  return (
    <main className="relative">
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>AIKYAM Sports Science and Technology</title>
        <meta
          name="description"
          content="Welcome to AIKYAM Sports Science, where we empower athletes to reach their full potential through cutting-edge sports science and technology."
        />
        <meta
          name="description"
          content="Welcome to AIKYAM Sports Science, where we empower athletes to reach their full potential through cutting-edge sports science and technology."
        />
        <meta
          name="keywords"
          content="sports science, technology, athlete empowerment, fitness"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="AIKYAM Sports Science" />
        <meta
          name="og:title"
          content="AIKYAM Sports Science - Empower Athletes"
        />
        <meta
          name="og:description"
          content="Welcome to AIKYAM Sports Science, where we empower athletes to reach their full potential through cutting-edge sports science and technology."
        />
      </Helmet>
      <div className="fixed bottom-5 right-5 z-50 sm:hidden">
        <button
          aria-label="Open Phone Menu"
          className="bg-primary p-4 rounded-full border border-solid border-black"
        >
          <img src={phone} alt="phone icon" className="rounded-full w-7 h-7" />
        </button>
      </div>
      <Navbar />
      <section className=" md:bg-hero bg-contain bg-no-repeat bg-right">
        <div className="padding-x pb-20 md:bg-gradient-to-r from-black via-black to-transparent max-md:bg-black">
          <Hero />
        </div>
      </section>
      <section className="padding">
        <Stories />
      </section>
      <section className="padding bg-pale-red">
        <Services />
      </section>
      <section className="padding-x padding-b bg-pale-red">
        <Benefits />
      </section>
      <section className="padding-x">
        <About />
      </section>
      <section className="padding-x bg-primary">
        <Choose />
      </section>
      <section className="padding-x ">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
