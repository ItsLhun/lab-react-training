import React, { Component } from 'react';

import '../ComponentStyle/IdCard.css';

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="Card black-box">
        <img src={picture} alt="profile" />
        <div>
          <div>
            <strong>First name: </strong>
            <span>{firstName}</span>
          </div>
          <div>
            <strong>Last name: </strong>
            <span>{lastName}</span>
          </div>
          <div>
            <strong>Gender: </strong>
            <span>{gender}</span>
          </div>
          <div>
            <strong>Height: </strong>
            <span>{height / 100}m</span>
          </div>
          <div>
            <strong>Birth: </strong>
            <span>{birth.toDateString()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default IdCard;
