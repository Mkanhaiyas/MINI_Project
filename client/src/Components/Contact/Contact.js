import React from "react";
import { ImLocation } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="subContact">
        <div className="subContact1">
          <div className="con-title">
            Contact Us
            <p>
              Fill up the form and our Team will get back
              <br />
              to you within 24 hours
            </p>
          </div>
          <div className="details">
            <div className="p">
              <IoIosCall style={{ padding: "0.5rem", color: "dodgerblue" }} />
              <span>+0123 4567 8910</span>
            </div>
            <div className="p">
              <GrMail style={{ padding: "0.5rem", color: "dodgerblue" }} />
              logoo@gmail.com
            </div>
            <div className="p">
              <ImLocation style={{ padding: "0.5rem", color: "dodgerblue" }} />
              102 Street 2714 Kanakiya
            </div>
          </div>
          <div className="socialMedia">
            <div className="s">
              <FaFacebookF
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </div>
            <div className="s">
              <FiTwitter
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </div>
            <div className="s">
              <FiInstagram
                style={{
                  fontSize: "1.5rem",
                }}
              />
            </div>
          </div>
        </div>
        <div className="subContact2">
          <form>
            <div>
              Your Name
              <input type="text" style={{ color: "black" }} required />
              Mail
              <input type="email" required />
              Message
              <textarea style={{ height: "8rem" }} required />
            </div>
            <div>
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
