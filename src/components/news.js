import React, { Component } from 'react';
import '../css/News.css';

class News extends Component {
  render() {
    console.log(this.props.image)
    const news={
      width: '100%',
      height: '100%',
      backgroundImage: `url(./${this.props.image})`,
      backgroundSize:'cover',
    }


    return (
      <div className="newcontent">
        <div className="title">
          <span>{this.props.titular}</span>
        </div>
        <div style={news} >
          <div className="cover">
            <span className="titular">{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}


export default News;
