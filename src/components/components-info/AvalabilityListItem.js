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

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  function translateCategory(x){
    switch(x){
      case "Commercial Mowing":
        return t('avalListLabel3o1');
      case "Compact Utility Tractory & Loaders":
        return t('avalListLabel3o2');
      case "Golf":
        return t('avalListLabel3o3');
      case "Riding Lawn Tractors":
        return t('avalListLabel3o4');
      case "Utility Tractors":
        return t('avalListLabel3o5');
      case "Utility Vehicles":
        return t('avalListLabel3o6');
    }
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
                  <p className='p1Aval'>{translateCategory(item.CATEGORY)}</p>
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
              <p className='p1Aval'>{translateCategory(item.CATEGORY)}</p>
            </div>
            <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
          </div>
        </div>
        <div>
          <div className={selected === true ? 'afterDivshow' : 'afterDiv'}>
            <div className='contactBlock'>
            <div className='afterDiv1'>
              <div className='flex'>
                <div className='block'>
                  <p className='p3'>{t('avalItemLabel4')}: </p>
                  <p>{item.BEST_CASE !== "" ? item.BEST_CASE : "-"}</p>
                </div>
                <div className='block'>
                  <p className='p3'>{t('avalItemLabel5')}: </p>
                  <p>{item.WORST_CASE !== "" ? item.WORST_CASE : "-"}</p>
                </div>
                <div className='block'>
                  <p className='p3'>{t('avalItemLabel7')}: </p>
                  <p>{item.MY !== "" ? item.MY : "-"}</p>
                </div>
                <div className='block'>
                  <p className='p3'>{'Info'}: </p>
                  <p>{item.INFO !== "" ? item.INFO : "-"}</p>
                </div>
                <div className='block'>
                  <p className='p3'>{t('avalItemLabel6')}: </p>
                  <p>{item.COMMENTS_RESTRICTIONS !== "" ? item.COMMENTS_RESTRICTIONS : "-"}</p>
                </div>
                
              </div>
              <div className='contactUs'>
                  <p className='needHelp'>{t('contactUsText2')}</p>
                  <Mailto email="codux@gmx.de" subject={"Product: "+item.PRODUCT} body="Hello John Deere Support, I need help with this product:">
                    <input  className='contactUsButton' type="button" value={t('contactUsButton')}></input>
                  </Mailto>
                </div>
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
