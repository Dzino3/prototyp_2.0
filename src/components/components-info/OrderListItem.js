import React, { useEffect, useState } from 'react'
import '../style/listStyle.css'
import OrderListItemSourced from './OrderListItemSourced';
import OrderListItemUnsourced from './OrderListItemUnsourced';
import OrderListItemInventory from './OrderListItemInventory';
import OrderListItemCanceled from './OrderListItemCanceled';

function OrderListItem({ item, selec = false }) {

  const [selected, setSelected] = useState(selec);


  const toggle = () => {
    setSelected(!selected)
  }

  const getStatusComponent = () => {
    switch (item.PROCESS_STATUS) {
      case 'sourced':
        return <OrderListItemSourced item={item}></OrderListItemSourced>; 
      case 'unsourced':
        return <OrderListItemUnsourced item={item}></OrderListItemUnsourced>;
      case 'inventory':
          return <OrderListItemInventory item={item}></OrderListItemInventory>;
      case 'canceled':
        return <OrderListItemCanceled item={item}></OrderListItemCanceled>;
    }
  }
  return (

    <div className='item'>
      <div className='beforeDiv' onClick={() => toggle()}>
        <div className='orderDiv1'>
          <div className={item.ORDER_NUMBER === '654321' ? 'orderImg2' : 'orderImg'}></div>
          <h3 className='listItemH3'>Order {item.ORDER_NUMBER}</h3>
          <div className='orderDiv2'>
            <div className='orderListDivFlex'>
              <p className='p1'>Model:</p>
              <p>{item.BASE_CODE_DESCR} ({item.BASE_CODE})</p>
            </div>
            <div className='orderListDivFlex'>
              <p className='p1'>PRES Date: </p>
              <p>{item.PRES_DATE}</p>
            </div>
          </div>
        </div>
        <div className='orderStatusDiv'>
          <p className='p1Status'>Status: </p>
          
          <p className={'orderStatus' + item.PROCESS_STATUS}>{item.PROCESS_STATUS}</p>
        </div>
        <span className='toggleSpan'>{selected === true ? '▼' : '◄'}</span>
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