import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div><h4>copyright</h4></div>
        <div className="contact">
          <h4>Contact me</h4>
          <span>Ricard Capdevila</span>
          <a href="http://www.rcapde.cat">OnSite</a>
        </div>
      </div>
    );
  }
}

export default Footer;
