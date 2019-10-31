import React from "react";

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
    </div>
  );
}
