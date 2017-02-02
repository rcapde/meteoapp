import React, { Component } from 'react';
import '../css/Franjes.css';
import Card from '../components/card';
import { connect } from 'react-redux';

class Previsio extends Component {

  render() {

    const response = this.props.franjes;
    console.log(this.props.franjes)

    return (
      <div className="fcontent">
        <div className="fciutat"><span>Barcelona,ES</span></div>
        <div className="franjes">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
