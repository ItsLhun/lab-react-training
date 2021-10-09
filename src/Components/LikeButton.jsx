import React, { Component } from 'react';

import '../ComponentStyle/LikeButton.css';

class LikeButton extends Component {
  constructor() {
    super();
    this.colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    this.state = {
      count: 0,
      color: this.colors[0],
    };
  }
  handleIncrement = (event) => {
    this.setState((currentState) => {
      let randomColor =
        this.colors[Math.floor(Math.random() * this.colors.length)];
      return { count: currentState.count + 1, color: randomColor };
    });
  };
  render() {
    return (
      <button
        onClick={this.handleIncrement}
        style={{ backgroundColor: this.state.color }}
        className="LikeButton"
      >
        {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
