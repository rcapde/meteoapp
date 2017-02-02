import React, { Component } from 'react';
import '../css/card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <div>Thu, Feb, 2</div>
          <div className="templogo"><span className="ctemp">27º</span><span><img src="./icons/01d.png" width='100' height='100'/></span></div>
          <div className="descripcio">clear sky</div>
          <div className="dades">
            <div className="cardrow"><span>humitat</span><span>50%</span></div>
            <div className="cardrow"><span>Vent</span><span>2kmh</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
