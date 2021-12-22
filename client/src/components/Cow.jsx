import React from 'react';
import Cows from './Cows.jsx';
import App from './App.jsx';


class Cow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'cowDesc': false
    }
  }
  showDesc() {
    console.log(this.state.cowDesc);
    const {cowDesc} = this.state
    this.setState({'cowDesc': !cowDesc});
  }

  render() {
    // console.log(this.props.cow_name);
    if (this.state.cowDesc) {
      return (
        <ul>
          <span onClick={this.showDesc.bind(this)}>Hi! My name is {this.props.cow_name}! </span>
          <div>I am {this.props.cow_desc}</div>
        </ul>
      )
    } else {
      return (
        <ul>
          <span onClick={this.showDesc.bind(this)}>Hi! My name is {this.props.cow_name}! </span>
        </ul>
      )
    }
  }
}


export default Cow;