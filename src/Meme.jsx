import React from "react";
import MemeImage from "./MemeImage";

class Meme extends React.Component {
  constructor(props) {
    super(props);
    this.downloadHandler = this.downloadHandler.bind(this);
  }
  downloadHandler(event) {
    this.props.downloadHandler(event);
  }
  render() {
    return (
      <div className="mg-meme" ref={this.props.memeRef}>
        <MemeImage
          showCustom={this.props.showCustomImage}
          customSrc={this.props.customImageSrc}
        />
        <p className="mg-top">{this.props.topText}</p>
        <p className="mg-bottom">{this.props.bottomText}</p>
      </div>
    );
  }
}

export default Meme;
