import React, { useState, useEffect } from 'react'
import Axios from "axios"

function AvalabilityListItem({user, item, selec = false, t }) {

  const [selected, setSelected] = useState(selec);

  const toggle = () => {
    setSelected(!selected)
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
      case "Compact Utility Tractors & Loaders":
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
        <div className='beforeDivAval' onClick={() => toggle()}>
          <div className='orderDiv1'>
            <div className='topRow'>
              <h3 className='listItemH3Aval'>{item.PRODUCT}</h3>
              <div className='mobilStatusAvalHidden'>
                <div className='orderListDivFlex'>
                  <p className='p1Aval'>{translateCategory(item.CATEGORY)}</p>
                </div>
                <span className='toggleSpanAval'>{selected === true ? '▼' : '◄'}</span>
              </div>
            </div>
            
            <div className='orderDiv2Aval'>
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
            <span className='toggleSpanAval'>{selected === true ? '▼' : '◄'}</span>
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
                  <p className='p3Comment'>{item.COMMENTS_RESTRICTIONS !== "" ? item.COMMENTS_RESTRICTIONS : "-"}</p>
                </div>
                
              </div>
              <div className='contactUsAval'>
                  <p className='needHelp'>{t('contactUsText2')}</p>
                  <Mailto email="codux@gmx.de" subject={"Product: "+item.PRODUCT} body="Hello John Deere Support, I need help with this product:">
                    <input  className='contactUsButton' type="button" value={t('contactUsButton')}></input>
                  </Mailto>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AvalabilityListItem
