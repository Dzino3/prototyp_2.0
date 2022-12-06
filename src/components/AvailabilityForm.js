import React, { useState } from 'react';
import './style/availabilityStyle.css'
import Axios from "axios"
import Availability from './components-info/Availability';
import ListItem from './components-info/AvalabilityListItem';

function AvailabilityForm({user, t}) {

  const [produktInfo, setProduktInfo] = useState([]);
  const [enteredInput, setEnteredInput] = useState("");
  const [error, setError] = useState("");

  const LookForProduct = () =>{
    Axios.post("https://codux.herokuapp.com/base_code", {input : enteredInput}).then((response) =>{
        if (response.data.length !== 0){
            setProduktInfo(response.data);
            setError("");
        }else{
            setError(t('error'));
            setProduktInfo([]);
        }
    });
    
};

//Functional component for Availability Input
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      LookForProduct();
      event.preventDefault();
    }
  }


  return (
    <>
    <form className='avalForm'>

    <div className='avalForm-inner'>
        <div className='avalForm-group'>
          <h2 className='avalH2'>{t('availabilityLabel1')}</h2>
          {(error !== "") ? (<div className='avalError'>{error}</div>) : ""}
          <div className='orderForm-AvalgroupButton'>
            <input onKeyDown={handleKeyDown} placeholder={t('availabilityLabel2')} className='avalInput' type="text" name='base_code' id='base_code' onChange={e => setEnteredInput(e.target.value)} value={enteredInput}></input>
            <input className='avalCheckButton' type="button" value={t('availabilityButton')} onClick={LookForProduct}></input>
          </div>
        </div>
        {produktInfo.length !== 0 ? produktInfo.map((item)=>{return <ListItem user={user} item={item} selec={true} t={t}></ListItem>; }) : <></>}
    </div>
    </form>
    </>
  )
}

export default AvailabilityForm
