import React from "react";

class InputTextRow extends React.Component {
  handleChange(e) {
    const text = e.target.value;
    this.props.changeText(text);
  }

  render() {
    return (
      <div className="mg-text-input">
        <p>{this.props.textLabel}</p>
        <textarea type="text" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default InputTextRow;
