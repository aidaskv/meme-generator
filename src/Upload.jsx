import React from "react";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  upload(uploadEvent) {
    if (uploadEvent.target.files && uploadEvent.target.files[0]) {
      const reader = new FileReader();
      reader.onload = readerEvent => {
        this.props.onUpload(readerEvent.target.result);
      };
      reader.readAsDataURL(uploadEvent.target.files[0]);
    }
  }

  render() {
    return (
      <input
        className="mg-input-file mg-button"
        type="file"
        onClick={this.props.onClick}
        onChange={this.upload}
      />
    );
  }
}

export default Upload;
