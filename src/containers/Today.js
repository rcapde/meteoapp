import React, { Component } from 'react';
import '../css/Today.css';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

class Today extends Component {

  render() {
    const response = this.props.weather;
    const imatge = `./icons/${response.weather[0].icon}.png`

    console.log(response)
    return (
      <div className="Today">
        <div>
          <div><strong> {response.name}, {response.sys.country} </strong></div>
          <div> {dateFormat(new Date(response.dt*1000),"ddd, mmm, d").toString()} </div>
          <div className="temp"><h1>{Number((response.main.temp).toFixed(0))}º</h1><div className="Imatge"> <img src={imatge} width="150" height="150"/></div> </div>
          <div>{response.weather[0].description}</div>
        </div>
        <div className="table">
          <div className="row"><span>T.Màxima</span><span>{Number((response.main.temp_max).toFixed(0))}º</span></div>
          <div className="row"><span>T.Mínima</span><span>{Number((response.main.temp_min).toFixed(0))}º</span></div>
          <div className="row"><span>Humitat</span><span>{response.main.humidity}%</span></div>
          <div className="row"><span>Vent</span><span>{Number((response.wind.speed).toFixed(0))} km/h</span></div>
          <div className="row"><span>Alba</span><span>{dateFormat(new Date(response.sys.sunrise*1000),"HH:MM").toString()}</span></div>
          <div className="row"><span>Posta</span><span>{dateFormat(new Date(response.sys.sunset*1000),"HH:MM").toString()}</span></div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    weather: state.weather.data,
  };
}


export default connect(mapStateToProps,null)(Today);
