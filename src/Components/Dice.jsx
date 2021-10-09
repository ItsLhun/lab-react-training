import React, { Component } from 'react';

import '../ComponentStyle/Dice.css';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '3',
      currentImg: `/img/dice${this.currentValue}.png`,
    };
  }
  rollDice = () => {
    let newValue = Math.floor(Math.random() * 6) + 1;
    setTimeout(() => {
      this.setState((currentState) => {
        return { currentValue: '-empty' };
      });
    }, 1);
    setTimeout(() => {
      this.setState((currentState) => {
        return { currentValue: newValue };
      });
    }, 1000);
  };

  render() {
    return (
      <div className="align-left m-1">
        <img
          onClick={this.rollDice}
          className="Dice"
          src={`/img/dice${this.state.currentValue}.png`}
          alt="Dice"
        />
      </div>
    );
  }
}

export default Dice;
