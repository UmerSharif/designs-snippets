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
    console.log(contentRef.current.style.maxHeight);
  }, [contentRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };
  return (
    <div className="accordion__section">
      <button
        className={`accordion ${active ? "active" : ""}`}
        onClick={toogleActive}
      >
        <p className="accordion__title">{props.title}</p>
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
