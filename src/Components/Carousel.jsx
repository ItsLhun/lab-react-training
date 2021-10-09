import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  togglePicture = (event) => {
    if (event.target.name === 'Left') {
      this.setState((currentState) => {
        let newIndex;
        if (currentState.index - 1 < 0) {
          newIndex = currentState.index - 1 + this.props.imgs.length;
        } else {
          newIndex = currentState.index - 1;
        }
        return { index: newIndex };
      });
    } else {
      this.setState((currentState) => {
        let newIndex;
        if (currentState.index + 1 > this.props.imgs.length - 1) {
          newIndex = (currentState.index + 1) % this.props.imgs.length;
        } else {
          newIndex = currentState.index + 1;
        }
        return { index: newIndex };
      });
    }
  };
  render() {
    return (
      <div className="align-left m-1">
        <button onClick={this.togglePicture} name="Left">
          Left
        </button>
        <img src={this.props.imgs[this.state.index]} alt="Carousel" />
        <button onClick={this.togglePicture} name="Right">
          Right
        </button>
      </div>
    );
  }
}

export default Carousel;
