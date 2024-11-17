import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      // Validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="card border-0">
        <div className="row g-0 align-items-center">
          {/* Image Section */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
              alt="contact"
              className="img-fluid"
            />
          </div>
          {/* Form Section */}
          <div className="col-md-6">
            <div className="card-body p-4">
              <h5 className="mb-4 text-center">Contact Us</h5>
              <p className="text-center mb-4">
                Connect with us on:
                <BsLinkedin color="blue" size={24} className="ms-2" />
                <BsGithub color="black" size={24} className="ms-2" />
                <BsFacebook color="blue" size={24} className="ms-2" />
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Write your message"
                    rows="4"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
