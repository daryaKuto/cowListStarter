import React from 'react';
import Cows from './Cows.jsx';
import Cow from './Cow.jsx';
import SearchForCow from './SearchForCow.jsx';
import AddCow from './AddCow.jsx';
import axios from 'axios';

///VIEW

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showDesc: false,
      cows: [
        { "id": 1, "cow_name": "Buttercup", "cow_desc": "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock" },
        { 'id': 2, 'cow_name': "Daisy", 'cow_desc': "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties" }
      ]
    }
    this.handleAddCow = this.handleAddCow.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    //this.handleShowDescription = this.handleShowDescription.bind(this);
  }


  // handleShowDescription() {
  //   // will show cow descption on click, pass to Cows component
  //   console.log(this.state.showDesc);
  // }


  componentDidMount() {
    //axios get request:
    //set state of cows with info from db
    axios.get('/cows')
      .then(res => {
        //console.log(res.data);
        var renderedCows = res.data
        this.setState({ cows: res.data });
      })
      .catch(err => console.log(err));
  }

  handleAddCow = (cowObj) => {
    //create new id for cow
    var newCow = { 'name': cowObj.cow_name, 'desc': cowObj.cow_desc };
    //axios post request to db
    console.log(newCow);
    axios.post('/cows', newCow)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  handleSearch = (searchedCow) => {
    //console.log(searchedCow);
    var currentCows = this.state.cows;
    var cowObj = {};
    cowObj.name = searchedCow;
    axios.get('/searchforcow', cowObj)
      .then((response) => {
        console.log(response);
        console.log(this.state.cows);
        //var cowFound = response;
        if (response.status === 200) {
          var filterCow = currentCows.filter(cow => cow.cow_name === searchedCow);
          console.log(filterCow);
          this.setState({cows: filterCow});
        }
        //to find name that includes and matches searched cow name
      })
      .catch((error) => {
        console.log(error);
      })
    //axios.get
  }
  render() {
    return (
      <div>
        <h1>Welcome to our Cow List!</h1>
        <SearchForCow onSearch={this.handleSearch} />
        <AddCow addToCowList={this.handleAddCow} />
        <Cows cows={this.state.cows} />
      </div>
    )
  }
}

//showDesc= {this.handleShowDescription}
export default App;