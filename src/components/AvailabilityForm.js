import React, { useState } from 'react';
import './style/availabilityStyle.css'
import Axios from "axios"
import Availability from './components-info/Availability';

function AvailabilityForm({user}) {

  const [produktInfo, setProduktInfo] = useState([]);
  const [enteredBaseCode, setEnteredBaseCode] = useState("");


  const LookForProduct = () =>{
    Axios.post("https://codux.herokuapp.com/base_code", {base_code : enteredBaseCode}).then((response) =>{
        if (response.data.length !== 0){
          console.log(response.data)
            setProduktInfo(response.data[0]);
        }else{
            setProduktInfo([]);
        }
    });
    
};


  return (
    <>
    <form className='avalForm'>

    <div className='avalForm-inner'>
        
        <div className='avalForm-group'>
            <h2 className='avalH2'>Availability</h2>
            <label className='avalLabel'>Base Code:</label>
            <input className='avalInput' type="text" name='base_code' id='base_code' onChange={e => setEnteredBaseCode(e.target.value)} value={enteredBaseCode}></input>
            <input className='avalCheckButton' type="button" value="Check" onClick={LookForProduct}></input>
        </div>
        {produktInfo.length !== 0 ? <Availability produktInfo={produktInfo}></Availability> : <></>}
    </div>
    </form>
    </>
  )
}

export default AvailabilityForm
