import React from "react";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={require("../assets/design.png")} alt="" />
            <h3>Design</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={require("../assets/data.png")} alt="" />
            <h3>Code</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img src={require("../assets/startup.png")} alt="" />
            <h3>Speed</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              aut.
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
