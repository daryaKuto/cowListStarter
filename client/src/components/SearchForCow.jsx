import React from 'react';
import App from './App.jsx';


class SearchForCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }
  onChange (e) {
    this.setState({ query: e.target.value });
  }
  searchCow (e) {
    e.preventDefault();
    this.props.onSearch(this.state.query);
  }


  render() {
    return (
      <div>
        <label>Search for cows here!</label>
        <input id="cow-search" value={this.state.query} onChange={this.onChange.bind(this)} ></input>
        <button onClick={this.searchCow.bind(this)}>Search</button>
      </div>
    )
  }
}



export default SearchForCow;