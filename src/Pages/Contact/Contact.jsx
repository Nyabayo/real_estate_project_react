import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Email: contact@ernrealestate.com</p>
      <p>Phone: +254 700 123 456</p>
      <p>Address: Nairobi, Kenya</p>

      {/* Booking Form Section */}
      <div className="booking-form">
        <h3>Book an Inspection</h3>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Preferred Date:</label>
          <input type="date" required />

          <label>Message:</label>
          <textarea placeholder="Write your message" rows="4" required></textarea>

          <button type="submit">Book Inspection</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
