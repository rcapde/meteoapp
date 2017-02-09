import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';
import '../css/Navbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchNow(this.state.term);
    this.props.fetchFranjes(this.state.term);
    this.props.fetchPrevisio(this.state.term);

    //this.props.currentWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Go for it! Enter a city..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
      </form>
    );
  }
}


export default connect(null, actions)(SearchBar);
