// rfce
// adding events component
// export default function Example() {
//   const shoot =(a) => {
//     alert(a);
//   };
//     return (
//     <button onClick={() => shoot("Goal!")}>Take the shot !</button>
//     );

// }

// export default function Goal(props){
//     const isgoal= props.isgoal;
//     if (isgoal){
//         return <MadeGoal/>

//     }
//         return <MissedGoal/>
// }

// function MissedGoal(){
//     return <h1> MISSED! </h1>;
// }

// function MadeGoal(){
//     return <h1> Goal! </h1> 
// }


// // && logical operator
// const cars =['Ford', 'BMW', 'Audi'];

// <Garage cars ={cars}/>
//     export default function Garage(props){
//     const cars = props.cars;
//     return (
//         <>
//         <h1> Garage </h1>
//         {cars.length > 0 && 
//         <h2>
//             You have {cars.length} cars in your garage. 
//         </h2>
//         }
//     </>
//     );
// }

// // ternary operator 

// export default function Goal(props) {
//     const isgoal= props.isgoal;
//     return(
//         <>
//         {isgoal ? <MadeGoal/> : <MissedGoal/> }
//         </>
//     );
// }

// function MissedGoal(){
//      return <h1> MISSED! </h1>;
// }

// function MadeGoal(){
//      return <h1> Goal! </h1> 
// }

// React list

// export default function Garage(){
//     const cars =['Ford','BMW', 'Audi', 'Tesla'];
//     return (
//         <>
//         <h1> Who lives in my garage? </h1>
//         <ul>
//             {cars.map((car) => <Car brand ={car} /> )}
//         </ul>
//         </>
//     );
// }

// function Car(props){
//     return <li>I am  {props.brand} </li>;
// }

// Hook react 
// usestate hook
// import React, {useState} from "react";

// export default function FavoriteColor() {
//     const [color, setColor] = useState("red");

//     return (
//         <>
//         <h1> My favorite color is {color}! </h1>
//         <button type ="button" onClick={() => setColor("blue")}> 
//         Blue
//         </button>
//         <button type ="button" onClick={() => setColor("red")}> 
//         Red
//         </button>
//         </>
//     )
// }

// updating objects and arrays in state

// import {useState} from "react";
// import Button from 'react-bootstrap/Button';

// const Car = () => {
//     const [car, setCar] = useState({
//       brand: "Ford",
//       model: "Mustang",
//       year: "1964",
//       color: "red",
//     });

// const [customColor, setCustomColor] = useState('');

//     const updateColor = (newColor) => {
//         setCar((previousState) => {
//             return { ...previousState, color :newColor};
//         });
//     };

// const handleCustomColorChange = (event) => {
//         setCustomColor(event.target.value);
//       };
      
// const handleApplyCustomColor = () => {
//         updateColor(customColor);
//         setCustomColor(''); // Clear the input field after applying the color
//       };

//     return (
//         <>
//         <h1>My {car.brand} </h1>
//         <p>
//             It is a color {car.color} {car.model} from {car.year}.
//         </p>
//         <input
//         type="text"
//         value={customColor}
//         onChange={handleCustomColorChange}
//         placeholder="Enter custom color"
//       />
//         <Button variant='warning' onClick= {handleApplyCustomColor}> Apply</Button>   
//         </>
//     );
// }

// export default Car;


// useEffect Hooks
// import {useEffect, useState} from "react";

// export default function Timer(){
//   const [count, setCount] = useState(0);

//   useEffect (() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count +1);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return <h1> I've rendered {count} times! </h1>;
// }

import {useEffect, useState} from "react";
import axios from "axios";

export default function Example(){
  const [data, setData] = useState([]);
  useEffect(() =>{
     const fetchData = async () => {
      const { data } = await axios ("http://localhost:3000/api/v1/todos")
      setData(data.data);
     };
     fetchData();
  }, []);
  return (
    <>
    {data && data.length > 0 && (
      <>
        <ul>
          {data.map((todo, index) => (
            <li key ={index} > {todo?.title} </li>
          ))}
        </ul>
      </>

  )}
  </> 
    
  );
  
}
