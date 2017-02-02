import React, { Component } from 'react';
import '../css/App.css';
import Layout from './Layout';
import Today from './Today';
import Franjes from './Franjes';
import Previsio from './Previsio';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { fetchNow } from '../actions/index';
import { fetchFranjes } from '../actions/index';

import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

class App extends Component {

  componentDidMount(){
    this.props.fetchNow('Tokyo');

  }

  render() {
    if(!this.props.weather){
      return(
        <Franjes />
      );
    }
    console.log(this.props.franjes)


    return (
      <MuiThemeProvider>
        <Router history={hashHistory}>
          <Route path="/" component={Layout}>
            <IndexRoute path="ara" component={Today}/>
            <Route path="franjes" component={Franjes}/>
            <Route path="5dies" component={Previsio}/>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}



function mapStateToProps(state) {
  return {
    weather: state.weather.data,
    franjes: state.franjes.data,

  };
}


export default connect(mapStateToProps,actions)(App);
