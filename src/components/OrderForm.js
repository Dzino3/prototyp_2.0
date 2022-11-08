import React, { useState} from 'react';
import './style/orderStyle.css';
import Sourced from './components-info/Sourced';
import Unsourced from './components-info/Unsourced';
import Axios from "axios"


function OrderForm({user}) {
    const [detailsB, setDetailsB] = useState({order_numer: "", unit: ""});
    const [bestellInfo, setBestellInfo] = useState([]);

    const Checked = () =>{
        //console.log(user.unit);
    /*    Axios.post("https://codux.herokuapp.com/order_number", {unit: "48", order_number: detailsB.order_numer}).then((response) =>{
            if (response.data.length !== 0){
                setBestellInfo(response.data[0]);
            }else{
                setBestellInfo([]);
            }
        });*/
        if (detailsB.order_numer === "884985"){
            setBestellInfo({
                BASE_CODE_DESCR: "Z515E 48A",
                FDD: "10.10.2022",
                OFDD: "27.06.2022",
                RDD: "15.06.2022",
                FDD_MINUS_RDD: "117",
                SOLD: "A",
                ORDER_SOURCE_DATE: "17.12.2021",
                ORDER_ENTRY_DATE: "28.09.2021",
                MACHINE_STATUS: "17.12.2021",
                ORDER_STATUS: "FRZ",
                REQ_SHIP_DATE: "03.10.2022",
                PRES_DATE: "",
                QTY: "1"
            })
        }else{
            setBestellInfo([]);
        }

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
