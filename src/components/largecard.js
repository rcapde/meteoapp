import React, { Component } from 'react';
import '../css/largecard.css';
import dateFormat from 'dateformat';

class LargeCard extends Component {
  render() {
    const imatge = `./icons/${this.props.weather[0].icon}.png`

    return (
      <div className="largecard">
        <div className="lcontent">
          <div className="ldate"><span>{dateFormat(new Date(this.props.dt*1000),"HH:MM").toString()}</span></div>
          <div className="ltemp"><span className="lctemp">{Number((this.props.main.temp).toFixed(0))}º</span></div>
          <div className="llogo" ><span><img src={imatge} width='65' height='65'/></span></div>
          <div className="ldescripcio"><span>{this.props.weather[0].description}</span></div>
          <div className="ldades">
            <span>Humidity</span><span>{this.props.main.humidity}%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default LargeCard;
