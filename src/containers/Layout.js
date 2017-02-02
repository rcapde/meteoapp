import React, { Component } from 'react';
import '../css/Layout.css';
import Navbar from '../components/navbar';
import NewsFeed from './NewsFeed';
import Footer from '../components/footer';
import { IndexLink, Link } from 'react-router';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="menu">
            <IndexLink to="/" activeClassName="active" style={{ textDecoration: 'none', color:'white', }}>Ara</IndexLink>
            <Link to="franjes" activeClassName="active" style={{ textDecoration: 'none', color:'white', }}>Franjes 1h</Link>
            <Link to="5dies" activeClassName="active" style={{ textDecoration: 'none', color:'white', }}>5 dies</Link>
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

export default Layout;
