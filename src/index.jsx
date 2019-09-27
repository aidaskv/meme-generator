import React from "react";
import ReactDOM from "react-dom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import "./index.scss";
import InputTextRow from "./InputTextRow";
import ButtonsMG from "./ButtonsMG";
import Meme from "./Meme";

class MemeGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: "",
      showCustomImage: false,
      customImageSrc: "./images/nofile.jpg"
    };
    this.memeRef = React.createRef();
    this.changeTopText = this.changeTopText.bind(this);
    this.changeBottomText = this.changeBottomText.bind(this);
    this.revealCustomImage = this.revealCustomImage.bind(this);
    this.changeCustomImage = this.changeCustomImage.bind(this);
    this.downloadHandler = this.downloadHandler.bind(this);
    this.chooseFromCatalogHandler = this.chooseFromCatalogHandler.bind(this);
  }

  changeTopText(text) {
    this.setState({ topText: text });
  }

  changeBottomText(text) {
    this.setState({ bottomText: text });
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
      saveAs(blob, "memeImage.png");
    });
  }

  render() {
    return (
      <div className="mg-container">
        <h1>Meme Generator</h1>
        <div className="mg-text-inputs">
          <InputTextRow
            textLabel="Top text input:"
            changeText={this.changeTopText}
          />
          <InputTextRow
            textLabel="Bottom text input:"
            changeText={this.changeBottomText}
          />
        </div>
        <div className="mg-meme-container">
          <Meme
            showCustomImage={this.state.showCustomImage}
            customImageSrc={this.state.customImageSrc}
            memeRef={this.memeRef}
            downloadHandler={this.downloadHandler}
            topText={this.state.topText}
            bottomText={this.state.bottomText}
          />
        </div>
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

ReactDOM.render(<MemeGenerator />, document.getElementById("root"));
