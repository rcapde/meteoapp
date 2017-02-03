import React, { Component } from 'react';
import '../css/Navbar.css';
import AutoComplete from 'material-ui/AutoComplete';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import SearchBar from './search_bar';

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

class Today extends Component {
  state = {
    searchText: '',
  };

 handleUpdateInput = (searchText) => {
   this.setState({
     searchText: searchText,
   });
 };

 handleNewRequest = () => {
   this.setState({
     searchText: '',
   });
 };

  render() {

    return (
      <div className="Navbar">
        <div><h1>ElTempscat</h1></div>
        <div className="menunav"><span>Forecasts</span></div>
        <div className="Searchbox">
          <SearchBar />
        </div>
      </div>
    );
  }
}
const styles = {
  textAreaStyle:{
    height:"38px",
    backgroundColor:"#e1e1e1",
    border:"1px solid #888",
    borderRadius:"3px",
    width:'180px',
    paddingLeft:'20px',
  },

  listStyle:{
    width:'200px',
  },

};

export default Today;
