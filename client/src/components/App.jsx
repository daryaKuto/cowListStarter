import React from 'react';
import Cows from './Cows.jsx';
import SearchForCow from './SearchForCow.jsx';
import AddCow from './AddCow.jsx';
import axios from 'axios';

///VIEW

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [
        {"id": 1, "name": "Buttercup", "description": "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock" },
        {'id': 2, 'name': "Daisy", 'descdescription': "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties"}
      ]
    }
    this.handleAddCow = this.handleAddCow.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }



  componentDidMount() {
    //axios get request:
    //set state of cows with info from db
    axios.get('/cows')
    .then(res => {
      console.log(res.data);
      var renderedCows = res.data
      this.setState({cows: res.data});
    })
    .catch(err => console.log(err));
  }

  handleAddCow = (cowObj) =>  {
    //create new id for cow
    var newCow = {'name': cowObj.name, 'desc': cowObj.description};
    //axios post request to db
    console.log(newCow);
    axios.post('/cows', newCow)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  handleSearch = (searchedCow) => {
    console.log(searchedCow);
  }
  render() {
    return (
      <div>
        <h1>Welcome to our Cow List!</h1>
        <SearchForCow onSearch={this.handleSearch} />
        <AddCow addToCowList = {this.handleAddCow} />
        <Cows cows={this.state.cows} />
      </div>
    )
  }
}


export default App;