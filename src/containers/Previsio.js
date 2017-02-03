import React, { Component } from 'react';
import '../css/Previsio.css';
import Card from '../components/card';
import { connect } from 'react-redux';
import Franjes from './Franjes';

class Previsio extends Component {

  render() {

    const response = this.props.franjes;
    console.log(response)


    return (
      <div className="pfcontent">
        <div className="pfciutat"><span></span></div>
        <div className="pfranjes">
        NOT READY YET
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


export default connect(mapStateToProps,null)(Previsio);
