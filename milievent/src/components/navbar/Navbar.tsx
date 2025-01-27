import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <nav style={{ display: "flex", gap: "10px", padding: "10px", background: "#f0f0f0" }}>
        <Link to="/">Home</Link>
        <Link to="/my-events">event</Link>
        <Link to="/new-event">New Event</Link>
        <Link to="/choose-action">Choose Action</Link>
    </nav>
    </div>
  );
};
export default Navbar;