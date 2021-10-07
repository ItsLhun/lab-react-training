import React, { Component } from 'react';

class Random extends Component {
  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  render() {
    const { min, max } = this.props;
    return (
      <div className="black-box align-left">
        Random value between {min} and {max} {'=>'}{' '}
        {this.getRandomNum(min, max)}
      </div>
    );
  }
}

export default Random;
