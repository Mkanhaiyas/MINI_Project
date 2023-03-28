import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";

export default function Menubar() {
  return (
    <div className="Main">
      <div className="logo">LOGoo</div>
      <div className="Menu-cart">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/login">Login/Register</Link>
        </div>
      </div>
    </div>
  );
}
