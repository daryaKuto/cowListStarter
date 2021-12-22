import React from 'react';
import App from './App.jsx';


class AddCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newCow: {
        cow_name: '',
        cow_desc: ''
      }
    }
  }
  onChangeName(e) {
    //debugger;
    e.preventDefault();
    //console.log(this.state);
    this.setState({newCow: { cow_name: e.target.value , cow_desc: this.state.newCow.cow_desc}})
  }
  onChangeDesc(e) {
    this.setState({newCow: { cow_name: this.state.newCow.cow_name, cow_desc: e.target.value }});
  }

  addTo() {
    //console.log(this.state.newCow);
    this.props.addToCowList(this.state.newCow);
  }


  render() {
    return (
      <div className="add-bar">
        <label>Enter new cow </label>
        <input id="cow-name" value={this.state.newCow.cow_name} onChange={this.onChangeName.bind(this)} placeholder='type in name'></input>
        <input id="cow-desc" value={this.state.newCow.cow_desc} required onChange={this.onChangeDesc.bind(this)} placeholder='type in description'></input>
        <button onClick={this.addTo.bind(this)}>Add Cow</button>
      </div>
    )
  }
}



export default AddCow;