import React from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import ButtonsMG from "./ButtonsMG";
import Meme from "./Meme";

class CustomImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCustomImage: false,
      customImageSrc: "./images/nofile.jpg"
    };
    this.memeRef = React.createRef();
    this.revealCustomImage = this.revealCustomImage.bind(this);
    this.changeCustomImage = this.changeCustomImage.bind(this);
    this.downloadHandler = this.downloadHandler.bind(this);
    this.chooseFromCatalogHandler = this.chooseFromCatalogHandler.bind(this);
  }

  revealCustomImage() {
    this.setState({ showCustomImage: true });
  }

  changeCustomImage(src) {
    this.setState({ customImageSrc: src });
  }

  chooseFromCatalogHandler() {
    this.setState({ showCustomImage: false });
  }

  downloadHandler(event) {
    const node = this.memeRef.current;
    event.preventDefault();
    domtoimage.toBlob(node, { width: 400, height: 400 }).then(function(blob) {
      saveAs(blob, "myImage.png");
    });
  }

  render() {
    return (
      <div>
        <Meme
          showCustomImage={this.state.showCustomImage}
          customImageSrc={this.state.customImageSrc}
          memeRef={this.memeRef}
          downloadHandler={this.downloadHandler}
          topText={this.props.topText}
          bottomText={this.props.bottomText}
        />
        <ButtonsMG
          revealCustomImage={this.revealCustomImage}
          changeCustomImage={this.changeCustomImage}
          downloadHandler={this.downloadHandler}
          chooseFromCatalogHandler={this.chooseFromCatalogHandler}
        />
      </div>
    );
  }
}

export default CustomImageInput;
