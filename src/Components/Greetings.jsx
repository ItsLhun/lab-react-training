import React, { Component } from 'react';

import '../ComponentStyle/Greetings.css';

class Greetings extends Component {
  renderLanguageSwitch(lang) {
    switch (lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  }
  render() {
    const { lang } = this.props;
    return (
      <div className="Greeting black-box">
        {this.renderLanguageSwitch(lang)} {this.props.children}
      </div>
    );
  }
}

export default Greetings;
