import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header id="header">
      <div>
        <div className="description">
          Do you want to <br />
          Test yourself ?
        </div>
        <div className="button">
          <button onClick={() => navigate("/login")}>Register Now</button>
        </div>
      </div>
      <div className="LayGirl">
        <img src="girl2.png" alt="Girl" />
      </div>
    </header>
  );
}
