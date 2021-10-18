import React, { Component } from 'react';

import '../ComponentStyle/SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      nationality: 'en',
      emailCorrect: false,
      passCorrect: false,
    };
  }
  displayElements = () => {
    let greeting;
    switch (this.state.nationality) {
      case 'en':
        greeting = 'Hello';
        break;
      case 'de':
        greeting = 'Hallo';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
      default:
        greeting = 'Error';
    }
    return (
      <div className="align-left m-1">
        <p>{greeting}</p>
        <p>Your email address is: {this.state.email}</p>
        <p>{`Your email address is ${
          this.state.emailCorrect ? 'correct' : 'not correct'
        }`}</p>
      </div>
    );
  };
  validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  validatePassword = (pass) => {
    return pass.length > 5;
  };
  handleNationalityChange = (event) => {
    const selected = event.target.value;
    this.setState(() => {
      return { nationality: selected };
    });
  };
  handleEmailChange = (event) => {
    const currentInput = event.target.value;
    const isValid = this.validateEmail(currentInput);
    this.setState(() => {
      return { email: currentInput, emailCorrect: isValid };
    });
  };
  handlePasswordChange = (event) => {
    const currentInput = event.target.value;
    const isValid = this.validatePassword(currentInput);
    this.setState(() => {
      return { password: currentInput, passCorrect: isValid };
    });
  };
  passwordIsValid = () => {
    return this.state.password !== '' && this.state.password.length > 5;
  };
  render() {
    return (
      <form className="m-1 SignupPage">
        <div className="input-wrapper">
          <label>Email</label>
          <input
            className={`${
              this.state.emailCorrect && this.state.email.length > 0
                ? 'valid-email'
                : !this.state.emailCorrect && this.state.email.length > 0
                ? 'invalid-email'
                : null
            }`}
            type="email"
            onChange={this.handleEmailChange}
          />
          {this.state.emailCorrect && this.state.email.length > 0 ? (
            <p className="input-warning green-color">You typed a valid email</p>
          ) : !this.state.emailCorrect && this.state.email.length > 0 ? (
            <p className="input-warning red-color">
              You typed an invalid email
            </p>
          ) : null}
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input
            type="password"
            minLength="5"
            onChange={this.handlePasswordChange}
            className={`${
              this.state.passCorrect && this.state.password.length > 0
                ? 'valid-email'
                : !this.state.passCorrect && this.state.password.length > 0
                ? 'invalid-email'
                : null
            }`}
          />
          {!this.passwordIsValid() && this.state.password.length > 0 && (
            <p className="input-warning red-color">Your password is too weak</p>
          )}
        </div>
        <div className="input-wrapper">
          <label>Nationality</label>
          <select onChange={this.handleNationalityChange}>
            <option value="en">British</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>
        <button>Sign up</button>
        <br />
        {this.displayElements()}
      </form>
    );
  }
}

export default SignupPage;
