import React, { Component } from 'react';

class SingleColorPicker extends Component {
  render() {
    return (
      <div className="align-left m-1">
        <span className="color-square"></span>
        <span>{this.props.color.toUpperCase()}:</span>
        <input
          type="number"
          min="0"
          max="255"
          onChange={this.props.onChangeHandle}
        />
      </div>
    );
  }
}

export default SingleColorPicker;
