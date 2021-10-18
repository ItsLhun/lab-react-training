import React, { Component } from 'react';
import Rating from './Rating';

import '../ComponentStyle/DriverCard.css';

class DriverCard extends Component {
  render() {
    const { name, rating, img, car } = this.props;
    return (
      <div className="m-1 DriverCard">
        <img src={img} alt="driver" />
        <div className="right-side-card">
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    );
  }
}

export default DriverCard;
