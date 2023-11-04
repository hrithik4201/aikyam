import React from "react";
import { logo, logo_text, logo_text_white } from "../assets/images";
import { navLinks, socials } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-pale-red">
      <div className="flex md:flex-row flex-col justify-between md:items-baseline items-center text-black p-10">
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center">
            <img src={logo} alt="AIKYAM Logo" width={75} />
            <img src={logo_text} alt="AIKYAM Text Logo" width={100} />
          </div>
          <div className="font-palanquin text-base">
            AIKYAM Sports Science: Elevating sports tech to empower athletes.
            Our mission: Optimize performance, recovery, strength, and
            psychology. We're dedicated to pushing boundaries in sports science,
            leaving no stone unturned.
          </div>
        </div>
        <div className="flex-1 text-center md:my-0 my-4">
          <h3 className="font-montserrat text-3xl">Quick links</h3>
          <ul className="font-palanquin text-lg leading-8">
            {navLinks.map((nav) => (
              <li key={nav.label}>
                <a href={`${nav.href}`}>{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-center">
          <h3 className="font-montserrat text-3xl mb-4">Follow us</h3>
          <ul className="flex gap-8 justify-center items-center">
            {socials.map((social) => (
              <div key={social.label} className="cursor-pointer">
                <a
                  href={`${social.href}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={social.image} alt={social.label} width={40} />
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center text-white bg-primary">
          © {currentYear} AIKYAM Sports Science. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
