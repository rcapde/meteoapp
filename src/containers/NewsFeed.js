import React, { Component } from 'react';
import '../css/NewsFeed.css';
import News from '../components/news';

class NewsFeed extends Component {
  render() {
    return (
      <div className="Feed">
        <News titular={'BREAKING NEWS'} text={'Big Snow in China sites pandas'} image={'panda.jpg'}/>
        <News titular={'BREAKING NEWS'} text={'Rio to break records on hottest summer'} image={'janeiro.jpg'}/>
        <News titular={'INTERESTING FACTS'} text={'Tour inside the meteosat'} image={'meteosat.jpg'}/>
        <News titular={'REPORT'} text={'Climate Change facts'} image={'iceberg.jpg'}/>
      </div>
    );
  }
}

export default NewsFeed;
