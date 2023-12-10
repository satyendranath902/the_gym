import React from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 'Contact number',
      count: 0
    }

    this.changeMessage = this.changeMessage.bind(this);
    this.changeHideMessage = this.changeHideMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      number: '8296454255',
      count: this.state.count + 1,
    }  
    )
    console.log('Before Callback value', this.state.count);
  }

  changeHideMessage() {
    this.setState({
        number: 'Contact number',
    }  
    )
   
  }

  render() {
    return (
      <div >
        <button onClick={this.changeMessage}>show number</button>
        <button onClick={this.changeHideMessage}>hide number</button>
        <h3>{this.state.number}</h3>
        <h4>100 ft road, Gunjur</h4>
        <h2>Number of Visitor:- {this.state.count}</h2>
      </div>
    );
  }
}

export default Contact;