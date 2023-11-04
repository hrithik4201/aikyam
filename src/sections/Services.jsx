import React from "react";
import { Helmet } from "react-helmet";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section id="services">

      <h3 className="font-palanquin text-center text-4xl font-bold">
        Our Services
      </h3>
      <div className="flex gap-10 mt-10 flex-wrap">
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            image={service.image}
            label={service.label}
            subtext={service.subtext}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
