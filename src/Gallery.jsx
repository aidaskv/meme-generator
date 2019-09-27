import React from "react";
import AliceCarousel from "react-alice-carousel";

function Gallery() {
  const examples = [
    "/images/example1.jpg",
    "/images/example2.jpg",
    "/images/example3.jpg",
    "/images/example4.jpg",
    "/images/example5.jpg"
  ];
  return (
    <AliceCarousel>
      {examples.map((example, index) => (
        <img key={index} src={example} alt="Default Meme" />
      ))}
    </AliceCarousel>
  );
}

export default Gallery;
