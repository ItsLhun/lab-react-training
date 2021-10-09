import React, { Component } from 'react';

import '../ComponentStyle/Rating.css';

class Rating extends Component {
  processStars() {
    let numberBlack = Math.round(this.props.children);
    return '★'.repeat(numberBlack) + '☆'.repeat(5 - numberBlack);
  }
  render() {
    return <div className="align-left m-1 Rating">{this.processStars()}</div>;
  }
}

export default Rating;
