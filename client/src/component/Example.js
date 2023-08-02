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

import {useState} from "react";
export default function Car(){
    const [car, setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red",
    });

    const updateColor = () => {
        setCar((previousState) => {
            return { ...previousState, color :"blue"};
        });
    };

    return (
        <>
        <h1>My {car.brand} </h1>
        <p>
            It is a color {car.color} {car.model} from {car.year}.
        </p>
        <button type ="button" onClick={updateColor}>
        Blue
        </button>
        </>
    );
}