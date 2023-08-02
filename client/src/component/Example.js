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


// && logical operator
const cars =['Ford', 'BMW', 'Audi'];

<Garage cars ={cars}/>
    export default function Garage(props){
    const cars = props.cars;
    return (
        <>
        <h1> Garage </h1>
        {cars.length > 0 && 
        <h2>
            You have {cars.length} cars in your garage. 
        </h2>
        }
    </>
    );
}