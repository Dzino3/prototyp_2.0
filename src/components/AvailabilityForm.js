import React, { useState } from 'react';
import './style/availabilityStyle.css'
import Axios from "axios"
import Availability from './components-info/Availability';
import ListItem from './components-info/AvalabilityListItem';

function AvailabilityForm({t}) {

  const [produktInfo, setProduktInfo] = useState([]);
  const [enteredInput, setEnteredInput] = useState("");


  const LookForProduct = () =>{
    Axios.post("https://codux.herokuapp.com/base_code", {input : enteredInput}).then((response) =>{
        if (response.data.length !== 0){
            setProduktInfo(response.data);
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
            <h2 className='avalH2'>{t('availabilityLabel1')}</h2>
            <label className='avalLabel'>{t('availabilityLabel2')} </label>
            <input className='avalInput' type="text" name='base_code' id='base_code' onChange={e => setEnteredInput(e.target.value)} value={enteredInput}></input>
            <input className='avalCheckButton' type="button" value={t('availabilityButton')} onClick={LookForProduct}></input>
        </div>
        {produktInfo.length !== 0 ? produktInfo.map((item)=>{return <ListItem item={item} selec={true}></ListItem>; }) : <></>}
    </div>
    </form>
    </>
  )
}

export default AvailabilityForm
