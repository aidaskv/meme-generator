import React from "react";
import Upload from "./Upload";

class ButtonsMG extends React.Component {
  constructor(props) {
    super(props);
    this.revealCustomImage = this.revealCustomImage.bind(this);
    this.changeCustomImage = this.changeCustomImage.bind(this);
    this.downloadHandler = this.downloadHandler.bind(this);
    this.chooseFromCatalogHandler = this.chooseFromCatalogHandler.bind(this);
  }

  revealCustomImage() {
    this.props.revealCustomImage();
  }

  changeCustomImage(src) {
    this.props.changeCustomImage(src);
  }

  chooseFromCatalogHandler() {
    this.props.chooseFromCatalogHandler();
  }

  downloadHandler(event) {
    this.props.downloadHandler(event);
  }

  render() {
    return (
      <div className="mg-buttons-container">
        <button className="mg-button" onClick={this.downloadHandler}>
          Download Meme
        </button>
        <button className="mg-button" onClick={this.chooseFromCatalogHandler}>
          Choose From Catalog
        </button>
        <Upload
          onClick={this.revealCustomImage}
          onUpload={this.changeCustomImage}
        />
      </div>
    );
  }
}

export default ButtonsMG;
