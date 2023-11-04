import axios from "axios";
import { useState } from "react";
import { contactEmail, contactHome, contactPhone } from "../assets/icons";
import { contactData } from "../constants";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_3gktniv";
    const templateId = "template_fmumfbt";
    const publicKey = "EEJN93RUUPokmo39h";

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_number: phoneNumber,
        to_name: "Aikyam Sports Science",
        message: message,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
      setMessageSent(true);
    } catch (error) {
      console.error(error);
    }
  };

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
                <span className="block mb-4 text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base leading-relaxed mb-9 text-body-color">
                  Please feel free to call or email us,or use our contact form
                  to get in touch with us. We look forward to hearing from you!
                </p>
                {contactData.map((item, index) => (
                  <div key={index} className="mb-8 flex w-full max-w-[370px]">
                    <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                      <img src={item.image} alt={item.label} width={40} />
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark">
                        {item.label}
                      </h4>
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
                <form onSubmit={handleSubmit}>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {isMessageSent && (
                    <p className="text-green-600 border border-solid border-green-600 p-2 my-2 text-xs text-center">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-white transition border rounded border-primary bg-primary hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, onChange, value }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name, onChange, value }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};
