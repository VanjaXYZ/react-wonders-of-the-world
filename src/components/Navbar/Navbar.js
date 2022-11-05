import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>7 Wonders Of The World</h1>
      <div className="nav--links">
        <a href="#chichen-itza">Chitchen Itza</a>
        <a href="#christ">Christ the Redeemer</a>
        <a href="#colloseum">Colloseum</a>
        <a href="#machu-picchu">Machu Picchu</a>
        <a href="#petra">Petra</a>
        <a href="#taj-mahal">Taj Mahal</a>
        <a href="#the-great-wall">The Great Wall</a>
      </div>
    </nav>
  );
}

export default Navbar;
