import { close, menu, phone } from "../assets/icons";
import { logo, logo_text } from "../assets/images";
import { navLinks } from "../constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = () => {
    setActive("");
    setToggle(false);
  };

  return (
    <header className="fixed bg-white w-full z-50">
      <nav className="py-4 flex items-center justify-between sm:padding-x px-6">
        <a href="/" className="flex items-center">
          <img src={logo} alt="AIKYAM Logo" className="w-12 md:w-20 lg:w-16 " />
          <img
            src={logo_text}
            alt="AIKYAM Text Logo"
            className="w-20 md:w-32 lg:w-32"
          />
        </a>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-8 max-lg:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:underline font-montserrat leading-normal text-lg text-slate-gray"
                  onClick={() => handleLinkClick(link.label)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="hidden sm:block" href="tel:+91 70193 86664">
            <Button label="Join Now" iconURL={phone} />
          </a>
          <div className="hidden max-lg:block">
            <img
              src={toggle ? close : menu}
              alt="Hamburger"
              width={25}
              height={25}
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl lg:hidden border border-solid border-primary`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.label}
                  className={`font-medium cursor-pointer text-[16px] mb-4 sm:mb-2 ${
                    index !== navLinks.length - 1 ? "" : "mb-0"
                  } ${
                    active === nav.label ? "text-primary" : "text-dimWhite"
                  } `}
                  onClick={() => handleLinkClick()}
                >
                  <a href={`${nav.href}`}>{nav.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
