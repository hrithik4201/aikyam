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
