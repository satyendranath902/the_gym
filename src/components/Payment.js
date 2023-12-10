import React from 'react';
import qr from '../qr.jpeg';

class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 'GooglePay/PhonePay',
      count: 0
    }
  }

  changeMessage() {
    this.setState({
      number: '8296454255',
      count: this.state.count + 1,
    }  
    )
    console.log('Before Callback value', this.state.count);
  }

  render() {
    return (
      <div >
        <button onClick={() => this.changeMessage()}>Display number</button>
        <h3>{this.state.number}</h3>
        <h2>Number of Visitor:- {this.state.count}</h2>
        <img class='photo' src={qr} alt="app-logo" />
      </div>
    );
  }
}

export default Payment;