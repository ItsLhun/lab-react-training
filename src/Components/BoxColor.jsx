import React, { Component } from 'react';
import '../ComponentStyle/BoxColor.css';

class BoxColor extends Component {
  componentToHex(c) {
    let hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  rgbToHex(r, g, b) {
    return (
      '#' +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }
  textColorPick(r, g, b) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 180 ? '#000000' : '#ffffff';
  }
  render() {
    const { r, g, b } = this.props;
    return (
      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          color: this.textColorPick(r, g, b),
        }}
        className="black-box BoxColor"
      >
        rgb({`${r}, ${g}, ${b}`})
        <br />
        {this.rgbToHex(r, g, b)}
      </div>
    );
  }
}

export default BoxColor;
