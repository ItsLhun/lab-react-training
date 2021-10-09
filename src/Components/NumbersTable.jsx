import React, { Component } from 'react';

import '../ComponentStyle/NumbersTable.css';

class NumbersTable extends Component {
  createBox = () => {
    var elements = [];
    for (let i = 1; i <= this.props.limit; i++) {
      let color = i % 2 === 0 ? 'red' : 'white';
      elements.push(
        <li className="box" key={i} style={{ backgroundColor: color }}>
          {i}
        </li>
      );
    }
    return elements;
  };
  render() {
    return <ul className="m-1 NumbersTable">{this.createBox()}</ul>;
  }
}

export default NumbersTable;
