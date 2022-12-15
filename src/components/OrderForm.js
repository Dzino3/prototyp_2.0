import React, { useState} from 'react';
import './style/orderStyle.css';
import Axios from "axios"
import ListItem from './components-info/OrderListItem';


/* 
Renders the Search function for individual orders or customers
*/
function OrderForm({user, t}) {
    const [detailsB, setDetailsB] = useState({order_numer: '', unit: ''}); //variable for order number in combination with unit code
    const [bestellInfo, setBestellInfo] = useState([]); //List to save order information
    const [error, setError] = useState(""); //variable for error

    //Check function for looking if the entered data is in the database
    //and if it is the data of the loggen in user
    const Checked = () =>{
        Axios.post("https://codux.herokuapp.com/order_number", {unit: user.unit, order_number: detailsB.order_numer, acc: user.acc}).then((response) =>{
            if (response.data.length !== 0){
                setBestellInfo(response.data);
                setError("");
            }else{
                setError(t('error'))
                setTimeout(() => setError(""), 900);
                setBestellInfo([]);
            }
        })
    }

   //Functional component for Order number Input
   //handles the error with enter key
   const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        Checked();
        event.preventDefault();
        }
    }
    

  return (
    <div className='orderWholeDiv'>
        <div id='HomePage'></div>
            <form className='orderForm'>
                <div className='orderForm-inner'>
                    <div className='order-inner-inner'>
                        <div className='orderForm-groupOut'>
                            <h2>{t('orderLabel1')}</h2>
                            <div className='orderForm-group'>
                                {(error !== "") ? (<div className='orderError'>{error}</div>
                                ) : ""}
                                <div className='orderForm-groupButton'>
                                    <input placeholder={t('orderLabel2')} onKeyDown={handleKeyDown} className='orderInput' type="text" name='bestellnummer' id='bestellnummer' onChange={e => setDetailsB({...detailsB, order_numer: e.target.value})} value={detailsB.order_numer}></input>
                                    <input className='checkButton' type="button" value={t('orderButton')} onClick={Checked}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        <div className='orderItem'>{bestellInfo.length !== 0 ? bestellInfo.map((order)=>{return <ListItem item={order} selec={false} t={t}></ListItem>}) : <></>}</div>
    </div>
  )
}

export default OrderForm
