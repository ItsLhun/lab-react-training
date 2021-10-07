import React, { Component } from 'react';

import '../ComponentStyle/CreditCard.css';

class CreditCard extends Component {
  returnRightImg(type) {
    return type == 'Visa' ? '/img/visa.png' : '/img/master-card.svg';
  }

  render() {
    let {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;
    expirationMonth =
      expirationMonth < 10 ? '0' + expirationMonth.toString() : expirationMonth;

    return (
      <div
        style={{ backgroundColor: bgColor, color: color }}
        className="CreditCard"
      >
        <div>
          <img
            className="type"
            src={this.returnRightImg(type)}
            alt="type of card"
          />
        </div>
        <div>•••• •••• •••• {number.slice(number.length - 4)}</div>
        <div>
          Expires {expirationMonth}/{expirationYear % 2000}
          <span className="bank-name">{bank}</span>
        </div>
        <div>{owner}</div>
      </div>
    );
  }
}

export default CreditCard;
