import React from 'react'
import { connect } from 'react-redux';


function Ball(props) {
  return (
    <>
        
        <h1>Balls</h1>
        <h2>No. of Balls {props.ball}</h2>
        <button
        onClick={props.buyBall}
        >+</button>
        <button
        onClick={props.sellBall}
        >-</button>
    </>
  )
}
//To get your state variable from redux store we get mapStateToProps function
const mapStateToProps = (store) => {
    return store.Ball;
}

const mapDispatchtoProps = (dispatch) =>{
  return {
    sellBall: () => {
      dispatch({
        type: "decrement"
      })
    },
    buyBall: () => {
      dispatch({
        type: "increment"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Ball);