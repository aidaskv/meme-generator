import React from "react";
import Gallery from "./Gallery";

function MemeImage(props) {
  let image;
  if (props.showCustom) {
    image = <img src={props.customSrc} alt="Meme" />;
  } else {
    image = <Gallery />;
  }
  return image;
}

export default MemeImage;
