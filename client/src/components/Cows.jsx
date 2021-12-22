import React from 'react';
import App from './App.jsx';
import Cow from './Cow.jsx';


//add a span wih cow desc that shows only when clicked on the cow name

const Cows = (props) => {
  console.log(props.cows);
  return (
    <ul className='list'>
      {props.cows.map((cow) => (
        <div>
        <Cow cow_name={cow.cow_name} cow_desc={cow.cow_desc} key ={cow.id} />
        </div>
  ))
}
    </ul >
  )
}


export default Cows;

// const List = ({groceries, handleUpdate}) => {
//   return (
//     <ul className="groceries">
//       {groceries.map((grocery)=>(
//         <Grocery handleUpdate={handleUpdate} key={grocery.grocery_id} grocery={grocery}/>
//       ))}
//     </ul>)
// }

// export default List;
