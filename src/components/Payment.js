import React from 'react';
import qr from '../qr.jpeg';

class Payment extends React.Component {
  render() {
    return (
      <div >
        <img class='photo' src={qr} alt="app-logo" />
      </div>
    );
  }
}

export default Payment;