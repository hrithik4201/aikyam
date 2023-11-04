import React from "react";
import { Helmet } from "react-helmet";
import { dotCircle } from "../assets/icons";
import { featureImg } from "../assets/images";
import { features, benefits } from "../constants";

const Benefits = () => {
  return (
    <>
      <section>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-black"></div>
          <span className="flex-shrink mx-4 text-black text-lg">
            Features & Benefits
          </span>
          <div className="flex-grow border-t border-black"></div>
        </div>
        <div className="flex md:mt-10 items-center sm:justify-between lg:flex-row flex-col">
          <div className="flex sm:flex-row gap-8 flex-col mb-10 sm:justify-between">
            <div>
              <h3 className="font-palanquin text-4xl">Features</h3>
              <ul className="font-montserrat text-2xl sm:mt-6">
                {features.map((feature) => (
                  <div key={feature} className="flex gap-2 ">
                    <img src={dotCircle} alt="icon" width={15} />
                    <li className="sm:text-xl text-sm leading-8 sm:leading-10 text-slate-gray ">
                      {feature}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-palanquin text-4xl">Benefits</h3>
              <ul className="font-montserrat text-2xl sm:mt-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-2">
                    <img src={dotCircle} alt="icon" width={15} />
                    <li className="sm:text-xl text-sm leading-8 sm:leading-10 text-slate-gray">
                      {benefit}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <img
            className="rounded-2xl md:items-center"
            src={featureImg}
            loading="lazy"
            alt="feature image"
            width={400}
          />
        </div>
      </section>
    </>
  );
};

export default Benefits;
