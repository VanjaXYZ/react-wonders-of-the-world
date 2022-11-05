import React from "react";

import "./slideshow.css";

function Slideshow(props) {
  return (
    <section className="slideshow">
      <h2>{props.title}</h2>
      <img src={`../../img/${props.img}`} alt="" id={props.id} />
      <p>{props.text}</p>
    </section>
  );
}

export default Slideshow;
