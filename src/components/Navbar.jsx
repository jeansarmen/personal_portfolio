import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
        style={{
          position: "sticky", // Ensures the navbar remains visible on scroll
          top: 0,             // Sticks the navbar to the top
          zIndex: 1000,       // Keeps it above other content
          backgroundColor: "", // Adds a background color to avoid transparency issues
        }}
      >
        <div className="left nav_items">.</div>
        <div className="right">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            OJT Experience
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            About Me
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
