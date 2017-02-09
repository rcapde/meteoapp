import React, { Component } from 'react';
import '../css/Layout.css';
import Navbar from '../components/navbar';
import NewsFeed from './NewsFeed';
import Footer from '../components/footer';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux';

class Layout extends Component {

  render() {
    const bg = this.props.weather.weather[0].icon;
    const background = {
      backgroundImage: `url(./${bg}.jpg)`,
      backgroundsize: 'cover',
    }
    console.log(this.props.weather.weather[0].icon)
    return (
      <div className="Layout">
        <Navbar />
        <div className="body" style={background}>
        <div className="menu">
          <IndexLink to="/" activeClassName="active" style={{ textDecoration: 'none', color:'white', }}>Now</IndexLink>
          <Link to="franjes" activeClassName="active" style={{ textDecoration: 'none', color:'white', }}>3 hour </Link>
          <Link to="5dies" activeClassName="active" style={{ textDecoration: 'none', color:'white', }}>5 day</Link>
        </div>

          {this.props.children}

        </div>
          <div className="newsfeed">
            <NewsFeed />
          </div>
          <div className="footer">
          <Footer />
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


export default connect(mapStateToProps,null)(Layout);
