import React from 'react'
import { useReducer } from 'react'

function reducer(state, action){
    switch (action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            console.log("Wrong type");
    }
}
function Ball() {
    // let [balls, setBalls] = useState(10);
    // const increment =() =>{
    //     setBalls(balls+1);
    // }
    // const decrement =() =>{
    //     setBalls(balls-1);
    // }
    const [balls, dispatch] = useReducer(reducer, 10);
  return (
    <>
        <h1>Balls</h1>
        <h2>No. of Balls {balls}</h2>
        <button onClick={() =>{dispatch({type:"increment"})}}>+</button>
        <button onClick={() =>{dispatch({type:"decrement"})}}>-</button>
    </>
  )
}

export default Ball