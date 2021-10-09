import React, { Component } from 'react';

import '../ComponentStyle/FaceBook.css';
import profiles from '../data/berlin.json';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundToggle: false,
    };
  }
  createBox = () => {
    var elements = [];
    for (let i = 0; i < profiles.length; i++) {
      elements.push(
        <div className="Card black-box">
          <img src={profiles[i].img} alt="profile" />
          <div>
            <div>
              <strong>First name: </strong>
              <span>{profiles[i].firstName}</span>
            </div>
            <div>
              <strong>Last name: </strong>
              <span>{profiles[i].lastName}</span>
            </div>
            <div>
              <strong>Country: </strong>
              <span>{profiles[i].country}</span>
            </div>
            <div>
              <strong>Type: </strong>
              {(profiles[i].isStudent && <span>Student</span>) || (
                <span>Teacher</span>
              )}
            </div>
          </div>
        </div>
      );
    }
    return elements;
  };
  render() {
    return (
      <div className="m-1 Facebook">
        <button>All</button>
        <button>England</button>
        <button>USA</button>
        <button>Malaysia</button>
        <button>Germany</button>
        <button>...</button>
        {this.createBox()}
      </div>
    );
  }
}

export default Facebook;
