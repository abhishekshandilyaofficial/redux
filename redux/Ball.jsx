import React from 'react'
import { connect } from 'react-redux';


function Ball(props) {
  console.log(props);
  return (
    <>
        
        <h1>Balls</h1>
        <h2>No. of Balls {props.ball}</h2>
        <button>+</button>
        <button>-</button>
    </>
  )
}
//To get your state variable from redux store we get mapStateToProps function
const mapStateToProps = (store) => {
    return store;
}

export default connect(mapStateToProps)(Ball);