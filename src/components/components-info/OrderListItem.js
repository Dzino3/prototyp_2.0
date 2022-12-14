import React, { useEffect, useState } from 'react'
import '../style/listStyle.css'
import OrderListItemSourced from './OrderListItemSourced';
import OrderListItemUnsourced from './OrderListItemUnsourced';
import OrderListItemInventory from './OrderListItemInventory';
import OrderListItemCanceled from './OrderListItemCanceled';

function OrderListItem({ item, selec = false, t }) {

  const [selected, setSelected] = useState(selec);

  const toggle = () => {
    setSelected(!selected)
  }

  const getStatusComponent = () => {
    switch (item.PROCESS_STATUS) {
      case 'sourced':
        return <OrderListItemSourced item={item} t={t}></OrderListItemSourced>;
      case 'unsourced':
        return <OrderListItemUnsourced item={item} t={t}></OrderListItemUnsourced>;
      case 'inventory':
        return <OrderListItemInventory item={item} t={t}></OrderListItemInventory>;
      case 'canceled':
        return <OrderListItemCanceled item={item} t={t}></OrderListItemCanceled>;
    }
  }

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  function getRandomNumber(){
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  return (

    <div className='item'>
      <div className='beforeDiv' onClick={() => toggle()}>
        <div className='orderDiv1'>
          <div className="topRow">
            <div className='mobilStatusHidden'>
              <div className='orderStatusDiv'>
                <p className={'orderStatus' + item.PROCESS_STATUS}>{item.PROCESS_STATUS}</p>
              </div>
              <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
            </div>
          </div>

          <div className='orderDiv2'>
            <div className="orderImg2"></div>
            <div className='listH3andPBlock'>
              <h3 className='listItemH3'>{t('listItemLabel1')} {item.ORDER_NUMBER}</h3>
              <div className='orderListDivFlex'>
                <p className='p1'>{t('listItemLabel2')}: </p>
                <p>{item.BASE_CODE_DESCR} ({item.BASE_CODE})</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='mobilStatus'>
          <div className='orderStatusDiv'>
            <p className={'orderStatus' + item.PROCESS_STATUS}>{item.PROCESS_STATUS}</p>
          </div>
          <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
        </div>
      </div>

      <div>
        <div className={selected === true ? 'afterDivshow' : 'afterDiv'}>
          <div className='afterDiv1'>
            <div className='afterDiv1-2'>
              <div className='afterDiv1-3'>
                <div className='contactUs'>
                  <p className='needHelp'>{t('contactUsText')}</p>
                  <Mailto email="codux@gmx.de" subject={"Order #"+item.ORDER_NUMBER} body="Hello John Deere Support, I need help with this order:">
                    <input  className='contactUsButton' type="button" value={t('contactUsButton')}></input>
                  </Mailto>
                </div>
              </div>
              {getStatusComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default OrderListItem