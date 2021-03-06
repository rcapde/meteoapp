import React, { Component } from 'react';
import '../css/Franjes.css';
import LargeCard from '../components/largecard';
import { connect } from 'react-redux';
import Previsio from './Previsio';
import dateFormat from 'dateformat';
import { IndexLink, Link } from 'react-router';

class Franjes extends Component {

  render() {

    const response = this.props.franjes;

      if(!this.props.franjes){
        return(
          <Previsio />
        );
      }

      const Lcards = response.list.map((item)=> {
      return(
              <LargeCard dt={item.dt} main={item.main} weather={item.weather} />
            );
        })

    return (
      <div className="fcontent">
        <div className="fciutat"><span>{response.city.name}, {response.city.country} - franjes de 3 hores</span></div>
        <div className="franjes">
          {Lcards}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    franjes: state.franjes.data,

  };
}


export default connect(mapStateToProps,null)(Franjes);
