import React, { Component } from 'react';

import '../ComponentStyle/ClickablePicture.css';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  togglePicture = (event) => {
    this.setState((currentState) => {
      return { isClicked: !currentState.isClicked };
    });
  };
  render() {
    return (
      <img
        onClick={this.togglePicture}
        src={this.state.isClicked ? this.props.imgClicked : this.props.img}
        className="ClickablePicture"
        alt="Toggle glasses"
      />
    );
  }
}

export default ClickablePicture;
