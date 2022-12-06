import React, { useState, useEffect } from 'react'
import Axios from "axios"

function AvalabilityListItem({user, item, selec = false, t }) {

  const [selected, setSelected] = useState(selec);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggle = () => {
    setSelected(!selected)
  }

  const sendEmail = () =>{
    Axios.post("https://codux.herokuapp.com/email", {unit: user.unit, acc: user.acc, EMail: email, Message: message, product:item.PRODUCT, bundle:item.BUNDLE}).then((response) =>{

  });
  }

  return (
    <div>
      <div className='item'>
        <div className='beforeDiv' onClick={() => toggle()}>

          <div className='orderDiv1'>

            <div className='topRow'>
              <h3 className='listItemH3'>{item.PRODUCT}</h3>
              <div className='mobilStatusAvalHidden'>
                <div className='orderListDivFlex'>
                  <p className='p1Aval'>{item.CATEGORY}</p>
                </div>
                <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
              </div>

            </div>
            
            <div className='orderDiv2'>
              <div className='orderListDivFlex'>
                <p className='p1'>{t('avalItemLabel1')} </p>
                <p>{item.BASE_CODE}</p>
              </div>
              <div className='orderListDivFlex'>
                <p className='p1'>{t('avalItemLabel2')}</p>
                <p> {item.BUNDLE}</p>
              </div>
            </div>

          </div>
          <div className='mobilStatusAval'>
            <div className='orderListDivFlex'>
              <p className='p1Aval'>{item.CATEGORY}</p>
            </div>
            <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
          </div>
        </div>
        <div>
          <div className={selected === true ? 'afterDivshow' : 'afterDiv'}>
            <div className='afterDiv1'>
              <div className='flex'>
                <p className='p3'>{t('avalItemLabel4')}: {item.BEST_CASE}</p>
                <p className='p3'>{t('avalItemLabel5')}: {item.WORST_CASE}</p>
                <p className='p3'>{t('avalItemLabel7')}: {item.MY}</p>
                <p className='p3'>{'Info'}: {item.INFO}</p>
                <p className='p3'>{t('avalItemLabel6')}: {item.COMMENTS_RESTRICTIONS}</p>
              </div>

              {/* 
              <div className='EmailDiv'>
                <input type="email" id="email" name="email" placeholder='Your E-Mail'></input>
                <br></br>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Write your message...' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                <br></br>
                <button onClick={sendEmail}>Send</button>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvalabilityListItem
