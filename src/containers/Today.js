import React, { Component } from 'react';
import '../css/Today.css';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { IndexLink, Link } from 'react-router';

class Today extends Component {

  render() {
    const response = this.props.weather;
    const img = `./${response.weather[0].icon}.jpg`;
    const imatge = `./icons/${response.weather[0].icon}.png`;
    const mapa= `https://maps.darksky.net/@temperature,${response.coord.lat},${response.coord.lon},6?embed=true&timeControl=true&fieldControl=true&defaultField=precipitation_rate&defaultUnits=_c&marker=${response.coord.lat},${response.coord.lon}&marker-name=${response.name}`;

    console.log(this.props.weather)
    return (
      <div className="todaycontent">
        <div className="subcontent">
          <div>
            <div><strong> {response.name}, {response.sys.country} </strong></div>
            <div> {dateFormat(new Date(response.dt*1000),"ddd, mmm, d").toString()} </div>
            <div className="temp">
              <h1>{Number((response.main.temp).toFixed(0))}º</h1>
              <div className="imatge">
                <div><img src={imatge} width="150" height="150"/></div>
                <div className="description"><span>{response.weather[0].description}</span></div>
              </div>
            </div>
          </div>
          <div className="table">
            <div className="detailstitle"><span>Weather details</span><span></span><span></span></div>
            <div className="rowA"><span>T.Màxima</span><span>{Number((response.main.temp_max).toFixed(0))}º</span><span></span></div>
            <div className="rowB"><span>T.Mínima</span><span>{Number((response.main.temp_min).toFixed(0))}º</span><span></span></div>
            <div className="rowA"><span>Humitat</span><span>{response.main.humidity}%</span><span></span></div>
            <div className="rowB"><span>Vent</span><span>{Number((response.wind.speed).toFixed(0))} km/h</span><span></span></div>
            <div className="rowA"><span>Alba</span><span>{dateFormat(new Date(response.sys.sunrise*1000),"HH:MM").toString()}</span><span></span></div>
            <div className="rowB"><span>Posta</span><span>{dateFormat(new Date(response.sys.sunset*1000),"HH:MM").toString()}</span><span></span></div>
          </div>
        </div>
        <div className="subcontentright">
          <div className="mapa">
            <span>Map</span>
            <iframe width='100%' frameBorder='0' src={mapa} ></iframe>
          </div>
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
