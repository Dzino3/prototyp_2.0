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
  return (

    <div className='item'>
      <div className='beforeDiv' onClick={() => toggle()}>
        <div className='orderDiv1'>
          <div className={item.ORDER_NUMBER === '654321' ? 'orderImg2' : 'orderImg'}></div>

          <div className="topRow">
            <h3 className='listItemH3'>{t('listItemLabel1')} {item.ORDER_NUMBER}</h3>
            <div className='mobilStatusHidden'>
              <div className='orderStatusDiv'>
                <p className={'orderStatus' + item.PROCESS_STATUS}>{item.PROCESS_STATUS}</p>
              </div>
              <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
            </div>
          </div>

          <div className='orderDiv2'>
            <div className='orderListDivFlex'>
              <p className='p1'>{t('listItemLabel2')}: </p>
              <p>{item.BASE_CODE_DESCR} ({item.BASE_CODE})</p>
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
            {getStatusComponent()}
          </div>
        </div>
      </div>
    </div>

  )
}

export default OrderListItem