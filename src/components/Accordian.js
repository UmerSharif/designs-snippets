import React, { useRef, useState, useEffect } from "react";
import Chevron from "./Chevron";
import "./Accordian.scss";
export default function Accordian(props) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  //taking server id

  // const x = props.children.props.children.map(d => {
  //   console.log(typeof d.props.children);
  //   return d.props.children;
  // });
  // console.log(x[0][1]);

  return (
    <div className="accordion__section">
      <button
        className={`accordion ${active ? "active" : ""}`}
        onClick={toogleActive}
      >
        <p className="accordion__title">View Server Info</p>
        <Chevron
          className={active ? "accordion__icon rotate" : "accordion__icon"}
          width={10}
          fill={"#777"}
        />
      </button>
      <div ref={contentRef} className="accordion__content">
        {props.children}
      </div>
    </div>
  );
}
