import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';
import '../ComponentStyle/RGBColorPicker.css';

class RGBColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      rValue: 0,
      gValue: 0,
      bValue: 0,
    };
  }

  handleInputChange = () => {};

  render() {
    return (
      <div className="align-left m-1">
        <SingleColorPicker
          color="r"
          value={this.state.rValue}
          onChangeHandle={this.handleInputChange}
        />
        <SingleColorPicker
          color="g"
          value={this.state.gValue}
          onChangeHandle={this.handleInputChange}
        />
        <SingleColorPicker
          color="b"
          value={this.state.bValue}
          onChangeHandle={this.handleInputChange}
        />
        <div className="align-left m-1">
          <span
            className="color-square"
            style={{
              backgroundColor: `rgb(${this.state.rValue},${this.state.gValue}, ${this.state.bValue})`,
            }}
          ></span>
          <span>{`rgb(${this.state.rValue},${this.state.gValue}, ${this.state.bValue})`}</span>
        </div>
      </div>
    );
  }
}

export default RGBColorPicker;
