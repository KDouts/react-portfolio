import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    setErrorMessage("");

    setResponseMessage("");

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email))
      return setErrorMessage("Please enter a valid email.");
    if (!name) return setErrorMessage("Please enter your name");
    if (!message) return setErrorMessage("Please enter a message");

    window.open('mailto:hunterw.dstest@gmail.com?subject=subject&body=body');

    setResponseMessage("Thank you for reaching out, I will be in touch.");

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="Contact" className="main-container">
      <aside className="main-header" style={{ textAlign: "center" }}>
        <h2>Contact Me</h2>
      </aside>

      <article className="main-body">
        <div className="container">
          <div className="row">
            <form className="form">
              <div className="form-group my-3">
                <label htmlFor="exampleInputEmail1">Email address:</label>
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="exampleInputPassword1">Name:</label>
                <input
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="exampleFormControlTextarea1">Message:</label>
                <textarea
                  value={message}
                  onChange={handleInputChange}
                  name="message"
                  className="form-control "
                  rows="3"
                ></textarea>
              </div>
              <button
                type="button"
                className="button my-3"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {responseMessage && (
          <div className="row w-100 text-center">
            <p>{responseMessage}</p>
          </div>
        )}
        {errorMessage && (
          <div className="row w-100 text-center">
            <p>{errorMessage}</p>
          </div>
        )}
      </article>
    </section>
  );
};

export default Contact;
