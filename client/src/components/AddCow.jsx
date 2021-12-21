import React from 'react';
import App from './App.jsx';


class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCow: {
        name: '',
        desription: ''
      }
    }
  }
  onChangeName(e) {
    //debugger;
    e.preventDefault();
    //console.log(this.state);
    this.setState({newCow: { name: e.target.value , description: this.state.newCow.description}})
  }
  onChangeDesc(e) {
    this.setState({newCow: { name: this.state.newCow.name, description: e.target.value }});
  }

  addTo() {
    //console.log(this.state.newCow);
    this.props.addToCowList(this.state.newCow);
  }


  render() {
    return (
      <div className="add-bar">
        <label>Enter new cow </label>
        <input id="cow-name" value={this.state.newCow.name} onChange={this.onChangeName.bind(this)} placeholder='type in name'></input>
        <input id="cow-desc" value={this.state.newCow.description} required onChange={this.onChangeDesc.bind(this)} placeholder='type in description'></input>
        <button onClick={this.addTo.bind(this)}>Add Cow</button>
      </div>
    )
  }
}



export default AddCow;