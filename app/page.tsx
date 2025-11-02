"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  // Function to encode the query parameters for the mailto link
  const encodeQueryParams = (params: Record<string, string>) => {
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
      <SignedOut>
        <div className="signed-out-container">
          <div className="signed-out-card">
            <div className="icon-wrapper">
              <svg className="lock-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1>Welcome to Our Contact Form</h1>
            <p>Please sign in to access and send us your message</p>
            <div className="features-list">
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Secure Authentication</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Easy Message Sending</span>
              </div>
              <div className="feature-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
      
      <SignedIn>
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
                  rows={3}
                  value={comments}
                  onChange={handleCommentsChange}
                ></textarea>
              </div>
              <a href={mailtoLink} className="btn btn-primary">
                Send
              </a>
            </form>
          </div>
        </div>
      </SignedIn>
    </div>
  );
}
