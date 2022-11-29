import React, { useState} from 'react';
import './style/orderStyle.css';
import Sourced from './components-info/Sourced';
import Unsourced from './components-info/Unsourced';
import Axios from "axios"
import ListItem from './components-info/OrderListItem';


function OrderForm({user, t}) {
    const [detailsB, setDetailsB] = useState({order_numer: '', unit: ''});
    const [bestellInfo, setBestellInfo] = useState([]);

    const Checked = () =>{
        //console.log(user.unit);
        Axios.post("https://codux.herokuapp.com/order_number", {unit: user.unit, order_number: detailsB.order_numer, acc: user.acc}).then((response) =>{
            if (response.data.length !== 0){
                setBestellInfo(response.data[0]);
            }else{
                setBestellInfo([]);
            }
        })
    }


  return (
    <>
    <form className='orderForm'>
    <div className='orderForm-inner'>
        <div className='order-inner-inner'>
            <div className='orderForm-groupOut'>
                <h2>{t('orderLabel1')}</h2>
                <div className='orderForm-group'>
                    <label className='orderLabel'>{t('orderLabel2')}</label>
                    <div className='orderForm-groupButton'>
                        <input className='orderInput' type="text" name='bestellnummer' id='bestellnummer' onChange={e => setDetailsB({...detailsB, order_numer: e.target.value})} value={detailsB.order_numer}></input>
                        <input className='checkButton' type="button" value={t('orderButton')} onClick={Checked}></input>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    </form>
    <div className='orderItem'>{bestellInfo.length !== 0 ? <ListItem item={bestellInfo} selec={true} t={t}></ListItem> : <></>}</div>
    </>
  )
}

export default OrderForm
