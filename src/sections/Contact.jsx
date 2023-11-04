import React from "react";
import ContactForm from "../components/ContactForm";
import { contactData } from "../constants";

const Contact = () => {
  return (
    <>
      <section
        id="contact-us"
        className="bg-white py-20 overflow-hidden relative z-10"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4 lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Get in Touch with Us
                </h2>
                <p className="text-base leading-relaxed mb-9 text-body-color">
                  Please feel free to call or email us, or use our contact form
                  to get in touch with us. We look forward to hearing from you!
                </p>
                {contactData.map((item, index) => (
                  <div key={index} className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <img src={item.image} alt={item.label} width={40} />
                    </div>
                    <div className="w-full">
                      <h3 className="mb-1 text-xl font-bold text-dark">
                        {item.label}
                      </h3>
                      <p className="text-base text-body-color">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="relative p-8 bg-pale-red rounded-lg shadow-lg sm:p-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
