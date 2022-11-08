import React, { useState,useReducer } from 'react';
import './style/orderStyle.css';
import Sourced from './components-info/Sourced';
import Unsourced from './components-info/Unsourced';
import Axios from "axios"


function OrderForm({user}) {
    const [detailsB, setDetailsB] = useState({order_numer: "", unit: ""});
    const [bestellInfo, setBestellInfo] = useState([]);

    const Checked = () =>{
        console.log(user.unit);
        Axios.post("https://codux.herokuapp.com/order_number", {unit: user.unit, order_number: detailsB.order_numer}).then((response) =>{
            if (response.data.length !== 0){
                setBestellInfo(response.data[0]);
            }else{
                setBestellInfo([]);
            }
        });

    }


  return (
    <>
    <form className='orderForm'>
    <div className='orderForm-inner'>
        <div className='order-inner-inner'>
            <div className='orderForm-group'>
                <h2>Query order</h2>
                <label className='orderLabel'>Order number:</label>
                <input className='orderInput' type="text" name='bestellnummer' id='bestellnummer' onChange={e => setDetailsB({...detailsB, order_numer: e.target.value})} value={detailsB.order_numer}></input>
                <input className='checkButton' type="button" value="CHECK" onClick={Checked}></input>
            </div>
            {bestellInfo.length !== 0 ? <Sourced sourcedInfo={bestellInfo}></Sourced> : <></>}
            
        </div>
    </div>
    </form>
    </>
  )
}

export default OrderForm
