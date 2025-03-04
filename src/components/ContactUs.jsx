import React, { useState } from "react";
import "../Styles/contactus.css";
import Navbar from "./Navbar";

function ContactUs() {
  const [formData, setFormData] = useState({
    senderEmail: "dixitshivam249@gmail.com",
    email: "",
    message: "",
    phone: undefined,
    name: "",
  });

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };
  // Mohobbat Kavi ek tarfa karke dekho, Dekhna 1 Muskaan bhi Vardaan lagegi
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread the current form data
      [name]: value, // Update the specific field
    });
  };

  // Handle form submission (send the data to your backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server or perform any action needed
    console.log("Form Data Submitted:", formData);
    sendEmail();

    // You can send the data to the server here using fetch or axios, etc.
  };
  return (
    <div className="ContactUs  text-black">
      <Navbar />
      <div className="my-1  titleContactUs w-100 text-center">
        <h1>Contact Us - We are with you</h1>
      </div>
      <div className="imagePanditJi ">
        <img
          src={require("../Assets/images/customersupport.png")}
          alt="CustomerSUpport"
          className="w-50 imgPanditJi"
        />
      </div>
      <div className="contactUsForm bg-secondary rounded  glassy w-50 my-2 mx-4">
        <div className="userdetails ">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData["name"]}
            placeholder="Enter your name here"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData["email"]}
            onChange={handleChange}
            placeholder="Enter Your Email here"
          />
          <label htmlFor="phone">Phone</label>

          <input
            type="tel"
            name="phone"
            className="name"
            onChange={handleChange}
            value={formData["phone"]}
            id="phone"
            placeholder="Enter the Phone Number"
          />
        </div>
        <div className="Message">
          <legend className="text-black">Message</legend>
          <textarea
            name="message"
            id="message"
            rows={4}
            onChange={handleChange}
            value={formData["message"]}
          ></textarea>
        </div>
        <input
          type="button"
          value="Submit"
          onClick={handleSubmit}
          className="btn btn-dark  mx-4"
        />
      </div>
    </div>
  );
}

export default ContactUs;
