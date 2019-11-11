import React from "react";
import "./Darkmode.scss";
export default function Darkmode() {
  return (
    <>
      <h1>darkmode</h1>
      <section className="intro">
        <h1>Amazing Product</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          rem molestias ipsum nulla libero optio.
        </p>
        <div className="btn-group">
          <a href="#" className="btn btn-accent">
            Purchase
          </a>
          <a href="#" className="btn btn-secondary">
            More info
          </a>
        </div>
      </section>
    </>
  );
}
