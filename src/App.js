import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Slideshow from "./components/Slideshow/Slideshow";
import data from "./data";

function App() {
  const getData = data.map((wonder) => {
    return (
      <Slideshow
        title={wonder.title}
        text={wonder.description}
        img={wonder.photo}
        id={wonder.id}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      {getData}
    </div>
  );
}

export default App;
