import React from 'react';
import App from './App.jsx';


const Cows = (props) => {
  //console.log(props);
  return props.cows.map((cow) => {
      //console.log(cow.name);
      var name = cow.cow_name;
      var desc = cow.cow_desc;
      var id = cow._id;
      return (
        <ul>
          <span>Hi! My name is {name}! </span>
        </ul>
      )
    })
  }


export default Cows;