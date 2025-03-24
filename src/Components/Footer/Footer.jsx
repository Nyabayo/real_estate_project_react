import React from "react";
import "./Footer.css";

// Footer Component
const Footer = () => {
  // Function to scroll back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Real Estate. All Rights Reserved.</p>
      <button className="scroll-top" onClick={scrollToTop}>
        ↑ Back to Top
      </button>
    </footer>
  );
};

export default Footer;
