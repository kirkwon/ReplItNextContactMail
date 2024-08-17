
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  // Function to encode the query parameters for the mailto link
  const encodeQueryParams = (params) => {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
  };

  const mailtoLink = `mailto:kirkwon@gmail.com?${encodeQueryParams({
    subject: name,
    body: comments.replace(/\n/g, "%0A"),
  })}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Image
            src="/placeholder-image.png"
            alt="Placeholder Image"
            width={500}
            height={400}
          />
        </div>
        <div className="col-md-6">
          <h1>Contact Form</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea
                className="form-control"
                id="comments"
                rows="3"
                value={comments}
                onChange={handleCommentsChange}
              ></textarea>
            </div>
            <button type="button" className="btn btn-primary" href={mailtoLink}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
