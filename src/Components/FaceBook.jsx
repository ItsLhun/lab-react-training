import React, { Component } from 'react';

import '../ComponentStyle/FaceBook.css';
import importedProfiles from '../data/berlin.json';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: this.getCountries(),
      profiles: [...importedProfiles],
      selectedCountry: null,
    };
  }
  getCountries = () => {
    const allCountries = new Set();
    for (let i = 0; i < importedProfiles.length; i++) {
      allCountries.add(importedProfiles[i].country);
    }
    return allCountries;
  };
  createBox = () => {
    var elements = [];
    for (let i = 0; i < this.state.profiles.length; i++) {
      elements.push(
        <div
          key={`${this.state.profiles[i].firstName}${this.state.profiles[i].lastName}${this.state.profiles[i].country}`}
          className={`Card black-box ${
            this.state.profiles[i].country === this.state.selectedCountry &&
            'selected-card'
          }`}
        >
          <img src={this.state.profiles[i].img} alt="profile" />
          <div>
            <div>
              <strong>First name: </strong>
              <span>{this.state.profiles[i].firstName}</span>
            </div>
            <div>
              <strong>Last name: </strong>
              <span>{this.state.profiles[i].lastName}</span>
            </div>
            <div>
              <strong>Country: </strong>
              <span>{this.state.profiles[i].country}</span>
            </div>
            <div>
              <strong>Type: </strong>
              {(this.state.profiles[i].isStudent && <span>Student</span>) || (
                <span>Teacher</span>
              )}
            </div>
          </div>
        </div>
      );
    }
    return elements;
  };
  handleCountryButton = (event, country) => {
    const buttonsAll = document.querySelectorAll('button');
    for (let button of buttonsAll) {
      button.classList.remove('selected-btn');
    }
    event.target.classList.add('selected-btn');
    this.setState((current) => {
      return { selectedCountry: country };
    });
  };
  createCountryButtons = () => {
    const buttons = [];
    for (let country of this.state.countries) {
      const countryBtn = (
        <button
          className="country-btn"
          onClick={(event) => {
            this.handleCountryButton(event, country);
          }}
        >
          {country}
        </button>
      );
      buttons.push(countryBtn);
    }
    return buttons;
  };
  render() {
    return (
      <div className="m-1 Facebook">
        {this.createCountryButtons()}
        {this.createBox()}
      </div>
    );
  }
}

export default Facebook;
