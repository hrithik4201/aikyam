import React from "react";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import heroBg from "../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col lg:pt-32 pt-16 gap-12">
      <div className="md:w-3/5 w-full">
        <h1 className="font-palanquin lg:text-[72px] lg:leading-[82px] font-bold lg:text-6xl text-4xl text-white ">
          Empowering Athletes to Reach Their Full Potential
        </h1>
        <p className="font-montserrat text-slate-gray lg:text-lg text-sm leading-8 mt-6 mb-10 lg:w-3/5 w-full">
          Welcome to AIKYAM Sports Science, a sports science fitness centre that
          combines cutting-edge technology with a passion for enhancing athlete
          performance, recovery, strength, nutrition, and psychology.
        </p>
        <a href="#services">
          <Button label={"View All Services"} />
        </a>
      </div>
      <img
        className="rounded-lg md:hidden"
        src={heroBg}
        loading="lazy"
        alt="hero"
        width={550}
      />
    </section>
  );
};

export default Hero;
