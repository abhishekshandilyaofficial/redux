import React, { useState } from 'react'

function Bat() {
    const [bat, setBat] = useState(10);
    const [batToTransact, setToChangeBat] = useState("");
    const sellBat = () => {
        setBat(bat - Number(batToTransact));
        setToChangeBat("");
    }
    const buyBat = () => {
        setBat(bat + Number(batToTransact));
        setToChangeBat("");
    }
  return (
    <>
        <h1>Bat</h1>
        <h2>No of Bats:{bat}</h2>
        <input type="text" value={batToTransact}
        onChange={(e) => {
            let value = e.target.value;
            setToChangeBat(value);
        }} />
        <button onClick = {sellBat}>Sell</button>
        <button onClick={buyBat}>Buy</button>
    </>
    
  )
}

export default Bat