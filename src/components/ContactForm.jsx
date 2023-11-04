import React from "react";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageSent, setMessageSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [nameError, setNameError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; // assuming a 10-digit phone number
    return phoneRegex.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else {
      setEmailError("");
    }

    if (!phoneNumber.trim()) {
      setPhoneNumberError("Phone number is required");
      return;
    } else {
      setPhoneNumberError("");
    }

    // Validate email and phone number
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError("Invalid phone number");
      return;
    } else {
      setPhoneNumberError("");
    }

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
    <form onSubmit={handleSubmit}>
      <ContactInputBox
        type="text"
        name="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameError && <p className="text-red-500 text-xs mb-3">{nameError}</p>}
      <ContactInputBox
        type="text"
        name="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && (
        <p className="text-red-500 my-2 text-xs mb-3">{emailError}</p>
      )}
      <ContactInputBox
        type="text"
        name="phone"
        placeholder="Your Phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {phoneNumberError && (
        <p className="text-red-500 my-2 text-xs mb-3">{phoneNumberError}</p>
      )}
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
  );
};

export default ContactForm;

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
      <div className="mb-4">
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
